export function Home() {
	return (
		<div class="space-y-12">
			{/* Hero */}
			<section>
				<p class="text-fg-muted text-sm mb-2.5">hi, I'm</p>
				<h1 class="text-3xl font-semibold tracking-tight mb-3">maya0513</h1>
				<p class="text-sm text-fg-muted leading-[1.75]">
					ソフトウェアエンジニア。関数型プログラミングと型システムが好き。
					作ったものや考えたことをここに置いていきます。
				</p>
			</section>

			{/* Section links */}
			<section class="space-y-3">
				<h2 class="text-[11px] font-medium text-fg-muted uppercase tracking-widest">writings</h2>
				<div class="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
					<a
						href="/tech"
						class="group block rounded-xl border border-fg/10 px-4 py-3.5 hover:border-fg/25 transition-colors"
					>
						<div class="flex items-center justify-between mb-1.5">
							<span class="text-sm font-medium">tech</span>
							<span class="text-fg-muted text-sm group-hover:translate-x-0.5 transition-transform">→</span>
						</div>
						<p class="text-fg-muted text-sm leading-[1.6]">
							TypeScript・関数型・開発環境などテック系の記事
						</p>
					</a>
					<a
						href="/notes"
						class="group block rounded-xl border border-fg/10 px-4 py-3.5 hover:border-fg/25 transition-colors"
					>
						<div class="flex items-center justify-between mb-1.5">
							<span class="text-sm font-medium">notes</span>
							<span class="text-fg-muted text-sm group-hover:translate-x-0.5 transition-transform">→</span>
						</div>
						<p class="text-fg-muted text-sm leading-[1.6]">
							日常・読書・雑感などテック以外のこと
						</p>
					</a>
				</div>
			</section>

			{/* Recent posts placeholder */}
			<section class="space-y-3">
				<h2 class="text-[11px] font-medium text-fg-muted uppercase tracking-widest">recent</h2>
				<ul class="space-y-0">
					{[
						{ href: '/tech', date: '2026-04-15', title: 'Preact Signals と状態設計' },
						{ href: '/tech', date: '2026-04-10', title: 'Tailwind CSS v4 に乗り換えた' },
						{ href: '/notes', date: '2026-04-05', title: '週末に読んだ本まとめ' },
					].map(({ href, date, title }) => (
						<li key={title}>
							<a
								href={href}
								class="flex items-baseline justify-between gap-4 py-2.5 border-b border-fg/8 hover:text-fg-muted transition-colors group"
							>
								<span class="text-sm group-hover:underline underline-offset-2">{title}</span>
								<time class="text-[12px] text-fg-muted shrink-0 tabular-nums">{date}</time>
							</a>
						</li>
					))}
				</ul>
			</section>
		</div>
	);
}
