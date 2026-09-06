import { useEffect, useRef, useState } from 'preact/hooks';
import { buildCalendarEvent } from '../lib/calendar/buildEvent';
import { downloadIcs } from '../lib/calendar/ics';
import { buildInvitationText, googleCalendarUrl, outlookCalendarUrl } from '../lib/calendar/intents';
import type { Participant, TimeSlot } from '../lib/time/types';

const menuItem =
	'block w-full rounded-sm px-3 py-2 text-left text-body-sm text-body transition-colors hover:bg-hairline-soft hover:text-ink';

interface SlotActionsProps {
	participants: Participant[];
	slot: TimeSlot;
}

/** A single "Add to calendar" control per result row that expands to reveal calendar/invite options. */
export function SlotActions({ participants, slot }: SlotActionsProps) {
	const [isOpen, setIsOpen] = useState(false);
	const [copied, setCopied] = useState(false);
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
				setIsOpen(false);
			}
		}
		document.addEventListener('mousedown', handleClickOutside);
		return () => document.removeEventListener('mousedown', handleClickOutside);
	}, []);

	async function handleCopyInvite() {
		const event = buildCalendarEvent(participants, slot);
		await navigator.clipboard.writeText(buildInvitationText(event));
		setCopied(true);
		setIsOpen(false);
		setTimeout(() => setCopied(false), 2000);
	}

	const event = buildCalendarEvent(participants, slot);

	return (
		<div ref={containerRef} class="relative inline-block">
			<button
				type="button"
				onClick={() => setIsOpen((v) => !v)}
				aria-haspopup="true"
				aria-expanded={isOpen}
				class="inline-flex items-center gap-1.5 rounded-full border border-hairline px-3 py-1.5 text-body-sm text-body transition-colors hover:border-mute hover:text-ink"
			>
				<span aria-hidden="true">📅</span>
				Add to calendar
				<span aria-hidden="true" class={`text-mute transition-transform duration-150 ${isOpen ? 'rotate-180' : ''}`}>
					▾
				</span>
			</button>
			{isOpen && (
				<div class="absolute right-0 z-10 mt-2 flex w-56 flex-col gap-0.5 rounded-md border border-hairline bg-canvas-elevated p-2 shadow-[0_2px_2px_rgba(0,0,0,0.04),0_8px_16px_-4px_rgba(0,0,0,0.08)]">
					<a
						href={googleCalendarUrl(event)}
						target="_blank"
						rel="noopener noreferrer"
						class={menuItem}
						onClick={() => setIsOpen(false)}
					>
						Google Calendar
					</a>
					<a
						href={outlookCalendarUrl(event)}
						target="_blank"
						rel="noopener noreferrer"
						class={menuItem}
						onClick={() => setIsOpen(false)}
					>
						Outlook
					</a>
					<button
						type="button"
						onClick={() => {
							downloadIcs(event);
							setIsOpen(false);
						}}
						class={menuItem}
					>
						Download .ics
					</button>
					<button type="button" onClick={handleCopyInvite} class={menuItem}>
						{copied ? 'Copied!' : 'Copy invitation text'}
					</button>
				</div>
			)}
		</div>
	);
}
