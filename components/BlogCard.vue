<template>
  <article class="article wrap__col wrap__col--2">
    <NuxtLink
        :to="localePath({ name: 'pages-slug', params: { slug: article.slug } })"
        class="article__link"
    >
        <img :src="require(`~/assets/images/${article.img}`)" :alt="article.alt" class="article__img" />
    </NuxtLink>
    <h3 class="article__title">
      <NuxtLink
        :to="localePath({ name: 'pages-slug', params: { slug: article.slug } })"
        class="article__link"
      >{{ article.title }}</NuxtLink>
    </h3>
  </article>
</template>

<script>
  export default {
    props: {
      article: {
        type: Object
      }
    }
  }
</script>

<style scoped lang="scss">
    .article {
        margin-bottom: 60px;
        &__img {
            margin-bottom: 20px;
        }
        &__title {
            font-family: $fonts-sans;
            font-family: var(--fonts-sans);
            font-weight: normal;
            font-size: $p-size-s;
            font-size: var(--p-size-s);
            font-variant-ligatures: common-ligatures;
            text-transform: none;
            margin: 0;
            @media screen and (min-width: $bp--medium) {
                font-size: $p-size-m;
                font-size: var(--p-size-m);
            }  
            @media screen and (min-width: $bp--xlarge) {
                font-size: $p-size-l;
                font-size: var(--p-size-l);
            }  
        }
        &__link {
        text-decoration: none;
        }
    }
</style>