default:
    @just --list

# miseでツールと依存関係を導入
install:
    mise install
    pnpm install

# 開発サーバー起動
dev:
    pnpm exec vp run dev

# AstroとTypeScriptの型チェック
check:
    pnpm exec vp run check

# 本番ビルド
build:
    pnpm exec vp run build

# Cloudflare Workersローカルプレビュー
preview:
    pnpm exec vp run preview

# Cloudflare Workersへデプロイ
deploy:
    pnpm exec vp run deploy
