import { useLocation } from 'preact-iso';
import { useTheme } from '../hooks/useTheme';
import { ThemeToggle } from './ThemeToggle';

const navLink = (active: boolean) =>
	[
		'text-[13px] rounded-md px-2.5 py-[5px] no-underline transition-colors',
		active
			? 'text-fg bg-black/8 dark:bg-white/8'
			: 'text-fg-muted hover:text-fg hover:bg-black/6 dark:hover:bg-white/6',
	].join(' ');

export function Header() {
	const { url } = useLocation();
	const { theme, toggle } = useTheme();

	return (
		<header class="flex flex-col md:flex-row md:items-center md:justify-between px-5 border-b border-b-[0.5px] border-fg/15">
			<div class="flex items-center justify-between h-[52px]">
				<div class="flex items-center gap-2.5">
					<div class="w-[20px] h-[20px] rounded-[4px] bg-fg shrink-0" />
					<span class="text-[14px] font-medium tracking-tight">maya0513</span>
				</div>
				<div class="md:hidden">
					<ThemeToggle theme={theme} onToggle={toggle} />
				</div>
			</div>
			<nav class="flex gap-0.5 pb-2.5 md:pb-0">
				<a href="/" class={navLink(url == '/')}>home</a>
				<a href="/about" class={navLink(url == '/about')}>about</a>
				<a href="/tech" class={navLink(url == '/tech')}>tech</a>
				<a href="/notes" class={navLink(url == '/notes')}>notes</a>
			</nav>
			<div class="hidden md:block">
				<ThemeToggle theme={theme} onToggle={toggle} />
			</div>
		</header>
	);
}
