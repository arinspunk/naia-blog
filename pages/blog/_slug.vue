<template>
  <div>
    <header class="header container">
      <ul class="nav">
        <li v-if="$i18n.locale !== 'pt'" class="nav__item">
          <nuxt-link v-if="article.transPt == undefined" class="nav__link" to="/">PT</nuxt-link>
          <nuxt-link v-else class="nav__link" :to="`/blog/${article.transPt}`">PT</nuxt-link>
        </li>
        <li v-if="$i18n.locale !== 'en'" class="nav__item">
          <nuxt-link v-if="article.transEn == undefined" class="nav__link" to="/en">EN</nuxt-link>
          <nuxt-link v-else class="nav__link" :to="`/en/blog/${article.transEn}`">EN</nuxt-link>
        </li>
        <li v-if="$i18n.locale !== 'es'" class="nav__item">
          <nuxt-link v-if="article.transEs == undefined" class="nav__link" to="/es">ES</nuxt-link>
          <nuxt-link v-else class="nav__link" :to="`/es/blog/${article.transEs}`">ES</nuxt-link>
        </li>
      </ul>
    </header>
    <article class="container">
      <h1>{{ article.title }}</h1>
      <small class="date">
        {{ $t('published') }} <time :datetime="article.updatedAt">{{ formatDate(article.updatedAt) }}</time>
      </small>
      <figure>
        <img :src="require(`~/assets/images/${article.img}`)" :alt="article.alt" class="main-img" />
        <figcaption>
          {{ $t('photo') }}:
          <a :href="article.credits_link" target="_blank" rel="noopener">
            {{ article.credits }}
          </a>
        </figcaption>
      </figure> 
      <nuxt-content :document="article" />
      <prev-next :prev="prev" :next="next" />
    </article>
  </div>
</template>

<script>
export default {
    layout: 'post',
    methods: {
        formatDate(date) {
            const options = { year: "numeric", month: "long", day: "numeric" };
            return new Date(date).toLocaleDateString("en", options);
        }
    },
    async asyncData({ app, $content, params }) {
        const article = await $content(`${app.i18n.locale}/articles`, params.slug).fetch()

        const [prev, next] = await $content(`${app.i18n.locale}/articles`)
        .only(['title', 'slug'])
        .sortBy('createdAt', 'asc')
        .surround(params.slug)
        .fetch()

        return {
            article,
            prev,
            next
        }
    }
};
</script>

<style>
  .date {
    display: block;
    margin: -15px 0 25px;
  }
  figure {
    margin: 30px 0;
  }
</style>

