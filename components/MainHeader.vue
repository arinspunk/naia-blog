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
      <ul
        v-if="this.$route.name == 'slug___pt' || this.$route.name == 'slug___es' || this.$route.name == 'slug___en'"
        class="header__languages nav wrap__col wrap__col--4"
      >
        <li v-if="$i18n.locale !== 'pt'" class="nav__item">
          <NuxtLink v-if="article.transPt == undefined" class="nav__link gl" to="/">
            Galego
          </NuxtLink>
          <NuxtLink v-else class="nav__link gl" :to="`/${article.transPt}`">
            Galego
          </NuxtLink>
        </li>
        <li v-if="$i18n.locale !== 'en'" class="nav__item">
          <NuxtLink v-if="article.transEn == undefined" class="nav__link en" to="/en">
            English
          </NuxtLink>
          <NuxtLink v-else class="nav__link en" :to="`/en/${article.transEn}`">
            English
          </NuxtLink>
        </li>
        <li v-if="$i18n.locale !== 'es'" class="nav__item">
          <NuxtLink v-if="article.transEs == undefined" class="nav__link es" to="/es">
            Español
          </NuxtLink>
          <NuxtLink v-else class="nav__link es" :to="`/es/${article.transEs}`">
            Español
          </NuxtLink>
        </li>
      </ul>
      <ul v-else class="header__languages nav wrap__col wrap__col--4">
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
    &__wrap {
      position: relative;
      top: -3px;
      height: 40px;
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
    &__logo-link {
      display: block;
    }
    &__logo-img {
      max-width: 68px;
      @media screen and (min-width: $bp--tablet-v) {
        max-width: 80px;
      }
      @media screen and (min-width: $bp--laptop) {
        max-width: 85px;
      }
      @media screen and (min-width: $bp--desktop) {
        max-width: 100px;
      }
    }
    &__languages {
      opacity: 0.4;
    }
    &__logo,
    &__languages {
      display: flex;
      align-items: center;
    }
  }
</style>