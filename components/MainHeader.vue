<template>
  <header class="header container">
    <ul class="nav">
      <li v-if="$i18n.locale !== 'pt'" class="nav__item">
        <nuxt-link class="nav__link" :to="switchLocalePath('pt')">PT</nuxt-link>
      </li>
      <li v-if="$i18n.locale !== 'en'" class="nav__item">
        <nuxt-link class="nav__link" :to="switchLocalePath('en')">EN</nuxt-link>
      </li>
      <li v-if="$i18n.locale !== 'es'" class="nav__item">
        <nuxt-link class="nav__link" :to="switchLocalePath('es')">ES</nuxt-link>
      </li>
    </ul>
  </header>
</template>

<script>
  export default {
    // mounted() {
    //   //console.log(this.article.title)
    // },
    transition: {
      name: "layout"
    }
  };
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