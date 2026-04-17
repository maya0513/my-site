import { LocationProvider, Router, Route, hydrate, prerender as ssr } from 'preact-iso';

import { Header } from './components/Header.jsx';
import { Home } from './pages/Home/index.jsx';
import { About } from './pages/About/index.js';
import { Tech } from './pages/Tech/index.js';
import { Notes } from './pages/Notes/index.js';
import { NotFound } from './pages/_404/_404.jsx';
import './style.css';

export function App() {
	return (
		<LocationProvider>
			<Header />
			<main class="flex-auto w-full max-w-[680px] mx-auto px-5 py-14">
				<Router>
					<Route path="/" component={Home} />
					<Route path="/about" component={About} />
					<Route path="/tech" component={Tech} />
					<Route path="/notes" component={Notes} />
					<Route default component={NotFound} />
				</Router>
			</main>
		</LocationProvider>
	);
}

if (typeof window !== 'undefined') {
	hydrate(<App />, document.getElementById('app')!);
}

export async function prerender(data: Record<string, unknown>) {
	return await ssr(<App {...data} />);
}
