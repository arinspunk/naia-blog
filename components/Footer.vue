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
  background: black;
  background: var(--black);
  color: white;
  color: var(--white);
  margin-top: 170px;
  &__wrap {
    height: 70px;
    align-items: center;
  }
}
</style>