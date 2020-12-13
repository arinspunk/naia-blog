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
                    noMore: 'No more…',
                    photo: 'Photo',
                    published: 'Publicado:',
                    seeAll: 'See all',
                    welcome: 'Welcome'
                },
                es: {
                    noMore: 'No más…',
                    photo: 'Foto',
                    published: 'Published:',
                    seeAll: 'Ver todos',
                    welcome: 'Bienvenida'
                },
                pt: {
                    noMore: 'Nom mais…',
                    photo: 'Foto',
                    published: 'Publicado:',
                    welcome: 'Bem-vinda',
                    seeAll: 'Ver todos'
                }
            }
        }
    },
    css: [
        '@/assets/css/style.css'
    ]
}