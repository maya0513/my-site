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

# 依存パッケージインストール
install:
    pnpm install
