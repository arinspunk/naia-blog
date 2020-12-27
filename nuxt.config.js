const builtAt = new Date().toISOString()
export default {
    components: true,
    modules: [
        '@nuxt/content',
        'nuxt-i18n'
    ],
    css: [
        '@/assets/css/main.scss'
    ],
    buildModules: ['@nuxtjs/style-resources'],
    styleResources: {
        scss: [
            './assets/css/00-settings/*.scss',
            './assets/css/01-tools/*.scss'
        ]
    },
    i18n: {
        locales: ['en', 'es', 'pt'],
        defaultLocale: 'pt',
        noPrefixDefaultLocale: true,
        vueI18n: {
            fallbackLocale: 'pt',
            messages: {
                en: {
                    blogTitle: 'My Notebook',
                    blogIntro: 'A sans serif font is preferred by some literacy personnel for teaching people to read. Its forms are simpler and less cluttered than those of most fonts.',
                    lastPages: 'Last pages',
                    pagesTitle: 'Pages',
                    photo: 'Photo',
                    published: 'Publicado:',
                    seeAll: 'See all',
                },
                es: {
                    blogTitle: 'Mi cuaderno',
                    blogIntro: 'A sans serif font is preferred by some literacy personnel for teaching people to read. Its forms are simpler and less cluttered than those of most fonts.',
                    lastPages: 'Últimas páginas',
                    pagesTitle: 'Páginas',
                    photo: 'Foto',
                    published: 'Publicado:',
                    seeAll: 'Ver todas',
                },
                pt: {
                    blogTitle: 'O meu caderno',
                    blogIntro: 'A sans serif font is preferred by some literacy personnel for teaching people to read. Its forms are simpler and less cluttered than those of most fonts.',
                    lastPages: 'Últimas páginas',
                    pagesTitle: 'Páginas',
                    photo: 'Foto',
                    published: 'Publicado:',
                    seeAll: 'Ver todas'
                }
            }
        },
        // parsePages: false,
        // pages: {
        //     'pages/index': {
        //         en: '/pages',
        //         es: '/paginas',
        //         pt: '/paginas'
        //     },
        //     // 'pages/_slug': {
        //     //     en: '/pages/*',
        //     //     es: '/paginas/*',
        //     //     pt: '/paginas/*'
        //     // }
        // }
    },
    head: {
        title: 'My Notebook',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { name: 'msapplication-TileColor', content: '#ffffff' },
            { name: 'msapplication-TileImage', content: '/favicons/mstile-144x144.png' },
            { name: 'theme-color', content: '#c1c1c1' },
            { name: 'robots', content: 'index, follow' },
            { name: 'twitter:card', content: 'summary_large_image' },
            { name: 'twitter:site', content: '@marinaaisa' },
            { property: 'og:type', content: 'profile' },
            { property: 'og:updated_time', content: builtAt }
        ],
        link: [
            { rel: 'icon', type: 'image/png', href: '/favicons/favicon-16x16.png', sizes: '16x16' },
            { rel: 'icon', type: 'image/png', href: '/favicons/favicon-32x32.png', sizes: '32x32' },
            { rel: 'icon', type: 'image/png', href: '/favicons/android-chrome-96x96.png', sizes: '96x96' },
            { rel: 'icon', type: 'image/png', href: '/favicons/android-chrome-192x192.png', sizes: '192x192' },
            { rel: 'apple-touch-icon', href: '/favicons/apple-touch-icon-57x57.png', sizes: '57x57' },
            { rel: 'apple-touch-icon', href: '/favicons/apple-touch-icon-60x60.png', sizes: '60x60' },
            { rel: 'apple-touch-icon', href: '/favicons/apple-touch-icon-72x72.png', sizes: '72x72' },
            { rel: 'apple-touch-icon', href: '/favicons/apple-touch-icon-76x76.png', sizes: '76x76' },
            { rel: 'apple-touch-icon', href: '/favicons/apple-touch-icon-114x114.png', sizes: '114x114' },
            { rel: 'apple-touch-icon', href: '/favicons/apple-touch-icon-120x120.png', sizes: '120x120' },
            { rel: 'apple-touch-icon', href: '/favicons/apple-touch-icon-144x144.png', sizes: '144x144' },
            { rel: 'apple-touch-icon', href: '/favicons/apple-touch-icon-152x152.png', sizes: '152x152' },
            { rel: 'apple-touch-icon', href: '/favicons/apple-touch-icon-180x180.png', sizes: '180x180' },
            { rel: 'mask-icon', type: 'image/png', href: '/favicons/safari-pinned-tab.svg', color: '#c1c1c1' }
        ]
    },

}