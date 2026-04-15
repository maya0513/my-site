import { useLocation } from 'preact-iso';

export function Header() {
	const { url } = useLocation();

	return (
		<header>
			<nav>
				<a href="/" class={(url == '/' && 'active') || undefined}>
					Home
				</a>
				<a href="/about" class={(url == '/about' && 'active') || undefined}>
					about
				</a>
				<a href="/404" class={(url == '/404' && 'active') || undefined}>
					404
				</a>
			</nav>
		</header>
	);
}
