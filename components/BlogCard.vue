<template>
  <article class="article wrap__col wrap__col--2">
    <NuxtLink
        :to="localePath({ name: 'pages-slug', params: { slug: article.slug } })"
        class="article__link"
    >
        <img :data-src="require(`~/assets/images/pages/${article.img}`)" :alt="article.alt" class="article__img lazyload" />
    </NuxtLink>
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
        margin-bottom: 20px;
        @media screen and (min-width: $bp--tablet-v) {
          margin-bottom: 40px;
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
          @media screen and (min-width: $bp--tablet-v) {
              font-size: $p-size-m;
              font-size: var(--p-size-m);
          }  
          @media screen and (min-width: $bp--laptop) {
              font-size: $p-size-l;
              font-size: var(--p-size-l);
          }  
        }
        &__link {
          text-decoration: none;
        }
    }
</style>