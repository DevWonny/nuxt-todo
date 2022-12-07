<template>
  <div>
    <ul>
      <li v-for="item in list" :key="item.length">
        {{ item.done ? "Complate" : item.value }}
        <button class="complate_button" @click="onDoneClick(item)">
          {{ item.done ? "Cancle" : "Complate" }}
        </button>
        <button class="delete_button" @click="onDelete(item)">Delete</button>
        <button class="edit_button" @click="onEditClick(item)">Edit</button>

        <edit-modal
          v-if="item.isEdit"
          :isEditModal="isEditModal"
          :item="item"
          @close="onCloseModal(item)"
        />
      </li>
    </ul>
    <slot name="none-data"></slot>
  </div>
</template>

<script setup>
import EditModal from "./EditModal.vue";
const props = defineProps({ list: { type: Array, default: () => [] } });
const emits = defineEmits(["delete", "editClose", "editClick", "done"]);
const isEditModal = false;

// methods
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
ul {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
  height: 30px;
  border-bottom: 1px solid #e0e0e0;
  line-height: 30px;
  position: relative;

  .delete_button {
    width: 50px;
    height: 25px;
    background: transparent;
    border: none;
    position: absolute;
    top: 2.5px;
    right: 0;
    color: #f31060;
    cursor: pointer;
  }

  .edit_button {
    width: 50px;
    height: 25px;
    background: transparent;
    border: none;
    position: absolute;
    top: 2.5px;
    right: 60px;
    color: #909090;
    cursor: pointer;
  }

  .complate_button {
    width: 50px;
    height: 25px;
    background: transparent;
    border: none;
    position: absolute;
    top: 2.5px;
    right: 140px;
    color: #333;
    cursor: pointer;
  }

  .test {
    background: red;
  }
}
</style>
