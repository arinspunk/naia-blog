<template>
  <main class="wrap">
    <div class="intro wrap__row">
      <h1 class="intro__title wrap__col wrap__col--4 wrap__col--right brown">
        {{ $t('pagesTitle') }} 
      </h1>
      <p class="intro__text wrap__col wrap__col--4 wrap__col--right">
        {{ $t('pagesNumber', { number: articles.length }) }} &#128523;
      </p>
    </div>
    <div class="articles wrap__row">
      <BlogCard
        v-for="article in articles"
        :key="article.name"
        :article="article"
      />
    </div>
  </main>
</template>

<script>
  export default {
    async asyncData({ app, $content, params }) {
      const articles = await $content(`${app.i18n.locale}/articles`, params.slug)
        .only(["title", "description", "slug", "img"])
        .sortBy("createdAt", "desc")
        .fetch();
      return {
        articles
      };
    },
    head () {
      return {
        title: this.$t('pagesTitle') + ' – ' + this.$t('blogTitle'),
        htmlAttrs: {
          lang: this.$i18n.locale,
        },
        meta: [
          { name: "author", content: "Naia & Zé" },
          { name: "description", property: "og:description", content: this.$t('blogIntro'), hid: "description" },
          { property: "og:title", content: this.$t('pagesTitle') + ' – ' + this.$t('blogTitle') },
          { property: "og:image", content: "/cat.jpg" },
          { name: "twitter:description", content: this.$t('blogIntro') },
          { name: "twitter:image", content: "/cat.jpg" }
        ],
      };
    },
    // nuxtI18n: {
    //     paths: {
    //         en: '/pages/:index',
    //         pt: '/paginas/:index',
    //         es: '/paginas/:index'
    //     }
    // }
  };
</script>

<style scoped lang="scss">
  .articles {
    .wrap__row {
      margin-right: -#{$gutter / 2};
      @media screen and (min-width: $bp--laptop) {
        margin-right: -#{$gutter};
      }
    }
    .wrap__col--2 {
      width: calc(50% - #{$gutter / 2});
      margin-right: $gutter / 2;
      @media screen and (min-width: $bp--laptop) {
        width: calc(33.333% - #{$gutter});
        margin-right: $gutter;
      }
    }
  }
</style>