# 個人サイト

AstroでSSGした個人サイトです。生成ページと静的ファイルはCloudflare Assetsから配信し、Hono Workerは将来の `/api/*` 用に同じCloudflare Workerへ配置します。Node.jsとpnpmのバージョンはmise.tomlでlatestを指定しています。

## 開発

mise install
just install
just dev

ビルド、プレビュー、デプロイは just build、just preview、just deploy から実行します。各タスクの定義は vite.tasks.ts にあります。
