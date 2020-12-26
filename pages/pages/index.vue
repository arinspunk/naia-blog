<template>
  <main class="wrap">
    <div class="intro wrap__row">
      <h1 class="intro__title wrap__col wrap__col--4 wrap__col--right">
        {{ $t('pagesTitle') }} 
      </h1>
      <p class="intro__text wrap__col wrap__col--4 wrap__col--right">
        Ahora mismo mi cuaderno tiene 4 páginas {{ $t('') }}
      </p>
    </div>
    <div class="articles wrap__row">
      <article v-for="article of articles" :key="article.slug" class="wrap__col wrap__col--2 article">
        <img :src="require(`~/assets/images/${article.img}`)" :alt="article.alt" class="article__img" />
        <h2 class="article__title">
          <NuxtLink :to="localePath({ name: 'pages-slug', params: { slug: article.slug } })" class="article__link">
            {{ article.title }}
          </NuxtLink>
        </h2>
      </article>
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
</style>