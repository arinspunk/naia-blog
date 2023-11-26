<template>
  <div>
    <MainHeader
      :key="article.name"
      :article="article"
    />
    <article class="article wrap">
      <div class="intro wrap__row">
        <h1 class="intro__title wrap__col wrap__col--4 wrap__col--right" :class="article.colour">{{ article.title }}</h1>
        <time class="intro__text wrap__col wrap__col--4 wrap__col--right" :datetime="article.date">{{ formatDate(article.date,$i18n.locale) }}</time>
      </div>
      <div class="wrap__row">
        <div class="wrap__col wrap__col--4">
          <template v-if="article.img2">
            <agile :navButtons="false" :speed="500">
              <div class="slide">
                <img
                  class="article__img lazyload"
                  :data-src="require(`~/assets/images/pages/${article.img}-3x.jpg`)"
                  data-sizes="auto"
                  :alt="article.alt" />
              </div>
              <template v-if="article.img2">
                <div class="slide">
                  <img
                    class="article__img lazyload"
                    :data-src="require(`~/assets/images/pages/${article.img2}-3x.jpg`)"
                    data-sizes="auto"
                    :alt="article.alt2" />
                </div>
              </template>
              <template v-if="article.img3">
                <div class="slide">
                  <img
                    class="article__img lazyload"
                    :data-src="require(`~/assets/images/pages/${article.img3}-3x.jpg`)"
                    data-sizes="auto"
                    :alt="article.alt3" />
                </div>
              </template>
              <template slot="prevButton">prev</template>
              <template slot="nextButton">next</template>
            </agile>
          </template>
          <template v-else>
            <img
              class="article__img lazyload"
              :data-src="require(`~/assets/images/pages/${article.img}-3x.jpg`)"
              data-sizes="auto"
              :alt="article.alt" />
          </template> 
        </div>
        <div class="wrap__col wrap__col--4 wrap__col--right">
          <div class="wrap__row">
            <div class="wrap__col wrap__col--3 article__text">
              <nuxt-content :document="article" />
            </div>
          </div>
        </div>
      </div>  
    </article>
    <prev-next :prev="prev" :next="next" />
    <back-button />
  </div>
</template>

<script>
import { VueAgile } from 'vue-agile'
export default {
    layout: 'post',
    methods: {
      formatDate(date,locale) {
        const options = { year: "numeric", month: "long", day: "numeric" };
        return new Date(date).toLocaleDateString(locale, options);
      }
    },
    async asyncData({ app, $content, params }) {
      const article = await $content(`${app.i18n.locale}/articles`, params.slug).fetch()
      const [prev, next] = await $content(`${app.i18n.locale}/articles`)
      .only(['title', 'slug', 'img', 'alt'])
      .sortBy('date', 'asc')
      .surround(params.slug)
      .fetch()
      return {
        article,
        prev,
        next
      }
    },
    head () {
      return {
        title: this.article.title + ' – ' + this.$t('blogTitle'),
        htmlAttrs: {
          lang: this.$i18n.locale,
        },
        meta: [
          { name: "author", content: "Naia & Zé" },
          { name: "description", property: "og:description", content: this.article.description, hid: "description" },
          { property: "og:title", content: this.article.title + ' – ' + this.$t('blogTitle') },
          { property: "og:image", content: require(`~/assets/images/pages/${this.article.img}-m-2x.jpg`) },
          { property: "og:image", content: require(`~/assets/images/pages/${this.article.img}-m-1x.jpg`) },
          { name: "twitter:description", content: this.article.description },
          { name: "twitter:image", content: require(`~/assets/images/pages/${this.article.img}-2x.jpg`) }
        ],
      };
    },
    components: {
      agile: VueAgile
    }
};
</script>

<style lang="scss">
  .article {
    &__img {
      margin-top: 30px;
      margin-bottom: 37px;
      /* border: 1px solid #f3f3f3; */
      @media screen and (min-width: $bp--tablet-h) {
        margin-top: 45px;
        margin-bottom: 50px;
      }
      @include transition-active {
        transition: .4s ease .2s;
      }
      @include transition {
        opacity: 0;
      }
    }
    &__text {
      @include transition-active {
        transition: .4s ease .1s;
      }
      @include transition {
        opacity: 0;
        transform: translateX(50px);
        @media screen and (min-width: $bp--tablet-v) {
            transform: translateX(100px);
        }
      }
    }
  }
  .agile {
    position: relative;
    &:focus, &:active, & *:focus, & *:active {
      outline: none;
    }
    &--rtl .agile__track,
    &--rtl .agile__slides,
    &--rtl .agile__actions,
    &--rtl .agile__dots {
      flex-direction: row-reverse;
    }

    &__list {
      display: block;
      overflow: hidden;
      position: relative;
      width: 100%;
    }

    &__track {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
    }

    &__slides {
      align-items: center;
      display: flex;
      flex-direction: row;
      flex-grow: 1;
      flex-shrink: unset;
      flex-wrap: nowrap;
      justify-content: flex-start;
    }

    &--disabled .agile__slides {
      display: block;
      width: 100%;
    }

    &__slide {
      display: block;
      flex-grow: 1;
      flex-shrink: 0;
    }

    &__slide,
    &__slide * {
      -webkit-user-drag: none;
    }

    &--fade .agile__slide {
      opacity: 0;
      position: relative;
      z-index: 0;
    }

    &--fade .agile__slide--active {
      opacity: 1;
      z-index: 2;
    }

    &--fade .agile__slide--expiring {
      opacity: 1;
      transition-duration: 0s;
      z-index: 1;
    }
    &__actions {
      display: flex;
      justify-content: center;
      position: relative;
      margin: -25px 0 38px;

    }
    &__dots {
      align-items: center;
      display: flex;
      list-style: none;
      padding: 0;
      white-space: nowrap;
    }
    &__dot {
      border-radius: 50%;
      border: 1px solid transparent;
      transition: .3s ease;
      button {
        width: 30px;
        height: 30px;
        padding: 0;
        border: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        background: transparent;
        &:active {
          background: transparent;
        }
        &:before {
          content: '';
          background: $black;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          transition: .3s ease;
          border: 2px solid $black;
        }
        &:hover:before {
          /* background-color: $white; */
          opacity: .5;
        }
      }
      &--current {
        button:before {
          width: 15px;
          height: 15px;
          @media screen and (min-width: $bp--tablet-h) {
            width: 20px;
            height: 20px;
          }
        }
      }
    }
  }
</style>

