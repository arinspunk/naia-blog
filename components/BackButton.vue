<template>
  <div class="back-button wrap">
    <div class="wrap__row">
      <div class="wrap__col wrap__col--4 wrap__col--right text-center">
        <NuxtLink :to="localePath('/')" class="button">{{ $t('seeAll') }}</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style scoped lang="scss">
.back-button {
  margin-top: 83px;
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
}
</style>