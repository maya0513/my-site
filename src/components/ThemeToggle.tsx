import type { Theme } from '../hooks/useTheme';

interface Props {
	theme: Theme;
	onToggle: () => void;
}

export function ThemeToggle({ theme, onToggle }: Props) {
	const icon = theme === 'dark' ? '☾' : '☀';
	const label = theme === 'dark' ? 'ダークモード（クリックで切り替え）' : 'ライトモード（クリックで切り替え）';

	return (
		<button
			class="bg-transparent border border-fg/25 rounded-md text-fg-muted cursor-pointer text-sm px-2.5 py-[5px] transition-colors hover:bg-black/6 hover:text-fg dark:hover:bg-white/6"
			onClick={onToggle}
			title={label}
			aria-label={label}
		>
			<span class="inline-block w-[1em] text-center" aria-hidden="true">{icon}</span>
		</button>
	);
}
