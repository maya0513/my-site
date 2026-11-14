# 個人サイト

AstroでSSGした個人サイトです。@astrojs/cloudflare アダプタでビルドし、生成ページと静的ファイルはCloudflare Assetsから配信します。デプロイはcf CLIを使います。将来の `/api/*` はAstroのエンドポイントとして追加する想定です。Node.jsとpnpmのバージョンはmise.tomlでNode.jsにlts、pnpmにlatestを指定しています。

## 開発

mise install
just install
just dev

ビルド、プレビュー、デプロイは just build、just preview、just deploy から実行します。各タスクの定義は vite.tasks.ts にあります。
