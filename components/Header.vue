<template>
  <header class="">
    <ul class="flex lang-switch justify-around">
        <li v-if="$i18n.locale !== 'pt'">
            <nuxt-link class="" :to="switchLocalePath('pt')">PT</nuxt-link>
        </li>
        <li v-if="$i18n.locale !== 'en'">
            <nuxt-link class="" :to="switchLocalePath('en')">EN</nuxt-link>
        </li>
        <li v-if="$i18n.locale !== 'es'">
            <nuxt-link class="" :to="switchLocalePath('es')">ES</nuxt-link>
        </li>
    </ul>
  </header>
</template>