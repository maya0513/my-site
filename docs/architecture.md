# アーキテクチャ概要

## 技術スタック

| 役割 | ライブラリ/ツール |
|------|-----------------|
| UIフレームワーク | [Preact](https://preactjs.com/) v10 |
| ルーティング | preact-iso |
| ビルドツール | Vite |
| 言語 | TypeScript |
| パッケージマネージャ | pnpm |
| デプロイ先 | Cloudflare Pages |

## レンダリング方式：Prerender + Hydration

このプロジェクトはビルド時に HTML を事前生成（prerender）し、ブラウザ上で Preact が引き継ぐ（hydrate）方式を採用しています。

```
ビルド時                        ブラウザ読み込み時
─────────────────               ──────────────────────
vite build                      静的 HTML を即座に表示
  └─ prerender()                  └─ hydrate() で JS が接続
       └─ /       → index.html         └─ クリックやイベントが動作開始
       └─ /404    → 404/index.html
```

**メリット：** 初期表示が速い（HTML がすでにある）かつ JS 無効環境でも内容が見える。

## ファイル構成

```
my-site/
├── index.html              # エントリポイント HTML（<div id="app"> のみ）
├── src/
│   ├── index.tsx           # App 定義・hydrate/prerender のエントリ
│   ├── style.css           # グローバルスタイル
│   ├── assets/
│   │   └── preact.svg
│   ├── components/
│   │   └── Header.tsx      # ナビゲーションヘッダー
│   └── pages/
│       ├── Home/
│       │   ├── index.tsx   # ホームページ
│       │   └── style.css   # ホームページ専用スタイル
│       └── _404.tsx        # 404 ページ
├── docs/                   # このドキュメント
├── justfile                # タスクランナー
├── vite.config.ts          # Vite + prerender 設定
└── tsconfig.json           # TypeScript 設定
```

## ルーティング（preact-iso）

`preact-iso` の `Router` / `Route` によるクライアントサイドルーティング。`LocationProvider` がルート全体をラップし、`useLocation()` で現在 URL を取得できる。

```tsx
// src/index.tsx
<LocationProvider>
  <Header />
  <main>
    <Router>
      <Route path="/" component={Home} />
      <Route default component={NotFound} />  {/* 404 フォールバック */}
    </Router>
  </main>
</LocationProvider>
```

`Route default` はどのパスにもマッチしなかった場合のフォールバック。

## prerender の仕組み

`vite.config.ts` で `@preact/preset-vite` の prerender オプションを有効化している。

```ts
prerender: {
  enabled: true,
  renderTarget: '#app',                        // hydrate するマウント先
  additionalPrerenderRoutes: ['/404'],         // / に加えて /404 も生成
  previewMiddlewareEnabled: true,
  previewMiddlewareFallback: '/404',           // 未知パスは /404 へ
}
```

`src/index.tsx` がエクスポートする `prerender()` 関数をビルド時に呼び出し、各ルートの HTML を生成する。

```ts
export async function prerender(data) {
  return await ssr(<App {...data} />);
}
```

## TypeScript 設定（Preact × React 互換）

`tsconfig.json` で Preact を React の代替として認識させている。

```json
"jsx": "react-jsx",
"jsxImportSource": "preact",
"paths": {
  "react":     ["./node_modules/preact/compat/"],
  "react-dom": ["./node_modules/preact/compat/"]
}
```

`preact/compat` が React API の互換レイヤーを提供するため、React 向けのライブラリもそのまま使える。
