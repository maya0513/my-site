# コンポーネント解説

## App（src/index.tsx）

アプリ全体のルートコンポーネント。`LocationProvider` でルーティングコンテキストを提供し、`Header` と `Router` を配置する。

```tsx
export function App() {
  return (
    <LocationProvider>
      <Header />
      <main>
        <Router>
          <Route path="/" component={Home} />
          <Route default component={NotFound} />
        </Router>
      </main>
    </LocationProvider>
  );
}
```

ブラウザ環境では `hydrate()`、ビルド時は `prerender()` が呼ばれる。`typeof window !== 'undefined'` でサーバー（prerender）とブラウザを振り分けている。

---

## Header（src/components/Header.tsx）

ナビゲーションバー。`useLocation()` で現在の URL を取得し、アクティブなリンクに `active` クラスを付与する。

```tsx
const { url } = useLocation();

<a href="/" class={url == '/' && 'active'}>Home</a>
```

スタイルは `src/style.css` のグローバルスタイルで定義。

---

## Home（src/pages/Home/index.tsx）

ホームページ。Preact ロゴと3つのリソースリンクを表示する。

- `Resource` — タイトル・説明・リンクを受け取るカードコンポーネント（ページ内ローカル）
- スタイルは `src/pages/Home/style.css` に分離されている

```tsx
function Resource(props) {
  return (
    <a href={props.href} target="_blank" class="resource">
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </a>
  );
}
```

---

## NotFound（src/pages/_404.tsx）

404 ページ。`Router` の `default` ルートに割り当てられており、どのパスにもマッチしない場合に表示される。ビルド時に `/404/index.html` としてプリレンダリングされる。

---

## スタイル構成

| ファイル | 対象 |
|---------|------|
| `src/style.css` | グローバル（body, header, main, ダークモード） |
| `src/pages/Home/style.css` | Home ページ専用（ロゴ, リソースカード, グリッドレイアウト） |

レスポンシブ対応は `max-width: 639px` のメディアクエリで行い、モバイルではリソースカードを1列に変更する。ダークモードは `prefers-color-scheme: dark` で対応。
