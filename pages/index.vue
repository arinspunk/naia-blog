<template>
  <main class="container">
    <h1>Blog</h1>
    <div class="articles">
      <article v-for="article of articles" :key="article.slug">
        <img :src="require(`~/assets/images/${article.img}`)" :alt="article.alt" class="main-img" />
        <h2>
          <NuxtLink :to="localePath({ name: 'blog-slug', params: { slug: article.slug } })">
            {{ article.title }}
          </NuxtLink>
        </h2>
        <p>{{ article.description }}</p>
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
    }
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