<template>
  <div class="back-button wrap">
    <div class="wrap__row">
      <div class="wrap__col wrap__col--4 wrap__col--right text-center">
        <NuxtLink :to="localePath('/')" class="button">🌈&nbsp;&nbsp;{{ $t('seeAll') }}</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style scoped lang="scss">
.back-button {
  margin-top: 63px;
  @media screen and (min-width: $bp--tablet-h) {
    margin-top: 103px;
  }
  .wrap__col {
    @media screen and (min-width: $bp--tablet-h) {
      width: 100%;
    }
    @media screen and (min-width: $bp--laptop) {
      width: calc(66.667% - #{$gutter});
      margin-right: $gutter;
    }
  }
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
</style>