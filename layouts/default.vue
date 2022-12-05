<template>
  <div class="default_wrap">
    <Nuxt />
  </div>
</template>

<script>
export default {
  watch: {
    $route(n, o) {
      console.log(n);
    },
  },
};
</script>

<style lang="scss">
.default_wrap {
  max-width: 500px;
  height: 100vh;
  margin: auto;
}
</style>
