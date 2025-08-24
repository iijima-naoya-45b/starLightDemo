// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import react from '@astrojs/react';

export default defineConfig({
    integrations: [
        starlight({
            title: '言語別ドキュメント',
            social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/iijima-naoya-45b' }],
            customCss: [
                './src/styles/common.css',
            ],
            sidebar: [
                {
                    label: 'StarLightガイド',
                    collapsed: true,
                    autogenerate: { directory: 'StarLightガイド' },
                    badge: { text: '実験的', variant: 'caution' },
                },
                {
                    label: 'Django',
                    collapsed: true,
                    autogenerate: { directory: 'Djangoガイド' },
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
            ],
        }),
        react(),
    ],
});