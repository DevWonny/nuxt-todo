<template>
  <!-- list 입력 input -->
  <div class="input_div">
    <input type="text" v-model="listItem" @keypress.enter="onAdd" />
    <div @click="onAdd" class="add_button">add</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listItem: "",
    };
  },
  methods: {
    onAdd() {
      this.$emit("add", this.listItem);
      this.listItem = "";
    },
  },
};
</script>

<style lang="scss">
.input_div {
  width: 100%;
  height: 40px;
  display: flex;
}
input {
  width: 80%;
  height: 100%;
  border-radius: 10px 0 0 10px;
  border: 1px solid #000;
  box-sizing: border-box;
  outline: none;
  font-size: 20px;
}
.add_button {
  width: 20%;
  height: 100%;
  background: #000;
  color: #fff;
  text-align: center;
  line-height: 40px;
  cursor: pointer;
  border-radius: 0 10px 10px 0;
}
</style>
