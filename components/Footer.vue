<template>
  <footer class="footer">
    <div class="container">© Naia & Zé {{ year }}</div>
  </footer>
</template>

<script>
export default {
    computed: {
        year () {
            return new Date().getFullYear()
        }
    }
}
</script>

<style>
.footer {
  padding: 20px 0;
  background: black;
  color: white;
}
</style>