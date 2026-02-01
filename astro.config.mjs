// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import react from '@astrojs/react';

// デプロイ先の絶対URL（OGP・canonical用）。環境変数 PUBLIC_SITE_URL で上書き可能。
const siteUrl = typeof process.env.PUBLIC_SITE_URL === 'string' && process.env.PUBLIC_SITE_URL
    ? process.env.PUBLIC_SITE_URL.replace(/\/$/, '')
    : 'https://star-light-demo.vercel.app';

export default defineConfig({
    site: siteUrl,
    integrations: [
        starlight({
            title: 'starLightDemo',
            description: 'starLightDemo — 技術ドキュメント・組織論・API設計・開発ガイドのナレッジベース',
            social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/iijima-naoya-45b' }],
            // OGP・Twitter Card ＋ Apple Touch Icon ＋ Web App Manifest（Android「ホームに追加」用）
            head: [
                { tag: 'link', attrs: { rel: 'manifest', href: '/manifest.json' } },
                { tag: 'link', attrs: { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' } },
                { tag: 'meta', attrs: { property: 'og:type', content: 'website' } },
                { tag: 'meta', attrs: { property: 'og:site_name', content: 'starLightDemo' } },
                { tag: 'meta', attrs: { property: 'og:url', content: siteUrl } },
                { tag: 'meta', attrs: { property: 'og:title', content: 'starLightDemo' } },
                { tag: 'meta', attrs: { property: 'og:description', content: '技術ドキュメント・組織論・API設計・開発ガイドのナレッジベース' } },
                { tag: 'meta', attrs: { property: 'og:image', content: `${siteUrl}/apple-touch-icon.png` } },
                { tag: 'meta', attrs: { property: 'og:locale', content: 'ja_JP' } },
                { tag: 'meta', attrs: { name: 'twitter:card', content: 'summary_large_image' } },
                { tag: 'meta', attrs: { name: 'twitter:title', content: 'starLightDemo' } },
                { tag: 'meta', attrs: { name: 'twitter:description', content: '技術ドキュメント・組織論・API設計・開発ガイドのナレッジベース' } },
                { tag: 'meta', attrs: { name: 'twitter:image', content: `${siteUrl}/apple-touch-icon.png` } },
            ],
            customCss: [
                './src/styles/common.css',
            ],
            expressiveCode: {
                // 未サポート言語の警告を抑制する設定
                // これらの言語はShikiで標準サポートされていないため、自動的にplaintextとして扱われます
                // 警告は表示されますが、機能には影響しません
                defaultProps: {
                    // コードブロックのデフォルト設定
                },
            },
            sidebar: [
                {
                    label: 'API設計ガイド拡張',
                    collapsed: true,
                    autogenerate: { directory: 'API設計ガイド拡張' },
                    badge: { text: '重要', variant: 'success' },
                },
                {
                    label: 'AWSガイド',
                    collapsed: true,
                    autogenerate: { directory: 'AWSガイド' },
                    badge: { text: '重要', variant: 'success' },
                },
                {
                    label: 'Chrome拡張機能ガイド',
                    collapsed: true,
                    autogenerate: { directory: 'Chrome拡張機能ガイド' },
                    badge: { text: '中級', variant: 'caution' },
                },
                {
                    label: 'C#ガイド',
                    collapsed: true,
                    autogenerate: { directory: 'CSharpガイド' },
                    badge: { text: '重要', variant: 'success' },
                },
                {
                    label: 'COBOLガイド',
                    collapsed: true,
                    autogenerate: { directory: 'COBOLガイド' },
                    badge: { text: 'レガシー', variant: 'note' },
                },
                {
                    label: 'Django',
                    collapsed: true,
                    autogenerate: { directory: 'Djangoガイド' },
                    badge: { text: 'おすすめ', variant: 'note' },
                },
                {
                    label: 'Dockerガイド',
                    collapsed: true,
                    autogenerate: { directory: 'Dockerガイド' },
                    badge: { text: 'おすすめ', variant: 'success' },
                },
                {
                    label: 'Elixir',
                    collapsed: true,
                    autogenerate: { directory: 'elixirガイド' },
                    badge: { text: '発展', variant: 'tip' },
                },
                {
                    label: 'FastAPI',
                    collapsed: true,
                    autogenerate: { directory: 'fastapiガイド' },
                    badge: { text: 'オススメ', variant: 'default' },
                },
                {
                    label: 'Flutter',
                    collapsed: true,
                    autogenerate: { directory: 'flutterガイド' },
                    badge: { text: '整備中', variant: 'danger' },
                },
                {
                    label: 'GASガイド',
                    collapsed: true,
                    autogenerate: { directory: 'GASガイド' },
                    badge: { text: 'サーバーレス', variant: 'success' },
                },
                {
                    label: 'Gitガイド',
                    collapsed: true,
                    autogenerate: { directory: 'Gitガイド' },
                    badge: { text: '重要', variant: 'success' },
                },
                {
                    label: 'Go',
                    collapsed: true,
                    autogenerate: { directory: 'Goガイド' },
                    badge: { text: '開発中', variant: 'note' },
                },
                {
                    label: 'Javaガイド',
                    collapsed: true,
                    autogenerate: { directory: 'Javaガイド' },
                    badge: { text: '実験的', variant: 'caution' },
                },
                {
                    label: 'Jestガイド',
                    collapsed: true,
                    autogenerate: { directory: 'jestガイド' },
                    badge: { text: 'おすすめ', variant: 'success' },
                },
                {
                    label: 'Laravelガイド',
                    collapsed: true,
                    autogenerate: { directory: 'Laravelガイド' },
                    badge: { text: '新規', variant: 'success' },
                },
                {
                    label: 'Linuxガイド',
                    collapsed: true,
                    autogenerate: { directory: 'Linuxガイド' },
                    badge: { text: '重要', variant: 'success' },
                },
                {
                    label: 'Next.js',
                    collapsed: true,
                    autogenerate: { directory: 'nextjsガイド' },
                    badge: { text: 'オススメ', variant: 'success' },
                },
                {
                    label: 'Node.js',
                    collapsed: true,
                    autogenerate: { directory: 'node.jsガイド' },
                    badge: { text: 'JSのバックエンド', variant: 'caution' },
                },
                {
                    label: 'PHPガイド',
                    collapsed: true,
                    autogenerate: { directory: 'PHPガイド' },
                    badge: { text: '新規', variant: 'success' },
                },
                {
                    label: 'Playwright',
                    collapsed: true,
                    autogenerate: { directory: 'playwrightガイド' },
                    badge: { text: 'オススメ', variant: 'caution' },
                },
                {
                    label: 'Rails',
                    collapsed: true,
                    autogenerate: { directory: 'railsガイド' },
                    badge: { text: '初心者向け', variant: 'danger' },
                },
                {
                    label: 'Reactガイド',
                    collapsed: true,
                    autogenerate: { directory: 'Reactガイド' },
                    badge: { text: 'おすすめ', variant: 'success' },
                },
                {
                    label: 'StarLightガイド',
                    collapsed: true,
                    autogenerate: { directory: 'StarLightガイド' },
                    badge: { text: '難易度低め', variant: 'caution' },
                },
                {
                    label: 'TypeScript',
                    collapsed: true,
                    autogenerate: { directory: 'TypeScriptガイド' },
                    badge: { text: 'おすすめ', variant: 'note' },
                },
                {
                    label: 'Unityガイド',
                    collapsed: true,
                    autogenerate: { directory: 'Unityガイド' },
                    badge: { text: '開発中', variant: 'note' },
                },
                {
                    label: 'infraガイド',
                    collapsed: true,
                    autogenerate: { directory: 'infraガイド' },
                    badge: { text: '実験的', variant: 'caution' },
                },
                {
                    label: 'エンジニア用語集',
                    collapsed: true,
                    autogenerate: { directory: 'エンジニア用語集' },
                    badge: { text: '参考', variant: 'note' },
                },
                {
                    label: 'キャッシングガイド',
                    collapsed: true,
                    autogenerate: { directory: 'キャッシングガイド' },
                    badge: { text: '重要', variant: 'success' },
                },
                {
                    label: 'セキュリティガイド',
                    collapsed: true,
                    autogenerate: { directory: 'セキュリティガイド' },
                    badge: { text: '重要', variant: 'danger' },
                },
                {
                    label: 'データベースガイド',
                    collapsed: true,
                    autogenerate: { directory: 'データベースガイド' },
                    badge: { text: '重要', variant: 'success' },
                },
                {
                    label: 'データ分析BIガイド',
                    collapsed: true,
                    autogenerate: { directory: 'データ分析BIガイド' },
                    badge: { text: '重要', variant: 'success' },
                },
                {
                    label: 'デザインパターンガイド',
                    collapsed: true,
                    autogenerate: { directory: 'デザインパターンガイド' },
                    badge: { text: '重要', variant: 'success' },
                },
                {
                    label: 'デザインガイド',
                    collapsed: true,
                    autogenerate: { directory: 'デザインガイド' },
                    badge: { text: '新規', variant: 'success' },
                },
                {
                    label: 'パフォーマンステストガイド',
                    collapsed: true,
                    autogenerate: { directory: 'パフォーマンステストガイド' },
                    badge: { text: '重要', variant: 'success' },
                },
                {
                    label: 'メッセージキューガイド',
                    collapsed: true,
                    autogenerate: { directory: 'メッセージキューガイド' },
                    badge: { text: '重要', variant: 'success' },
                },
                {
                    label: 'モニタリングガイド',
                    collapsed: true,
                    autogenerate: { directory: 'モニタリングガイド' },
                    badge: { text: '重要', variant: 'success' },
                },
                {
                    label: '法律ガイド',
                    collapsed: true,
                    autogenerate: { directory: '法律ガイド' },
                    badge: { text: '重要', variant: 'danger' },
                },
                {
                    label: 'OpenAPIガイド',
                    collapsed: true,
                    autogenerate: { directory: 'OpenAPIガイド' },
                    badge: { text: '重要', variant: 'success' },
                },
                {
                    label: '組織論ガイド',
                    collapsed: true,
                    autogenerate: { directory: '組織論ガイド' },
                    badge: { text: '重要', variant: 'note' },
                },
                {
                    label: 'AI活用ガイド',
                    collapsed: true,
                    autogenerate: { directory: '組織論ガイド/21_AI活用' },
                    badge: { text: '新規', variant: 'success' },
                },
                {
                    label: '認証ガイド',
                    collapsed: true,
                    autogenerate: { directory: '認証ガイド' },
                    badge: { text: '重要', variant: 'success' },
                },
                {
                    label: 'SEOガイド',
                    collapsed: true,
                    autogenerate: { directory: 'SEOガイド' },
                    badge: { text: '重要', variant: 'success' },
                },
                {
                    label: '設計ガイド',
                    collapsed: true,
                    autogenerate: { directory: '設計ガイド' },
                    badge: { text: '重要', variant: 'success' },
                },
                {
                    label: '状態管理ガイド',
                    collapsed: true,
                    autogenerate: { directory: '状態管理ガイド' },
                    badge: { text: '重要', variant: 'note' },
                },
                {
                    label: '技術記事執筆ガイド',
                    collapsed: true,
                    autogenerate: { directory: '技術記事執筆ガイド' },
                    badge: { text: '重要', variant: 'success' },
                },
            ],
        }),
        react(),
    ],
});