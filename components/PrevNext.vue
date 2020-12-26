<template>
  <div class="next-prev wrap">
    <div class="wrap__row">
      <NuxtLink
        v-if="prev"
        :to="localePath({ name: 'pages-slug', params: { slug: prev.slug } })"
        class="next-prev__prev wrap__col wrap__col--2 wrap__col--left"
      >
        {{ prev.title }}
      </NuxtLink>
      <NuxtLink
        v-if="next"
        :to="localePath({ name: 'pages-slug', params: { slug: next.slug } })"
        class="next-prev__next wrap__col wrap__col--2 wrap__col--right"
      >
        {{ next.title }}
      </NuxtLink>
    </div>
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

<style scoped lang="scss">
  .next-prev {
    &__next {
      text-align: right;
    }
  }
</style>
