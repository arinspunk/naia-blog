<template>
  <main class="wrap">
    <div class="intro wrap__row">
      <h1 class="intro__title wrap__col wrap__col--4 wrap__col--right">
        {{ $t('blogTitle') }}
      </h1>
      <div class="wrap__col wrap__col--4 wrap__col--right">
        <div class="wrap__row">
          <p class="intro__text wrap__col wrap__col--3">
            {{ $t('blogIntro') }}
          </p>
        </div>
      </div>
    </div>
    <div class="articles">
      <div class="wrap__row">
        <h2 class="wrap__col wrap__col--4 wrap__col--right">
          {{ $t('lastPages') }}:
        </h2>
      </div>
      <div class="wrap__row">
        <BlogCard
          v-for="article in articles"
          :key="article.name"
          :article="article"
        />
        <div class="wrap__col wrap__col--6">
          <NuxtLink :to="localePath('pages/index')" class="articles__link">
            {{ $t('seeAll') }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
  export default {
    async asyncData({ app, $content, params }) {
      const articles = await $content(`${app.i18n.locale}/articles`, params.slug)
        .only(["title", "description", "slug", "img"])
        .sortBy("createdAt", "desc")
        .limit(3)
        .fetch();
      return {
        articles
      };
    }
  }
</script>

<style scoped lang="scss">
</style>