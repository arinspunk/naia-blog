<template>
  <div>
    <MainHeader
      :key="article.name"
      :article="article"
    />
    <article class="article wrap">
      <div class="intro wrap__row">
        <h1 class="intro__title wrap__col wrap__col--4 wrap__col--right" :class="article.colour">{{ article.title }}</h1>
        <time class="intro__text wrap__col wrap__col--4 wrap__col--right" :datetime="article.createdAt">{{ formatDate(article.createdAt,$i18n.locale) }}</time>
      </div>
      <div class="wrap__row">
        <img class="article__img wrap__col wrap__col--4" :src="require(`~/assets/images/${article.img}`)" :alt="article.alt" />
        <div class="wrap__col wrap__col--4 wrap__col--right">
          <div class="wrap__row">
            <div class="wrap__col wrap__col--3">
              <nuxt-content :document="article" />
            </div>
          </div>
        </div>
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
    },
    head () {
      return {
        title: this.article.title + ' – ' + this.$t('blogTitle'),
        htmlAttrs: {
          lang: this.$i18n.locale,
        },
        meta: [
          { name: "author", content: "Naia & Zé" },
          { name: "description", property: "og:description", content: this.article.description, hid: "description" },
          { property: "og:title", content: this.article.title + ' – ' + this.$t('blogTitle') },
          { property: "og:image", content: "/cat.jpg" },
          { name: "twitter:description", content: this.article.description },
          { name: "twitter:image", content: "/cat.jpg" }
        ],
      };
    },
};
</script>

<style scoped lang="scss">
  .article {
    &__img {
      margin-bottom: 50px;
    }
  }
</style>

