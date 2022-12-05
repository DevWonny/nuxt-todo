<template>
  <div>
    <Input @add="onAdd"></Input>
    <List
      :list="todoItems"
      @delete="onDelete"
      @editClose="onCloseModal"
      @editClick="onEditClick"
      @done="onDoneClick"
    ></List>
    <Footer @allDelete="onAllDelete" :list="todoItems"></Footer>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions } = createNamespacedHelpers("main");

import Input from "@/components/Input.vue";
import List from "@/components/List.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Input,
    List,
    Footer,
  },

  computed: {
    ...mapState(["todoItems", "editValue"]),
  },

  methods: {
    ...mapActions([
      "push",
      "allDelete",
      "remove",
      "editModal",
      "editClose",
      "done",
    ]),
    onAdd(value) {
      // this.push({ value: this.listItem, done: false, isEdit: false });
      this.push({
        value,
        done: false,
        isEdit: false,
      });
    },

    onAllDelete() {
      this.allDelete();
    },

    onDelete(item) {
      let index = this.todoItems.findIndex((el) => el.value === item.value);
      this.remove(index);
    },

    onCloseModal(item) {
      let index = this.todoItems.findIndex((el) => el.value === item.value);
      this.editClose(index);
    },

    onEditClick(item) {
      let index = this.todoItems.findIndex((el) => el.value === item.value);
      this.editModal(index);
    },

    onDoneClick(item) {
      let index = this.todoItems.findIndex((el) => el.value === item.value);
      this.done(index);
    },
  },
};
</script>
