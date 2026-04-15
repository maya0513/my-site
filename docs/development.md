# 開発・デプロイ手順

## セットアップ

```sh
pnpm install
```

## 開発

```sh
just dev      # 開発サーバー起動 (http://localhost:5173)
just build    # プロダクションビルド（dist/ に出力）
just preview  # ビルド結果をローカルで確認
```

## デプロイ

Cloudflare Pages へデプロイする。ビルドも内部で実行される。

```sh
just deploy                    # プロジェクト名 "my-site" でデプロイ
just deploy 別のプロジェクト名  # プロジェクト名を変える場合
```

初回は `wrangler pages project create <project-name>` でプロジェクトを作成しておく必要がある。

## ビルド成果物

`dist/` に以下が生成される。

```
dist/
├── index.html          # / のプリレンダリング済み HTML
├── 404/
│   └── index.html      # /404 のプリレンダリング済み HTML
└── assets/
    ├── index-*.js      # アプリ本体（hydration 用）
    ├── index-*.css     # バンドル済み CSS
    └── prerender-*.js  # prerender 実行用バンドル（ビルド時のみ使用）
```

## 新しいページを追加する方法

1. `src/pages/NewPage/index.tsx` を作成してコンポーネントをエクスポート
2. `src/index.tsx` の `Router` に `<Route>` を追加
3. プリレンダリングしたい場合は `vite.config.ts` の `additionalPrerenderRoutes` にパスを追加

```tsx
// src/index.tsx
<Route path="/new-page" component={NewPage} />
```

```ts
// vite.config.ts
additionalPrerenderRoutes: ['/404', '/new-page'],
```
