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
          <img
            :data-src="require(`~/assets/images/pages/${prev.img}-m-2x.jpg`)"
            :alt="prev.alt"
            data-sizes="auto"
            class="next-prev__img lazyload" /> <img :src="require(`~/assets/images/arrow-left.svg`)" alt="" class="next-prev__link-arrow" /> <span class="next-prev__link-text">{{ $t('prev') }}</span>
        </NuxtLink>
      </div>
      <div class="wrap__col wrap__col--2">
        <NuxtLink
          v-if="next"
          :to="localePath({ name: 'slug', params: { slug: next.slug } })"
          class="next-prev__link next-prev__link--next"
          :title="next.title"
        >
          <img
            :data-src="require(`~/assets/images/pages/${next.img}-m-2x.jpg`)"
            :alt="next.alt"
            data-sizes="auto"
            class="next-prev__img next-prev__img--right lazyload" /> <span class="next-prev__link-text">{{ $t('next') }}</span> <img :src="require(`~/assets/images/arrow-right.svg`)" alt="" class="next-prev__link-arrow next-prev__link-arrow--right" />
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
    margin-top: 113px;
    padding: 0 #{$gutter / 2};
    @media screen and (min-width: $bp--tablet-h) {
      margin-top: 180px;
    }
    @media screen and (min-width: $bp--tablet-h) {
      padding: 0 #{$gutter};
    }
    &__link {
      display: block;
      text-decoration: none;
      @media screen and (min-width: $bp--tablet-h) {
        display: flex;
        align-items: center;
      }
      &--next {
        text-align: right;
        @media screen and (min-width: $bp--tablet-h) {
          justify-content: flex-end;
        }
      }
    }
    &__link-text {
      display: inline-block;
      transition: .2s ease;
      @media screen and (min-width: $bp--tablet-h) {
        :hover > & {
          opacity: 0;
        }
      }
    }
    &__link-arrow {
      position: relative;
      top: 0px;
      max-width: 16px;
      margin: 0 5px 0 0;
      display: inline-block;
      transition: .2s ease;
      @media screen and (min-width: $bp--tablet-h) {
        top: 2px;
        margin: 0 15px 0 0;
        max-width: 19px;
        :hover > & {
          transform: translateX(-10px);
        }
      }
      &--right {
        margin: 0 0 0 5px;
        @media screen and (min-width: $bp--tablet-h) {
          margin: 0 0 0 15px;
          :hover > & {
            transform: translateX(10px);
          }
        }
      }
    }
    &__img {
      max-width: 160px;
      margin: 0 0 7px 0;
      transition: .2s ease-in;
      @media screen and (min-width: $bp--tablet-v) {
        border-radius: 100%;
      }
      @media screen and (min-width: $bp--tablet-h) {
        max-width: 200px;
        margin: 0 25px 0 0;
        :hover > & {
          transform: scale(1.05);
        }
      }
      &--right {
        margin: 0 0 7px 0;
        order: 3;
        @media screen and (min-width: $bp--tablet-h) {
          margin: 0 0 0 25px;
        }
      }
    }
    .wrap__row {
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
    @include transition-active {
      transition: .4s ease;
    }
    @include transition {
      opacity: 0;
      transform: translateX(50px);
      @media screen and (min-width: $bp--tablet-v) {
        transform: translateX(100px);
      }
    }
  }
</style>
