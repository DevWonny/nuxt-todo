<template>
  <div class="footer_wrap" v-if="list.length > 0">
    <button class="all_delete_button" @click="onAllDelete">All Delete</button>
  </div>
</template>

<script>
export default {
  props: {
    list: { type: Array, default: () => [] },
  },

  methods: {
    onAllDelete() {
      this.$emit("allDelete");
    },
  },
};
</script>

<style lang="scss" scoped>
.footer_wrap {
  width: 100%;
  height: 100px;
  position: relative;

  .all_delete_button {
    width: 300px;
    height: 50px;
    background: transparent;
    border: 1px solid #000;
    box-sizing: border-box;
    border-radius: 10px;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    cursor: pointer;
  }
}
</style>
