<template>
  <article>
    <h1>{{ article.title }}</h1>
    <p>Article last updated: {{ formatDate(article.updatedAt) }}</p>
    <p>{{ article.description }}</p>
    <nav>
      <ul>
        <li v-for="link of article.toc" :key="link.id" :class="{ 'py-2': link.depth === 2, 'ml-2 pb-2': link.depth === 3 }">
          <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
        </li>
      </ul>
    </nav>
    <img :src="require(`~/assets/images/${article.img}`)" :alt="article.alt" />
    <nuxt-content :document="article" />
    <div class="bg-blue-500 text-white p-4 mb-4">
        This is HTML inside markdown that has a class of note
    </div>
    <prev-next :prev="prev" :next="next" />
  </article>
</template>

<script>
export default {
    methods: {
        formatDate(date) {
            const options = { year: "numeric", month: "long", day: "numeric" };
            return new Date(date).toLocaleDateString("en", options);
        }
    },
    async asyncData({ app, $content, params }) {
        const article = await $content(`${app.i18n.locale}/articles`, params.slug).fetch();
        return { article };
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
h1 {
  font-weight: bold;
  font-size: 36px;
}
img {
  width: 100%;
}
.nuxt-content h2 {
  font-weight: bold;
  font-size: 28px;
}
.nuxt-content h3 {
  font-weight: bold;
  font-size: 22px;
}
.nuxt-content p {
  margin-bottom: 20px;
}
</style>

