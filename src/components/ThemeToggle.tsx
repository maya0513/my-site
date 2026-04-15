import { useState, useEffect, useRef } from 'preact/hooks';
import type { Theme } from '../hooks/useTheme';

const MODES: { value: Theme; label: string; icon: string }[] = [
	{ value: 'system', label: 'System', icon: '⊙' },
	{ value: 'light', label: 'Light', icon: '☀' },
	{ value: 'dark', label: 'Dark', icon: '☾' },
];

interface Props {
	theme: Theme;
	onThemeChange: (t: Theme) => void;
}

export function ThemeToggle({ theme, onThemeChange }: Props) {
	const [open, setOpen] = useState(false);
	const ref = useRef<HTMLDivElement>(null);
	const current = MODES.find((m) => m.value === theme) ?? MODES[0];

	useEffect(() => {
		if (!open) return;
		const onPointerDown = (e: PointerEvent) => {
			if (!ref.current?.contains(e.target as Node)) setOpen(false);
		};
		document.addEventListener('pointerdown', onPointerDown);
		return () => document.removeEventListener('pointerdown', onPointerDown);
	}, [open]);

	const select = (value: Theme) => {
		onThemeChange(value);
		setOpen(false);
	};

	return (
		<div class="theme-toggle" ref={ref}>
			<button
				class="theme-toggle__trigger"
				onClick={() => setOpen((v) => !v)}
				aria-haspopup="listbox"
				aria-expanded={open}
				title="テーマ切り替え"
			>
				<span aria-hidden="true">{current.icon}</span>
				<span class="theme-toggle__label">{current.label}</span>
				<span class={`theme-toggle__caret${open ? ' theme-toggle__caret--open' : ''}`} aria-hidden="true">▾</span>
			</button>

			{open && (
				<ul class="theme-toggle__menu" role="listbox" aria-label="テーマ">
					{MODES.map(({ value, label, icon }) => (
						<li
							key={value}
							role="option"
							aria-selected={theme === value}
							class={`theme-toggle__option${theme === value ? ' theme-toggle__option--selected' : ''}`}
							onClick={() => select(value)}
						>
							<span aria-hidden="true">{icon}</span>
							{label}
						</li>
					))}
				</ul>
			)}
		</div>
	);
}
