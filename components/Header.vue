<template>
  <header class="topnav h-54px p-2 border-b-2 border-gray-200">
    <ul class="flex lang-switch justify-around">
        <li v-if="$i18n.locale !== 'pt'">
            <nuxt-link class="text-md ...":to="switchLocalePath('pt')">PT</nuxt-link>
        </li>
        <li v-if="$i18n.locale !== 'en'">
            <nuxt-link class="text-md ..." :to="switchLocalePath('en')">EN</nuxt-link>
        </li>
        <li v-if="$i18n.locale !== 'es'">
            <nuxt-link class="text-md ..." :to="switchLocalePath('es')">ES</nuxt-link>
        </li>
    </ul>
  </header>
</template>