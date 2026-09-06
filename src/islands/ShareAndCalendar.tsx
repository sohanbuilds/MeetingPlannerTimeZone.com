import { useState } from 'preact/hooks';
import { buildCalendarEvent } from '../lib/calendar/buildEvent';
import { downloadIcs } from '../lib/calendar/ics';
import { googleCalendarUrl, outlookCalendarUrl } from '../lib/calendar/intents';
import { buildShareUrl, type SharedState } from '../lib/url/stateCodec';
import type { Participant, TimeSlot } from '../lib/time/types';

const pillButton =
	'inline-flex items-center gap-2 rounded-full border border-hairline bg-canvas-elevated px-4 py-2 text-button-md text-ink transition-all hover:border-ink hover:shadow-[0_1px_2px_rgba(0,0,0,0.08)] active:scale-[0.98]';

interface ShareAndCalendarProps {
	state: SharedState;
	selectedSlot?: TimeSlot;
	participants: Participant[];
}

export function ShareAndCalendar({ state, selectedSlot, participants }: ShareAndCalendarProps) {
	const [copied, setCopied] = useState(false);

	async function handleCopyLink() {
		const url = buildShareUrl(window.location.href.split('?')[0], state);
		await navigator.clipboard.writeText(url);
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	}

	return (
		<div class="flex flex-wrap items-center gap-3">
			<button
				type="button"
				onClick={handleCopyLink}
				class={`${pillButton} ${copied ? 'border-link text-link-deep' : ''}`}
			>
				<span aria-hidden="true">{copied ? '✓' : '🔗'}</span>
				{copied ? 'Link copied!' : 'Copy shareable link'}
			</button>

			{selectedSlot && (
				<>
					<a
						href={googleCalendarUrl(buildCalendarEvent(participants, selectedSlot))}
						target="_blank"
						rel="noopener noreferrer"
						class={pillButton}
					>
						<span aria-hidden="true">📅</span>
						Google Calendar
					</a>
					<a
						href={outlookCalendarUrl(buildCalendarEvent(participants, selectedSlot))}
						target="_blank"
						rel="noopener noreferrer"
						class={pillButton}
					>
						<span aria-hidden="true">📅</span>
						Outlook
					</a>
					<button type="button" onClick={() => downloadIcs(buildCalendarEvent(participants, selectedSlot))} class={pillButton}>
						<span aria-hidden="true">⬇</span>
						Download .ics
					</button>
				</>
			)}
		</div>
	);
}
