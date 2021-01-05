<template>
  <header class="header wrap">
    <div class="header__wrap wrap__row">
      <div class="header__logo wrap__col wrap__col--2">
        <span
          v-if="this.$route.name == 'index___pt' || this.$route.name == 'index___es' || this.$route.name == 'index___en'"
        >
          <img data-src="/logo.jpg" alt="" class="header__logo-img lazyload" />
        </span>
        <NuxtLink v-else class="header__logo-link" :to="localePath('/')">
          <img data-src="/logo.jpg" alt="" class="header__logo-img lazyload" />
        </NuxtLink>
      </div>
      <ul class="nav wrap__col wrap__col--2">
        <li class="nav__item">
          <NuxtLink class="nav__link" :to="localePath('pages')">{{ $t('pagesTitle') }}</NuxtLink>
        </li>
      </ul>
      <ul
        v-if="this.$route.name == 'pages-slug___pt' || this.$route.name == 'pages-slug___es' || this.$route.name == 'pages-slug___en'"
        class="languages nav wrap__col wrap__col--2"
      >
        <li v-if="$i18n.locale !== 'pt'" class="nav__item">
          <NuxtLink v-if="article.transPt == undefined" class="nav__link gl" to="/">
            Galego
          </NuxtLink>
          <NuxtLink v-else class="nav__link gl" :to="`/pages/${article.transPt}`">
            Galego
          </NuxtLink>
        </li>
        <li v-if="$i18n.locale !== 'en'" class="nav__item">
          <NuxtLink v-if="article.transEn == undefined" class="nav__link en" to="/en">
            English
          </NuxtLink>
          <NuxtLink v-else class="nav__link en" :to="`/en/pages/${article.transEn}`">
            English
          </NuxtLink>
        </li>
        <li v-if="$i18n.locale !== 'es'" class="nav__item">
          <NuxtLink v-if="article.transEs == undefined" class="nav__link es" to="/es">
            Español
          </NuxtLink>
          <NuxtLink v-else class="nav__link es" :to="`/es/pages/${article.transEs}`">
            Español
          </NuxtLink>
        </li>
      </ul>
      <ul v-else class="languages nav wrap__col wrap__col--2">
        <li v-if="$i18n.locale !== 'pt'" class="nav__item">
          <NuxtLink class="nav__link gl" :to="switchLocalePath('pt')">
            Galego
          </NuxtLink>
        </li>
        <li v-if="$i18n.locale !== 'en'" class="nav__item">
          <NuxtLink class="nav__link en" :to="switchLocalePath('en')">
            English
          </NuxtLink>
        </li>
        <li v-if="$i18n.locale !== 'es'" class="nav__item">
          <NuxtLink class="nav__link es" :to="switchLocalePath('es')">
            Español
          </NuxtLink>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
  export default {
    props: {
      article: {
        type: Object
      }
    },
  }
</script>

<style scoped lang="scss">
  .header {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    background: $white;
    background: var(--white);
    z-index: 999;
    &__logo {
      position: absolute;
      top: 7px;
      left: 0;
      max-width: 68px;
      @media screen and (min-width: $bp--tablet-v) {
        max-width: 80px;
      }
      @media screen and (min-width: $bp--laptop) {
        max-width: 100px;
      }
      @media screen and (min-width: $bp--desktop) {
        max-width: 110px;
        top: 11px;
      }
    }
    &__wrap {
      position: relative;
      top: -3px;
      height: 40px;
      align-items: center;
      @media screen and (min-width: $bp--tablet-v) {
        height: 45px;
      }
      @media screen and (min-width: $bp--laptop) {
        height: 55px;
      }
      @media screen and (min-width: $bp--desktop) {
        top: -4px;
        height: 65px;
      }
    }
    .wrap__row {
      margin-right: -#{$gutter / 2};
      justify-content: flex-end;
      @media screen and (min-width: $bp--tablet-v) {
        margin-right: -#{$gutter};
      }
    }
    .wrap__col--2 {
      width: auto;
      margin-right: $gutter / 2;
      @media screen and (min-width: $bp--tablet-v) {
        width: calc(33.333% - #{$gutter});
        margin-right: $gutter;
      }
    }
  }
  .languages {
    opacity: 0.5;
  }
</style>