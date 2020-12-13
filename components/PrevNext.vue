<template>
  <div class="next-prev container">
    <NuxtLink
      v-if="prev"
      :to="localePath({ name: 'blog-slug', params: { slug: prev.slug } })"
      class="next-prev__prev"
    >
      {{ prev.title }}
    </NuxtLink>
    <NuxtLink
      v-if="next"
      :to="localePath({ name: 'blog-slug', params: { slug: next.slug } })"
      class="next-prev__next"
    >
      {{ next.title }}
    </NuxtLink>
  </div>
</template>

<script>
  export default {
    props: {
      prev: {
        type: Object,
        default: () => null
      },
      next: {
        type: Object,
        default: () => null
      }
    }
  }
</script>

<style lang="css">
  .next-prev {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
       -ms-flex-pack: justify;
     justify-content: space-between;
  }
</style>
