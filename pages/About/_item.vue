<template>
  <div>
    <h1>Title - {{ dynamic }}</h1>
    <button type="button" @click="onNext">next</button>
    <button type="button" @click="onPrev">prev</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dynamic: this.$route.params.id,
      queryData: this.$route.query,
    };
  },
  watch: {
    dynamic(n, o) {
      console.log("n", n);
    },
  },
  methods: {
    onNext() {
      this.dynamic += 1;
      this.$router.push({
        name: this.$route.name,
        params: { id: this.dynamic },
      });
    },
    onPrev() {
      this.dynamic -= 1;
      this.$router.push({
        name: this.$route.name,
        params: { id: this.dynamic },
      });
    },
  },
};
</script>
