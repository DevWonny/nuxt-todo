<template>
  <div class="list_wrap">
    <ul>
      <li v-for="todo in list" :key="todo.index">
        {{ todo.done ? "Complate" : todo.value }}
        <button class="delete_button" @click="onDelete(todo)">Delete</button>
        <button class="edit_button" @click="onEditClick(todo)">Edit</button>
        <button class="complate_button" @click="onDoneClick(todo)">
          {{ todo.done ? "Cancel" : "Complate" }}
        </button>

        <edit-modal
          v-if="todo.isEdit"
          :isEditModal="isEditModal"
          :todo="todo"
          @close="onCloseModal(todo)"
        />
      </li>
    </ul>
  </div>
</template>

<script setup>
import EditModal from "./EditModal.vue";

const props = defineProps({ list: { type: Array, default: () => [] } });
const emits = defineEmits(["delete", "editClose", "editClick", "done"]);
const isEditModal = false;
const index = 0;

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
  }
}
</style>
