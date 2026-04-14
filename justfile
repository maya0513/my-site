default:
    @just --list

# 開発サーバー起動
dev:
    pnpm dev

# プロダクションビルド
build:
    pnpm build

# ビルド確認（プレビューサーバー起動）
preview: build
    pnpm preview

# Cloudflare Pages へデプロイ（プロジェクト名を引数で指定）
deploy project_name="my-site": build
    pnpm wrangler pages deploy dist --project-name {{project_name}}

# 依存パッケージインストール
install:
    pnpm install
