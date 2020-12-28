<template>
  <header class="header wrap">
    <div class="header__wrap wrap__row">
      <div class="logo wrap__col wrap__col--2">
        <span v-if="this.$route.name == 'index___pt' || this.$route.name == 'index___es' || this.$route.name == 'index___en'">
          Sem link
        </span>
        <NuxtLink v-else class="nav__link" :to="localePath('/')">
          Com link
        </NuxtLink>
      </div>
      <ul class="nav wrap__col wrap__col--2">
        <li class="nav__item">
          <NuxtLink class="nav__link" :to="localePath('pages')">{{ $t('pagesTitle') }}</NuxtLink>
        </li>
      </ul>
      <ul v-if="this.$route.name == 'pages-slug___pt' || this.$route.name == 'pages-slug___es' || this.$route.name == 'pages-slug___en'" class="languages nav wrap__col wrap__col--2">
        <li v-if="$i18n.locale !== 'pt'" class="nav__item">
          <NuxtLink v-if="article.transPt == undefined" class="nav__link" to="/">Galego (Pt)</NuxtLink>
          <NuxtLink v-else class="nav__link" :to="`/pages/${article.transPt}`">Galego (Pt)</NuxtLink>
        </li>
        <li v-if="$i18n.locale !== 'en'" class="nav__item">
          <NuxtLink v-if="article.transEn == undefined" class="nav__link" to="/en">English</NuxtLink>
          <NuxtLink v-else class="nav__link" :to="`/en/pages/${article.transEn}`">English</NuxtLink>
        </li>
        <li v-if="$i18n.locale !== 'es'" class="nav__item">
          <NuxtLink v-if="article.transEs == undefined" class="nav__link" to="/es">Castellano</NuxtLink>
          <NuxtLink v-else class="nav__link" :to="`/es/pages/${article.transEs}`">Castellano</NuxtLink>
        </li>
      </ul>
      <ul v-else class="languages nav wrap__col wrap__col--2">
        <li v-if="$i18n.locale !== 'pt'" class="nav__item">
          <NuxtLink class="nav__link" :to="switchLocalePath('pt')">Galego (Pt)</NuxtLink>
        </li>
        <li v-if="$i18n.locale !== 'en'" class="nav__item">
          <NuxtLink class="nav__link" :to="switchLocalePath('en')">English</NuxtLink>
        </li>
        <li v-if="$i18n.locale !== 'es'" class="nav__item">
          <NuxtLink class="nav__link" :to="switchLocalePath('es')">Castellano</NuxtLink>
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
    }
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
      height: 70px;
      align-items: center;
    }
  }
  .languages {
    opacity: .5;
  }
</style>