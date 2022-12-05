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

        <EditModal
          v-if="todo.isEdit"
          :isEditModal="isEditModal"
          :todo="todo"
          @close="onCloseModal(todo)"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import EditModal from "./EditModal.vue";

export default {
  props: {
    list: { type: Array, default: () => [] },
  },
  components: {
    EditModal,
  },

  data() {
    return {
      isEditModal: false,
      index: 0,
    };
  },

  methods: {
    onDelete(item) {
      this.$emit("delete", item);
    },

    onCloseModal(item) {
      this.$emit("editClose", item);
    },

    onEditClick(item) {
      this.$emit("editClick", item);
    },

    onDoneClick(item) {
      this.$emit("done", item);
    },
  },
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
