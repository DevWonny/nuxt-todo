<template>
  <div class="list_wrap">
    <list-basic
      :list="list"
      @delete="onDelete"
      @editClose="onCloseModal"
      @editClick="onEditClick"
      @done="onDoneClick"
    >
      <template #none-data v-if="list.length === 0">
        <p class="none-data">None Data</p>
      </template>
    </list-basic>
  </div>
</template>

<script setup>
import ListBasic from "./ListBasic.vue";

const props = defineProps({ list: { type: Array, default: () => [] } });
const emits = defineEmits(["delete", "editClose", "editClick", "done"]);

const onDelete = (item) => {
  emits("delete", item);
};
const onCloseModal = (item) => {
  emits("editClose", item);
};
const onEditClick = (item) => {
  emits("editClick", item);
};
const onDoneClick = (item) => {
  emits("done", item);
};
</script>

<style lang="scss" scoped>
.list_wrap {
  width: 100%;
  margin-top: 50px;

  .none-data {
    text-align: center;
  }
}
</style>
