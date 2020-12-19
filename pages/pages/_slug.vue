<template>
  <div>
    <header class="header container">
      <div class="logo">
        Logo
      </div>
      <ul class="nav">
        <li class="nav__item">
          <nuxt-link class="nav__link" :to="localePath('pages')">{{ $t('pagesTitle') }}</nuxt-link>
        </li>
        <li v-if="$i18n.locale !== 'pt'" class="nav__item">
          <nuxt-link v-if="article.transPt == undefined" class="nav__link" to="/">Galego</nuxt-link>
          <nuxt-link v-else class="nav__link" :to="`/pages/${article.transPt}`">Galego</nuxt-link>
        </li>
        <li v-if="$i18n.locale !== 'en'" class="nav__item">
          <nuxt-link v-if="article.transEn == undefined" class="nav__link" to="/en">English</nuxt-link>
          <nuxt-link v-else class="nav__link" :to="`/en/pages/${article.transEn}`">English</nuxt-link>
        </li>
        <li v-if="$i18n.locale !== 'es'" class="nav__item">
          <nuxt-link v-if="article.transEs == undefined" class="nav__link" to="/es">Castellano</nuxt-link>
          <nuxt-link v-else class="nav__link" :to="`/es/pages/${article.transEs}`">Castellano</nuxt-link>
        </li>
      </ul>
    </header>
    <article class="container">
      <h1>{{ article.title }}</h1>
      <small class="date">
        <time :datetime="article.createdAt">{{ formatDate(article.createdAt,$i18n.locale) }}</time>
      </small>
      <img :src="require(`~/assets/images/${article.img}`)" :alt="article.alt" class="main-img" />
      <nuxt-content :document="article" />
      <prev-next :prev="prev" :next="next" />
    </article>
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

<style>
  .date {
    display: block;
    margin: -15px 0 25px;
  }
  figure {
    margin: 30px 0;
  }
</style>

