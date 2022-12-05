<template>
  <div>
    <Input @add="onAdd"></Input>
    <List :list="todoItems"></List>
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
    ...mapState(["todoItems"]),
  },
  methods: {
    ...mapActions(["push", "allDelete"]),
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
  },
};
</script>
