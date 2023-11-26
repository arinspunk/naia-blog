const builtAt = new Date().toISOString()
export default {
    target: 'static',
    components: true,
    modules: [
        '@nuxt/content',
        '@nuxtjs/i18n'
    ],
    css: [
        '@/assets/css/main.scss'
    ],
    buildModules: [
        '@nuxtjs/style-resources',
        '@nuxt/postcss8'
    ],
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
                    blogIntro: 'At home I have several notebooks in which I paint. But this one is special, it is one that anyone can see 🌍, even being far away: my grandparents, uncles, friends… and even people I don\'t know! 😮',
                    lastPages: 'Last pages',
                    next: 'Next',
                    pagesNumber: 'I have {number} painted pages',
                    pagesTitle: 'Pages',
                    photo: 'Photo',
                    prev: 'Prev',
                    published: 'Publicado:',
                    seeAll: 'See all',
                },
                es: {
                    blogTitle: 'Mi cuaderno',
                    blogIntro: 'En casa tengo varios cuadernos en los que pinto. Pero este es especial, es uno que cualquiera puede ver 🌍, incluso estando muy lejos: mis abuel@s, tí@s, amig@s… y hasta gente que no conozco! 😮',
                    lastPages: 'Últimas páginas',
                    next: 'Siguiente',
                    pagesNumber: 'He pintado {number} páginas',
                    pagesTitle: 'Páginas',
                    photo: 'Foto',
                    prev: 'Anterior',
                    published: 'Publicado:',
                    seeAll: 'Ver todas',
                },
                pt: {
                    blogTitle: 'O meu caderno',
                    blogIntro: 'Na casa tenho vários cadernos nos quais pinto. Mas este é especial, é um que qualquer pessoa pode ver 🌍, mesmo estando longe: os meus avós, ti@s, amig@s… e até pessoas que nom conheço! 😮',
                    lastPages: 'Últimas páginas',
                    next: 'Seguinte',
                    pagesNumber: 'Levo {number} páginas pintadas',
                    pagesTitle: 'Páginas',
                    photo: 'Foto',
                    prev: 'Anterior',
                    published: 'Publicado:',
                    seeAll: 'Ver todas',
                }
            }
        },
    },
    head: {
        title: 'My Notebook',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { name: 'msapplication-TileColor', content: '#ffffff' },
            { name: 'msapplication-TileImage', content: '/favicons/mstile-150x150.png' },
            { name: 'theme-color', content: '#ffffff' },
            { name: 'robots', content: 'index, follow' },
            { name: 'twitter:card', content: 'summary_large_image' },
            { name: 'twitter:site', content: '@arinspunk' },
            { name: 'twitter:creator', content: '@arinspunk' },
            { property: 'og:type', content: 'profile' },
            { property: 'og:updated_time', content: builtAt }
        ],
        link: [
            { rel: 'icon', type: 'image/png', href: '/favicons/favicon-16x16.png', sizes: '16x16' },
            { rel: 'icon', type: 'image/png', href: '/favicons/favicon-32x32.png', sizes: '32x32' },
            { rel: 'icon', type: 'image/png', href: '/favicons/android-chrome-96x96.png', sizes: '96x96' },
            { rel: 'icon', type: 'image/png', href: '/favicons/android-chrome-192x192.png', sizes: '192x192' },
            { rel: 'icon', type: 'image/png', href: '/favicons/android-chrome-192x192.png', sizes: '512x512' },
            { rel: 'apple-touch-icon', href: '/favicons/apple-touch-icon-57x57.png', sizes: '57x57' },
            { rel: 'apple-touch-icon', href: '/favicons/apple-touch-icon-60x60.png', sizes: '60x60' },
            { rel: 'apple-touch-icon', href: '/favicons/apple-touch-icon-72x72.png', sizes: '72x72' },
            { rel: 'apple-touch-icon', href: '/favicons/apple-touch-icon-76x76.png', sizes: '76x76' },
            { rel: 'apple-touch-icon', href: '/favicons/apple-touch-icon-114x114.png', sizes: '114x114' },
            { rel: 'apple-touch-icon', href: '/favicons/apple-touch-icon-120x120.png', sizes: '120x120' },
            { rel: 'apple-touch-icon', href: '/favicons/apple-touch-icon-144x144.png', sizes: '144x144' },
            { rel: 'apple-touch-icon', href: '/favicons/apple-touch-icon-152x152.png', sizes: '152x152' },
            { rel: 'apple-touch-icon', href: '/favicons/apple-touch-icon-180x180.png', sizes: '180x180' },
            { rel: 'mask-icon', type: 'image/png', href: '/favicons/safari-pinned-tab.svg', color: '#ffffff' }
        ]
    },
    plugins: [
        '~/plugins/lazysizes.client.js',
        '~/plugins/vue-agile'
    ],
    build: {
        extend (config, { isDev, isClient, loaders: { vue } }) {
            if (isClient) {
            vue.transformAssetUrls.img = ['data-src', 'src']
            vue.transformAssetUrls.source = ['data-srcset', 'srcset']
            }
        },
        transpile: ['vue-agile']
    },
}