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

<script setup>
import Input from "@/components/Input.vue";
import List from "@/components/List.vue";
import Footer from "@/components/Footer.vue";

import { computed, useStore } from "@nuxtjs/composition-api";

const store = useStore();

// stort state
const todoItems = computed(() => store.state.main.todoItems);
const editValue = computed(() => store.state.main.editValue);

console.log(todoItems);
// method
const onAdd = (value) => {
  store.dispatch("main/push", { value, done: false, isEdit: false });
};

const onAllDelete = () => {
  store.dispatch("main/allDelete");
};

const onDelete = (item) => {
  let index = todoItems.value.findIndex((el) => el.value === item.value);
  store.dispatch("main/remove", index);
};

const onCloseModal = (item) => {
  let index = todoItems.value.findIndex((el) => el.value === item.value);
  store.dispatch("main/editClose", index);
};

const onEditClick = (item) => {
  let index = todoItems.value.findIndex((el) => el.value === item.value);
  store.dispatch("main/editModal", index);
};

const onDoneClick = (item) => {
  console.log(item);
  let index = todoItems.value.findIndex((el) => el.value === item.value);
  store.dispatch("main/done", index);
};
</script>
