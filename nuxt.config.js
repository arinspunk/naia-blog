export default {
    modules: [
        '@nuxt/content',
        'nuxt-i18n'
    ],
    components: true,
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
                    seeAll: 'Ver todos',
                },
                pt: {
                    blogTitle: 'O meu caderno',
                    blogIntro: 'A sans serif font is preferred by some literacy personnel for teaching people to read. Its forms are simpler and less cluttered than those of most fonts.',
                    lastPages: 'Últimas páginas',
                    pagesTitle: 'Páginas',
                    photo: 'Foto',
                    published: 'Publicado:',
                    seeAll: 'Ver todos'
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
    css: [
        '@/assets/css/main.scss'
    ]
}