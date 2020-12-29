<template>
  <div class="next-prev wrap">
    <div class="wrap__row">
      <NuxtLink
        v-if="prev"
        :to="localePath({ name: 'pages-slug', params: { slug: prev.slug } })"
        class="next-prev__link next-prev__link--prev wrap__col wrap__col--3"
        :title="prev.title"
      >
        <img :data-src="require(`~/assets/images/pages/${prev.img}`)" :alt="prev.alt" class="next-prev__img lazyload" /> <svg width="216" height="132" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.4 66.707l63.085 63.085-1.415 1.414L.293 66.428a1 1 0 010-1.414L65.307 0l1.414 1.414L3.428 64.707H200v2H3.4z" fill="#000"/></svg>
      </NuxtLink>
      <NuxtLink
        v-if="next"
        :to="localePath({ name: 'pages-slug', params: { slug: next.slug } })"
        class="next-prev__link next-prev__link--next wrap__col wrap__col--3"
        :title="next.title"
      >
        <svg width="200" height="132" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M196.6 64.499L133.515 1.414 134.929 0l64.778 64.778a1 1 0 010 1.414l-65.014 65.014-1.414-1.414 63.293-63.293H0v-2h196.6z" fill="#000"/></svg> <img :data-src="require(`~/assets/images/pages/${next.img}`)" :alt="next.alt" class="next-prev__img next-prev__img--right lazyload" />
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
    margin-top: 180px;
    &__link {
      display: flex;
      justify-content: center;
      align-items: center;
      &--next {
        text-align: right;
      }
    }
    &__img {
      max-width: 200px;
      border-radius: 100%;
      margin: 0 40px 0 0;
      &--right {
        margin: 0 0 0 40px;
      }
    }
  }
</style>
