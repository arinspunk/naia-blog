<template>
  <footer class="footer wrap">
    <div class="wrap__row">
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
  height: 70px;
  background: black;
  background: var(--black);
  color: white;
  color: var(--white);
  align-items: center;
}
</style>