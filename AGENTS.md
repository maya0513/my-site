## Commands

mise install     # miseでNode.js・pnpmのlatestを導入
just install     # pnpm依存関係の導入
just dev         # Astro開発サーバー起動（Vite Task経由）
just check       # AstroとTypeScriptの型チェック
just build       # Astro本番ビルド
just preview     # Cloudflare Workersローカルプレビュー
just deploy      # Cloudflare Workersへデプロイ

テストは現時点では未設定。

## スタック
- TypeScript
- Astro
- Cloudflare Workers（@astrojs/cloudflare アダプタ + cf CLI）
- Tailwind CSS v4
- Vite+
- pnpm（mise管理）

## アーキテクチャ
home: トップページ
about: プロフィール
tech: テック系記事
notes: テック以外の雑多記事

ブレイクポイント: 768px

成果物
https://my-site.maya0513.workers.dev/
