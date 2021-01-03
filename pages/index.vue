<template>
  <main class="wrap">
    <div class="intro wrap__row">
      <h1 class="intro__title wrap__col wrap__col--4 wrap__col--right orange">
        {{ $t("blogTitle") }}
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
        <h2 class="articles__title wrap__col wrap__col--4 wrap__col--right">
          {{ $t('lastPages') }}
        </h2>
      </div>
      <div class="wrap__row">
        <BlogCard
          v-for="article in articles"
          :key="article.name"
          :article="article"
        />
        <div class="articles__link-wrap wrap__col wrap__col--2 text-center">
          <NuxtLink :to="localePath('/pages/')" class="articles__link button">
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
        .only(["slug", "img"])
        .sortBy("createdAt", "desc")
        .limit(2)
        .fetch();
      return {
        articles
      };
    },
    head () {
      return {
        title: this.$t("blogTitle"),
        htmlAttrs: {
          lang: this.$i18n.locale,
        },
        meta: [
          { name: "author", content: "Naia & Zé" },
          { name: "description", property: "og:description", content: this.$t("blogIntro"), hid: "description" },
          { property: "og:title", content: this.$t("blogTitle") },
          { property: "og:image", content: "/cat.jpg" },
          { name: "twitter:description", content: this.$t("blogIntro") },
          { name: "twitter:image", content: "/cat.jpg" }
        ],
      };
    },
  }
</script>

<style scoped lang="scss">
  .articles {
    &__title {
      margin-top: 35px;
      margin-bottom: 33px;
      @media screen and (min-width: $bp--tablet-h) {
        margin-top: 45px;
        margin-bottom: 80px;
      }
    }
    &__link-wrap {
      margin-top: 25px;
      width: 100%;
      @media screen and (min-width: $bp--tablet-h) {
        margin-top: 0;
        margin-bottom: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    .wrap__row {
      margin-right: -#{$gutter / 2};
      @media screen and (min-width: $bp--tablet-h) {
        margin-right: -#{$gutter};
      }
    }
    .wrap__col--2 {
      width: calc(50% - #{$gutter / 2});
      margin-right: $gutter / 2;
      &:last-child {
        width: 100%;
        @media screen and (min-width: $bp--tablet-h) {
          width: calc(33.333% - #{$gutter});
        }
      }
      @media screen and (min-width: $bp--tablet-h) {
        width: calc(33.333% - #{$gutter});
        margin-right: $gutter;
      }
    }
    .wrap__col--6 {
      margin-right: $gutter / 2;
      @media screen and (min-width: $bp--tablet-h) {
        margin-right: $gutter;
      }
    }
  }
</style>