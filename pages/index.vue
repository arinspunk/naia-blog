<template>
  <main>
    <h1>{{ $t('welcome') }}</h1>
    <p>
      <NuxtLink to="/about">About</NuxtLink>
    </p>
    <p>
      <a href="https://nuxtjs.org">External Link</a>
    </p>
    <ul>
      <li v-for="article of articles" :key="article.slug">
        <NuxtLink :to="localePath({ name: 'blog-slug', params: { slug: article.slug } })">
          <div>
            <h2>{{ article.title }}</h2>
            <p>{{ article.description }}</p>
          </div>
        </NuxtLink>
      </li>
    </ul>
  </main>
</template>

<script>
export default {
  async asyncData({ app, $content, params }) {
    const articles = await $content(`${app.i18n.locale}/articles`, params.slug)
      .only(["title", "description", "img", "slug"])
      .sortBy("createdAt", "asc")
      .limit(2)
      .fetch();

    return {
      articles
    };
  }
};
</script>

