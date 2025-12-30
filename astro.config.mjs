// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import react from '@astrojs/react';

export default defineConfig({
    integrations: [
        starlight({
            title: 'エンジニア用ドキュメント',
            social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/iijima-naoya-45b' }],
            customCss: [
                './src/styles/common.css',
            ],
            sidebar: [
                {
                    label: 'StarLightガイド',
                    collapsed: true,
                    autogenerate: { directory: 'StarLightガイド' },
                    badge: { text: '難易度低め', variant: 'caution' },
                },
                {
                    label: 'Unityガイド',
                    collapsed: true,
                    autogenerate: { directory: 'Unityガイド' },
                    badge: { text: '開発中', variant: 'note' },
                },
                {
                    label: 'Django',
                    collapsed: true,
                    autogenerate: { directory: 'Djangoガイド' },
                    badge: { text: 'おすすめ', variant: 'note' },
                },
                {
                    label: 'Go',
                    collapsed: true,
                    autogenerate: { directory: 'Goガイド' },
                    badge: { text: '開発中', variant: 'note' },
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
                    label: 'Jestガイド',
                    collapsed: true,
                    autogenerate: { directory: 'jestガイド' },
                    badge: { text: 'おすすめ', variant: 'success' },
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
                    label: 'TypeScript',
                    collapsed: true,
                    autogenerate: { directory: 'TypeScriptガイド' },
                    badge: { text: 'おすすめ', variant: 'note' },

                },
                {
                    label: 'infraガイド',
                    collapsed: true,
                    autogenerate: { directory: 'infraガイド' },
                    badge: { text: '実験的', variant: 'caution' },
                },
                {
                    label: 'Javaガイド',
                    collapsed: true,
                    autogenerate: { directory: 'Javaガイド' },
                    badge: { text: '実験的', variant: 'caution' },
                },
                {
                    label: 'デザインガイド',
                    collapsed: true,
                    autogenerate: { directory: 'デザインガイド' },
                    badge: { text: '新規', variant: 'success' },
                },
                {
                    label: '法律ガイド',
                    collapsed: true,
                    autogenerate: { directory: '法律ガイド' },
                    badge: { text: '重要', variant: 'danger' },
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
                    label: 'Dockerガイド',
                    collapsed: true,
                    autogenerate: { directory: 'Dockerガイド' },
                    badge: { text: 'おすすめ', variant: 'success' },
                },
                {
                    label: 'Laravelガイド',
                    collapsed: true,
                    autogenerate: { directory: 'Laravelガイド' },
                    badge: { text: '新規', variant: 'success' },
                },
                {
                    label: 'PHPガイド',
                    collapsed: true,
                    autogenerate: { directory: 'PHPガイド' },
                    badge: { text: '新規', variant: 'success' },
                },
                {
                    label: 'Reactガイド',
                    collapsed: true,
                    autogenerate: { directory: 'Reactガイド' },
                    badge: { text: 'おすすめ', variant: 'success' },
                },
                {
                    label: '状態管理ガイド',
                    collapsed: true,
                    autogenerate: { directory: '状態管理ガイド' },
                    badge: { text: '重要', variant: 'note' },
                },
                {
                    label: '設計ガイド',
                    collapsed: true,
                    autogenerate: { directory: '設計ガイド' },
                    badge: { text: '重要', variant: 'success' },
                },
                {
                    label: '組織論ガイド',
                    collapsed: true,
                    autogenerate: { directory: '組織論ガイド' },
                    badge: { text: '重要', variant: 'note' },
                },
                {
                    label: 'セキュリティガイド',
                    collapsed: true,
                    autogenerate: { directory: 'セキュリティガイド' },
                    badge: { text: '重要', variant: 'danger' },
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
                    label: 'エンジニア用語集',
                    collapsed: true,
                    autogenerate: { directory: 'エンジニア用語集' },
                    badge: { text: '参考', variant: 'note' },
                },
            ],
        }),
        react(),
    ],
});