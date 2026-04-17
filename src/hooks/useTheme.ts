import { useState, useEffect } from 'preact/hooks';

export type Theme = 'light' | 'dark';

const STORAGE_KEY = 'theme';

function applyTheme(theme: Theme): void {
	document.documentElement.setAttribute('data-theme', theme);
}

function resolveInitialTheme(): Theme {
	if (typeof window === 'undefined') return 'light';
	const stored = localStorage.getItem(STORAGE_KEY);
	if (stored === 'light' || stored === 'dark') return stored;
	return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function useTheme() {
	const [theme, setTheme] = useState<Theme>(resolveInitialTheme);

	useEffect(() => {
		applyTheme(theme);
		localStorage.setItem(STORAGE_KEY, theme);
	}, [theme]);

	const toggle = () => setTheme((t) => (t === 'light' ? 'dark' : 'light'));

	return { theme, toggle } as const;
}
