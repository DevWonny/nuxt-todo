<template>
  <div>
    <div class="button-wrap">
      <button
        class="page-button"
        v-for="button in buttonList"
        :key="button._index"
        :class="{ active: routeName.includes(button.name) }"
        @click="onClick(button)"
      >
        {{ button.name }}
      </button>
    </div>

    <nuxt-child></nuxt-child>
  </div>
</template>

<script setup>
import { useRouter, useRoute, watch, ref } from "@nuxtjs/composition-api";

const router = useRouter();
const route = useRoute();

// state
const buttonList = [
  { name: "first", _index: 1, active: false },
  { name: "second", _index: 2, active: false },
  { name: "third", _index: 3, active: false },
];

const routeName = ref(route.value.name);

watch(route, (n) => {
  routeName.value = n.name;
});

// methods
const onClick = (item) => {
  router.replace({ name: `viewPage-${item.name}` });
};
</script>

<style lang="scss">
.button-wrap {
  height: 50px;
  position: relative;

  .page-button {
    position: relative;
    border: none;
    background: transparent;
    top: calc(25%);
    margin-right: 25px;
    cursor: pointer;
  }
  .active {
    border-bottom: 2px solid #25af38;
  }
}
</style>
