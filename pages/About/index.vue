<template>
  <div class="about-wrap">
    <button @click="onBack" class="back-button">Back</button>
    <list-basic :list="list">
      <template #none-data v-if="list.length === 0">
        <p class="none-data">None Data</p></template
      >
    </list-basic>
  </div>
</template>

<script setup>
import ListBasic from "../../components/ListBasic.vue";
import { computed, useStore, useRouter } from "@nuxtjs/composition-api";

const store = useStore();
const router = useRouter();

// store state
const list = computed(() => store.state.main.todoItems);

// methods
const onBack = () => {
  router.back();
};
</script>

<style lang="scss" scoped>
.about-wrap {
  width: 100%;
  margin-top: 50px;
  position: relative;

  .back-button {
    width: 50px;
    height: 25px;
    background: transparent;
    padding: 0;
    border: none;
    position: relative;
    top: 0;
    left: 0;
    margin-bottom: 25px;
    text-align: left;
    cursor: pointer;
    color: #333;
  }

  .none-data {
    text-align: center;
  }
}
</style>
