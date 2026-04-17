export function About() {
	return (
		<div class="space-y-12">
			{/* Profile */}
			<section class="flex items-start gap-6">
				<img
					src="/src/assets/IMG_0108.jpeg"
					alt="maya0513"
					class="w-20 h-20 rounded-full object-cover shrink-0 border border-fg/10"
				/>
				<div>
					<h1 class="text-2xl font-semibold tracking-tight mb-1">maya0513</h1>
					<p class="text-fg-muted text-sm">Software Engineer</p>
				</div>
			</section>

			{/* Bio */}
			<section class="space-y-4">
				<h2 class="text-[11px] font-medium text-fg-muted uppercase tracking-widest">about</h2>
				<div class="space-y-3 text-sm leading-[1.75]">
					<p>
						ソフトウェアエンジニアとして働いています。
						型安全なコードと関数型プログラミングのパラダイムが好きで、
						TypeScript・Haskell・Elmあたりをよく触ります。
					</p>
					<p>
						フロントエンドもバックエンドもひと通り書きますが、
						最近は設計と開発体験（DX）の改善に興味があります。
					</p>
				</div>
			</section>

			{/* Interests */}
			<section class="space-y-3">
				<h2 class="text-[11px] font-medium text-fg-muted uppercase tracking-widest">interests</h2>
				<ul class="flex flex-wrap gap-2">
					{[
						'TypeScript', 'Functional Programming', 'Type Theory',
						'Developer Experience', 'Preact', 'Rust',
						'Reading', 'Coffee',
					].map((tag) => (
						<li
							key={tag}
							class="text-xs px-2.5 py-1 rounded-full border border-fg/15 text-fg-muted"
						>
							{tag}
						</li>
					))}
				</ul>
			</section>

			{/* Links */}
			<section class="space-y-3">
				<h2 class="text-[11px] font-medium text-fg-muted uppercase tracking-widest">links</h2>
				<ul class="space-y-2">
					{[
						{ label: 'GitHub', href: 'https://github.com/maya0513' },
					].map(({ label, href }) => (
						<li key={label}>
							<a
								href={href}
								target="_blank"
								rel="noopener noreferrer"
								class="text-sm text-fg-muted hover:text-fg transition-colors hover:underline underline-offset-2"
							>
								{label} ↗
							</a>
						</li>
					))}
				</ul>
			</section>
		</div>
	);
}
