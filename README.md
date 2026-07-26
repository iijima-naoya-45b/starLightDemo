# 🌟 StarLight Demo

**StarLight Demo** は **Astro + Starlight テンプレート** を使用したドキュメントサイトのデモプロジェクトです。  
美しく、アクセシブルで高性能なドキュメント Web サイトの構築方法を実演します。  

## 公開リンク
https://star-light-demo.vercel.app/

---

## 🚀 特徴

- ⚡️ **高速**: Astro の静的サイト生成による最適なパフォーマンス  
- 📱 **レスポンシブ**: モバイルファーストなデザイン  
- 🔍 **検索機能**: 内蔵の全文検索機能  
- 🌙 **ダークモード**: 自動的なダークモード切り替え  
- ♿ **アクセシビリティ**: WCAG 準拠のアクセシブルなデザイン  
- 🎨 **カスタマイズ可能**: テーマとスタイルの柔軟なカスタマイズ  

---

## 📁 プロジェクト構造


---

## 🛠 技術スタック

| カテゴリー       | 技術              |
|------------------|-------------------|
| フレームワーク   | Astro             |
| ドキュメントテーマ | Starlight        |
| 言語             | TypeScript, JavaScript |
| スタイリング     | CSS, Tailwind CSS |
| マークダウン     | MDX               |
| パッケージ管理   | npm               |

---

## 📋 必要な環境

- **Node.js**: 18.14.1 以上  
- **npm**: 9.0.0 以上  

---

## ⚙️ セットアップ

```bash
# 1. リポジトリのクローン
git clone https://github.com/iijima-naoya-45b/starLightDemo.git
cd starLightDemo

# 2. 依存関係のインストール
npm install

# 3. 開発サーバーの起動
npm run dev
```

## 📖 ドキュメントの追加方法

src/content/docs/ ディレクトリに .md または .mdx ファイルを追加

ファイル名がそのままルートとして公開される

frontmatter でタイトルや説明を設定

例: src/content/docs/new-page.md
```javascript
---
title: 新しいページ
description: このページの説明
---

# 新しいページ

ここにコンテンツを記述します。
```

## 🔗 OGP・SNSプレビュー

SNSでシェアしたときのプレビュー（OGP）を有効にするため、以下を設定しています。

- **サイト全体**: `astro.config.mjs` の Starlight の `description` と `head` で、`og:title` / `og:description` / `og:image` および Twitter Card を出力しています。
- **本番URL**: 環境変数 `PUBLIC_SITE_URL` にデプロイ先の絶対URL（例: `https://star-light-demo.vercel.app`）を設定すると、OGPのURL・画像が正しく参照されます。未設定時はデフォルトのVercel URLを使用します。
- **OGP画像**: `public/apple-touch-icon.png` をシェア時のサムネイルとして使用しています（Qiita・Twitter・Facebook などは SVG 非対応のため PNG を使用）。別画像にしたい場合は `astro.config.mjs` の `og:image` / `twitter:image` のパスを変更してください。
- **ページごとの説明**: 各 MDX の frontmatter で `description` を書くと、そのページのメタ説明・検索結果・SNSプレビューに利用されます。

---

## 🎨 カスタマイズ
サイト設定

astro.config.mjs でサイトの基本設定を変更できます：

```javascript
export default defineConfig({
  integrations: [
    starlight({
      title: 'My Docs',
      social: {
        github: 'https://github.com/yourusername/your-repo',
      },
      sidebar: [
        // サイドバー設定
      ],
    }),
  ],
});
```

---

## 📝 Notion API統合

このプロジェクトにはNotion APIを使用してタスクを作成する機能が含まれています。

### 🔧 セットアップ

1. **Notion Integrationの作成**
   - [Notion Integrations](https://www.notion.so/my-integrations) にアクセス
   - 「New integration」をクリック
   - Integration名を入力して作成
   - 「Internal Integration Token」をコピー

2. **データベースの準備**
   - Notionでタスク管理用のデータベースを作成
   - 以下のプロパティを設定：
     - `Name` (タイトル)
     - `Status` (ステータス) - 「未着手」オプションを含む
     - `Priority` (セレクト) - 「中」オプションを含む
     - `Description` (テキスト)
   - データベースページの右上「...」→「接続を追加」から作成したIntegrationを追加
   - データベースのURLからDatabase IDを取得
     - 例: `https://www.notion.so/workspace/{database_id}?v=...`

3. **環境変数の設定**
   ```bash
   # .env.exampleをコピー
   cp .env.example .env
   
   # .envファイルを編集
   NOTION_API_TOKEN=your_integration_token_here
   NOTION_DATABASE_ID=your_database_id_here
   ```

### 🚀 使用方法

サンプルタスクを作成：

```bash
npm run notion:create-task
```

このコマンドを実行すると、設定したNotion Databaseに自動的にサンプルタスクが作成されます。

### 💡 Notion APIについて

- ✅ **完全無料**: API使用に料金はかかりません
- ✅ **レート制限**: 無料プランでは平均3リクエスト/秒
- ✅ **公式ドキュメント**: [Notion Developers](https://developers.notion.com/)

### ⚠️ 注意事項

- `.env`ファイルには機密情報が含まれるため、Gitにコミットしないでください（`.gitignore`に追加済み）
- Integration TokenとDatabase IDは安全に管理してください
- データベースのプロパティ構成がスクリプトと一致していることを確認してください

