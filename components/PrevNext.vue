<template>
  <div class="next-prev wrap">
    <div class="wrap__row">
      <div class="wrap__col wrap__col--3 wrap__col--left">
        <NuxtLink
          v-if="prev"
          :to="localePath({ name: 'pages-slug', params: { slug: prev.slug } })"
          class="next-prev__link next-prev__link--prev"
          :title="prev.title"
        >
          <img :data-src="require(`~/assets/images/pages/${prev.img}-m-2x.jpg`)" :alt="prev.alt" class="next-prev__img lazyload" /> <img :data-src="require(`~/assets/images/arrow-left.svg`)" alt="" class="next-prev__link-arrow lazyload" /> <span class="next-prev__link-text">{{ prev.title }}</span>
        </NuxtLink>
      </div>
      <div class="wrap__col wrap__col--3 wrap__col--right">
        <NuxtLink
          v-if="next"
          :to="localePath({ name: 'pages-slug', params: { slug: next.slug } })"
          class="next-prev__link next-prev__link--next"
          :title="next.title"
        >
          <span class="next-prev__link-text">{{ next.title }}</span> <img :data-src="require(`~/assets/images/arrow-right.svg`)" alt="" class="next-prev__link-arrow next-prev__link-arrow--right lazyload" /> <img :data-src="require(`~/assets/images/pages/${next.img}-m-2x.jpg`)" :alt="next.alt" class="next-prev__img next-prev__img--right lazyload" />
        </NuxtLink>
      </div>
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
    margin-top: 106px;
    padding: 0;
    @media screen and (min-width: $bp--tablet-h) {
      margin-top: 180px;
      padding: 0 #{$gutter / 2};
    }
    @media screen and (min-width: $bp--laptop) {
      padding: 0 #{$gutter};
    }
    &__link {
      display: flex;
      align-items: center;
      text-decoration: none;
      transform: translateX(calc(-50% - 0px));
      @media screen and (min-width: $bp--tablet-h) {
        transform: none;
      }
      &--next {
        justify-content: center;
        transform: translateX(calc(50% - 20px));
        margin-left: auto;
        @media screen and (min-width: $bp--tablet-h) {
          text-align: right;
          justify-content: right;
          transform: none;
        }
      }
    }
    &__link-text {
      display: none;
      @media screen and (min-width: $bp--tablet-v) {
        display: inline-block;
      }
    }
    &__link-arrow {
      position: relative;
      top: 2px;
      max-width: 37px;
      margin: 0 20px 0 0;
      opacity: .3;
      &--right {
        margin: 0 0 0 20px;
      }
    }
    &__img {
      max-width: 160px;
      border-radius: 100%;
      margin: 0 20px 0 0;
      @media screen and (min-width: $bp--tablet-h) {
        max-width: 200px;
        margin: 0 20px 0 0;
      }
      &--right {
        margin: 0 0 0 20px;
        @media screen and (min-width: $bp--tablet-h) {
          margin: 0 0 0 20px;
        }
      }
    }
    .wrap__row {
      overflow: hidden;
      margin-right: 0;
      @media screen and (min-width: $bp--laptop) {
        margin-right: -#{$gutter};
      }
    }
    .wrap__col--3 {
      width: calc(50% - #{$gutter / 2});
      margin-right: $gutter / 2;
      @media screen and (min-width: $bp--laptop) {
        width: calc(50% - #{$gutter});
        margin-right: $gutter;
      }
    }
  }
</style>
