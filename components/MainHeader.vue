<template>
  <header class="header wrap">
    <div class="header__wrap wrap__row">
      <div class="logo wrap__col wrap__col--2">
        Logo
      </div>
      <ul class="nav wrap__col wrap__col--2">
        <li class="nav__item">
          <NuxtLink class="nav__link" :to="localePath('pages')">{{ $t('pagesTitle') }}</NuxtLink>
        </li>
      </ul>
      <ul v-if="this.$route.name == 'pages-slug___pt' || this.$route.name == 'pages-slug___es' || this.$route.name == 'pages-slug___en'" class="nav wrap__col wrap__col--2">
        <li v-if="$i18n.locale !== 'pt'" class="nav__item">
          <NuxtLink v-if="article.transPt == undefined" class="nav__link" to="/">Galego</NuxtLink>
          <NuxtLink v-else class="nav__link" :to="`/pages/${article.transPt}`">Galego</NuxtLink>
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
      <ul v-else class="nav wrap__col wrap__col--2">
        <li v-if="$i18n.locale !== 'pt'" class="nav__item">
          <NuxtLink class="nav__link" :to="switchLocalePath('pt')">Galego</NuxtLink>
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
</style>