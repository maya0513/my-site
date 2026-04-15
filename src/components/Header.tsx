import { useLocation } from 'preact-iso';
import { useTheme } from '../hooks/useTheme';
import { ThemeToggle } from './ThemeToggle';

export function Header() {
	const { url } = useLocation();
	const { theme, setTheme } = useTheme();

	return (
		<header>
			<nav>
				<a href="/" class={(url == '/' && 'active') || undefined}>
					Home
				</a>
				<a href="/about" class={(url == '/about' && 'active') || undefined}>
					about
				</a>
				<a href="/tech" class={(url == '/tech' && 'active') || undefined}>
					tech
				</a>
				<a href="/notes" class={(url == '/notes' && 'active') || undefined}>
					notes
				</a>
			</nav>
			<ThemeToggle theme={theme} onThemeChange={setTheme} />
		</header>
	);
}
