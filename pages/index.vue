<template>
  <div>
    <Input @add="onAdd" />
    <List
      :list="todoItems"
      @delete="onDelete"
      @editClose="onCloseModal"
      @editClick="onEditClick"
      @done="onDoneClick"
    >
    </List>
    <Footer @allDelete="onAllDelete" :list="todoItems" />
    <button @click="onMove">About</button>
    <button @click="onMoveChild">nuxt-child Test</button>
    <button @click="test">Click</button>
  </div>
</template>

<script setup>
import Input from "@/components/Input.vue";
import List from "@/components/List.vue";
import Footer from "@/components/Footer.vue";

import {
  computed,
  useStore,
  useRouter,
  useContext,
} from "@nuxtjs/composition-api";

// store, router
const store = useStore();
const router = useRouter();
const { $axios } = useContext();

console.log(useContext());
// state
const todoItems = computed(() => store.state.main.todoItems);
const editValue = computed(() => store.state.main.editValue);

// method
const test = async () => {
  const res = await $axios.$get("https://jsonplaceholder.typicode.com/todos/1");

  console.log(res);
};
const onMove = () => {
  router.push("/about");
};

const onMoveChild = () => {
  router.push("/viewPage");
};

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
  console.log(item);
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
