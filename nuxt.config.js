export default {
    modules: [
        '@nuxt/content',
        'nuxt-i18n'
    ],
    components: true,
    i18n: {
        locales: ['pt', 'en', 'es'],
        defaultLocale: 'pt',
        noPrefixDefaultLocale: true,
        vueI18n: {
            fallbackLocale: 'pt',
            messages: {
                pt: {
                    welcome: 'Bem-vinda',
                    verTodos: 'Ver todos'
                },
                en: {
                    welcome: 'Welcome',
                    verTodos: 'See all'
                },
                es: {
                    welcome: 'Bienvenido',
                    verTodos: 'Ver todos'
                }
            }
        }
    }
}