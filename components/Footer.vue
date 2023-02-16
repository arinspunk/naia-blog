<template>
  <footer class="footer wrap">
    <div class="footer__wrap wrap__row">
      <div class="wrap__col wrap__col--6">© <a class="" to="https://twitter.com/naia_ze" target="_blank" rel="noopener" title="Twitter">NZ&A</a> {{ year }}</div>
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
  @media screen and (min-width: $bp--laptop) {
    margin-top: 170px;
  }
  &__wrap {
    height: 50px;
    align-items: center;
    text-align: right;
    border-top: 1px solid;
    border-color: $black;
    border-color: var(--black);
    @media screen and (min-width: $bp--laptop) {
      height: 70px;
    }
  }
  @include transition-active {
    transition: .4s ease;
  }
  @include transition {
    opacity: 0;
    transform: translateY(100%);
  }
}
</style>