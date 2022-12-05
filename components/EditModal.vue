<template>
  <div class="modal_wrap">
    <p>Edit Modal</p>

    <input
      type="text"
      class="edit_modal_input"
      :value="editValue"
      @input="updateValue"
    />

    <div class="button_wrap">
      <button class="edit_button" @click="onEdit">Edit</button>
      <button class="edit_button" @click="onClose">Close</button>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions } = createNamespacedHelpers("main");

export default {
  props: ["todo"],

  computed: {
    ...mapState(["editValue"]),
  },

  methods: {
    ...mapActions(["edit", "updateValue"]),

    onUpdateValue(e) {
      this.updateValue(e.target.value);
    },

    onEdit() {
      this.edit(this.todo);
      this.$emit("close");
    },

    onClose() {
      this.updateValue("");
      this.$emit("close");
    },
  },
};
</script>

<style lang="scss" scoped>
.modal_wrap {
  width: 500px;
  height: 250px;
  border-radius: 20px;
  background: #e0e0e0;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: calc(50% - 125px);
  left: calc(50% - 250px);

  p {
    font-size: 20px;
    margin: 20px 0 0 0;
  }

  .button_wrap {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .edit_modal_input {
    height: 40px;
    border-radius: 10px;
    margin-top: 50px;
  }

  .edit_button {
    width: 100px;
    height: 40px;
    background: transparent;
    border: 1px solid #000;
    margin-top: 50px;
    margin-left: 30px;
    margin-right: 30px;
    cursor: pointer;
  }
}
</style>
