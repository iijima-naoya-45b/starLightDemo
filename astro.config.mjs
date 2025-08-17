// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import react from '@astrojs/react';
import commonCss from './src/styles/common.css';

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
                    label: 'Elixir',
                    autogenerate: { directory: 'elixirガイド' },
                },
                {
                    label: 'FastAPI',
                    autogenerate: { directory: 'fastapiガイド' },
                },
                {
                    label: 'Flutter',
                    autogenerate: { directory: 'flutterガイド' },
                },
                {
                    label: 'Next.js',
                    autogenerate: { directory: 'nextjsガイド' },
                },
                {
                    label: 'Node.js',
                    autogenerate: { directory: 'nodejsガイド' },
                },
                {
                    label: 'Playwright',
                    autogenerate: { directory: 'playwrightガイド' },
                },
                {
                    label: 'Rails',
                    autogenerate: { directory: 'railsガイド' },
                },
            ],
        }),
        react(),
    ],
});