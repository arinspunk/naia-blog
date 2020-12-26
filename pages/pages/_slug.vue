<template>
  <div>
    <header class="header wrap">
      <div class="wrap__row">
        <div class="logo wrap__col wrap__col--2">
          Logo
        </div>
        <ul class="nav wrap__col wrap__col--2">
          <li class="nav__item">
            <nuxt-link class="nav__link" :to="localePath('pages')">{{ $t('pagesTitle') }}</nuxt-link>
          </li>
        </ul>
        <ul class="nav wrap__col wrap__col--2">
          <li v-if="$i18n.locale !== 'pt'" class="nav__item">
            <nuxt-link class="nav__link" :to="switchLocalePath('pt')">Galego</nuxt-link>
          </li>
          <li v-if="$i18n.locale !== 'en'" class="nav__item">
            <nuxt-link class="nav__link" :to="switchLocalePath('en')">English</nuxt-link>
          </li>
          <li v-if="$i18n.locale !== 'es'" class="nav__item">
            <nuxt-link class="nav__link" :to="switchLocalePath('es')">Castellano</nuxt-link>
          </li>
        </ul>
      </div>
    </header>
    <article class="wrap">
      <div class="wrap__row">
        <h1 class="wrap__col wrap__col--4 wrap__col--right">{{ article.title }}</h1>
        <time class="wrap__col wrap__col--4 wrap__col--right" :datetime="article.createdAt">{{ formatDate(article.createdAt,$i18n.locale) }}</time>
        <img class="wrap__col wrap__col--4" :src="require(`~/assets/images/${article.img}`)" :alt="article.alt" />
        <nuxt-content class="wrap__col wrap__col--4 wrap__col--right" :document="article" />
      </div>  
    </article>
    <prev-next :prev="prev" :next="next" />
  </div>
</template>

<script>
export default {
    layout: 'post',
    methods: {
      formatDate(date,locale) {
        const options = { year: "numeric", month: "long", day: "numeric" };
        return new Date(date).toLocaleDateString(locale, options);
      }
    },
    // nuxtI18n: {
    //   paths: {
    //     en: '/pages/:slug',
    //     es: '/paginas/:slug',
    //     pt: '/paginas/:slug',
    //   }
    // },
    async asyncData({ app, $content, params }) {
      const article = await $content(`${app.i18n.locale}/articles`, params.slug).fetch()
      const [prev, next] = await $content(`${app.i18n.locale}/articles`)
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc')
      .surround(params.slug)
      .fetch()
      return {
        article,
        prev,
        next
      }
    }
};
</script>

<style scoped lang="scss">
  h1 {
    margin-bottom: 0;
    color: red;
  }
  time {
    margin-bottom: 120px;
  }
</style>

