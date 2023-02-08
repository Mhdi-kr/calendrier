import { defineConfig } from "vitepress";

const PRIMARY_COLOR = '#A084DC'

function sidebarFactory() {
    return [
        {
            text: "Getting Started",
            items: [
                {
                    text: "Introduction",
                    link: "/guide/index.md",
                },
                {
                    text: "Quick Start",
                    link: "/guide/quick-start.md",
                },
                {
                    text: "Examples",
                    link: "/guide/examples.md",
                },
                {
                    text: "Styling",
                    link: "/guide/styling.md",
                },
                {
                    text: "Internationalization",
                    link: "/guide/internationalization.md",
                },
                {
                    text: "API Specification",
                    link: "/guide/api-specification.md",
                },
            ],
        },
    ];
}

function navigationFactory () {
    return [
        {
            
        }
    ]
}

export default defineConfig({
    lang: "en-US",
    title: "Calendrier",
    description: "Vite & Vue powered static site generator.",
    lastUpdated: true,
    cleanUrls: true,
    base: '/calendrier/',
    head: [["meta", { name: "theme-color", content: PRIMARY_COLOR }]],
    themeConfig: {
        sidebar: {
            "/guide/": sidebarFactory(),
        },
        editLink: {
            pattern:
                "https://github.com/Mhdi-kr/calendrier/edit/main/docs/:path",
            text: "Edit this page on GitHub",
        },
        socialLinks: [
            { icon: "github", link: "https://github.com/vuejs/vitepress" },
        ],
        footer: {
            message: "Released under the MIT License.",
            copyright: "Copyright © 2023-present Mahdi Karimi",
        },
    },
});
