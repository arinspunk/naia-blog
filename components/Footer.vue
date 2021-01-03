<template>
  <footer class="footer wrap">
    <div class="footer__wrap wrap__row">
      <div class="wrap__col wrap__col--6">© Naia & Zé {{ year }}</div>
    </div>
  </footer>
</template>

<script>
export default {
  computed: {
    year() {
      return new Date().getFullYear();
    }
  }
}
</script>

<style scoped lang="scss">
.footer {
  background: $white;
  background: var(--white);
  margin-top: 120px;
  border-top: 1px solid;
  border-color: $black;
  border-color: var(--black);
  @media screen and (min-width: $bp--laptop) {
    margin-top: 170px;
  }
  &__wrap {
    height: 50px;
    align-items: center;
    @media screen and (min-width: $bp--laptop) {
      height: 70px;
    }
  }
}
</style>