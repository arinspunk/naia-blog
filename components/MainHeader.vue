<template>
  <header class="header container">
    <div class="logo">
      Logo
    </div>
    <ul class="nav">
      <li class="nav__item">
        <nuxt-link class="nav__link" :to="localePath('pages')">{{ $t('pagesTitle') }}</nuxt-link>
      </li>
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
  </header>
</template>

<script>
  export default {
    transition: {
      name: "layout"
    }
  }
</script>

<style>
  .header {
    margin: 0 auto;
    padding: 20px 0;
  }
  .nav {
    list-style: none;
    padding: 0;
    margin: 0;
    text-align: right;
  }
  .nav__item {
    display: inline-block;
    margin-left: 10px;
  }
</style>