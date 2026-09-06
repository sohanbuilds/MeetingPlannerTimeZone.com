import type { ComfortTier } from '../lib/time/types';

const TIER_CONFIG: Record<ComfortTier, { label: string; icon: string; className: string }> = {
	excellent: { label: 'Excellent', icon: '●', className: 'bg-link-soft text-link-deep' },
	good: { label: 'Good', icon: '◕', className: 'bg-cyan-soft text-link-deep' },
	fair: { label: 'Fair', icon: '◐', className: 'bg-warning-soft text-warning-deep' },
	poor: { label: 'Poor', icon: '▲', className: 'bg-error/10 text-error-deep' },
};

/** Every tier pairs an icon + text label with color — never color alone (accessibility). */
export function ComfortBadge({ tier }: { tier: ComfortTier }) {
	const config = TIER_CONFIG[tier];
	return (
		<span class={`inline-flex items-center gap-1 rounded-full px-3 py-[2px] text-body-sm font-medium ${config.className}`}>
			<span aria-hidden="true">{config.icon}</span>
			{config.label}
		</span>
	);
}
