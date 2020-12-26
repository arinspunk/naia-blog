<template>
  <header class="header wrap">
    <div class="wrap__row">
      <div class="logo wrap__col wrap__col--2">
        Logo
      </div>
      <ul class="nav wrap__col wrap__col--2">
        <li class="nav__item">
          <nuxt-link class="nav__link" :to="localePath('pages')">{{ $t('pagesTitle') }}</nuxt-link>
        </li>
      </ul>
      <ul class="nav wrap__col wrap__col--2">
        <li v-if="$i18n.locale !== 'pt'" class="nav__item">
          <nuxt-link class="nav__link" :to="switchLocalePath('pt')">Galego</nuxt-link>
        </li>
        <li v-if="$i18n.locale !== 'en'" class="nav__item">
          <nuxt-link class="nav__link" :to="switchLocalePath('en')">English</nuxt-link>
        </li>
        <li v-if="$i18n.locale !== 'es'" class="nav__item">
          <nuxt-link class="nav__link" :to="switchLocalePath('es')">Castellano</nuxt-link>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
  export default {
    transition: {
      name: "layout"
    }
  }
</script>

<style scoped lang="scss">
  .header {
    height: 70px;
    background: $white;
  }
</style>