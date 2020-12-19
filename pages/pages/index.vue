<template>
  <main class="container">
    <h1>
      {{ $t('pagesTitle') }}
    </h1>
    <div class="articles">
      <article v-for="article of articles" :key="article.slug" class="article">
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

<style>
  .articles {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
        flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
  }
  article {
    -ms-flex: 0 0 calc(50% - 30px);
        flex: 0 0 calc(50% - 30px);
    max-width: calc(50% - 30px);
    padding-left: 15px;
    padding-right: 15px;
    margin: 0 0 25px;
  }
</style>