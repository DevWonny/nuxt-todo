<template>
  <div>
    <h1>Test - {{ dynamic.params.id }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dynamic: this.$route,
    };
  },
  watch: {
    dynamic(n, o) {
      console.log(n);
    },
  },
};
</script>
