<template>
  <div class="next-prev wrap">
    <div class="wrap__row">
      <div class="wrap__col wrap__col--2 wrap__col--right">
        <NuxtLink
          v-if="prev"
          :to="localePath({ name: 'slug', params: { slug: prev.slug } })"
          class="next-prev__link next-prev__link--prev"
          :title="prev.title"
        >
          <img :data-src="require(`~/assets/images/pages/${prev.img}-m-2x.jpg`)" :alt="prev.alt" class="next-prev__img lazyload" /> <img :data-src="require(`~/assets/images/arrow-left.svg`)" alt="" class="next-prev__link-arrow lazyload" /> <span class="next-prev__link-text">{{ $t('prev') }}</span>
        </NuxtLink>
      </div>
      <div class="wrap__col wrap__col--2">
        <NuxtLink
          v-if="next"
          :to="localePath({ name: 'slug', params: { slug: next.slug } })"
          class="next-prev__link next-prev__link--next"
          :title="next.title"
        >
          <span class="next-prev__link-text">{{ $t('next') }}</span> <img :data-src="require(`~/assets/images/arrow-right.svg`)" alt="" class="next-prev__link-arrow next-prev__link-arrow--right lazyload" /> <img :data-src="require(`~/assets/images/pages/${next.img}-m-2x.jpg`)" :alt="next.alt" class="next-prev__img next-prev__img--right lazyload" />
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
    padding: 0 #{$gutter / 2};
    @media screen and (min-width: $bp--tablet-h) {
      margin-top: 180px;
    }
    @media screen and (min-width: $bp--laptop) {
      padding: 0 #{$gutter};
    }
    &__link {
      display: flex;
      align-items: center;
      text-decoration: none;
      @media screen and (min-width: $bp--tablet-h) {
      }
      &--next {
        justify-content: flex-end;
        @media screen and (min-width: $bp--tablet-h) {
          text-align: right;
        }
      }
    }
    &__link-text {
      display: none;
      @media screen and (min-width: $bp--tablet-v) {
        display: inline-block;
      }
      @media screen and (min-width: $bp--tablet-h) {
        :hover > & {
          opacity: .5;
        }
      }
    }
    &__link-arrow {
      position: relative;
      top: 2px;
      max-width: 19px;
      margin: 0 15px 0 0;
      &--right {
        margin: 0 0 0 15px;
      }
    }
    &__img {
      max-width: 160px;
      border-radius: 100%;
      margin: 0 25px 0 0;
      @media screen and (min-width: $bp--tablet-h) {
        max-width: 200px;
        margin: 0 25px 0 0;
      }
      &--right {
        margin: 0 0 0 25px;
        @media screen and (min-width: $bp--tablet-h) {
          margin: 0 0 0 25px;
        }
      }
    }
    .wrap__row {
      overflow: hidden;
      margin-right: -#{$gutter / 2};
      @media screen and (min-width: $bp--laptop) {
        margin-right: -#{$gutter};
      }
    }
    .wrap__col--2 {
      width: calc(50% - #{$gutter / 2});
      margin-right: $gutter / 2;
      @media screen and (min-width: $bp--laptop) {
        width: calc(33.333% - #{$gutter});
        margin-right: $gutter;
      }
    }
  }
</style>
