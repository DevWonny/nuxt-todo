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
// edit
import { createNamespacedHelpers } from "vuex";
import EditModal from "./EditModal.vue";
const { mapState, mapActions } = createNamespacedHelpers("main");

export default {
  props: {
    list: { type: Array, default: () => [] },
  },
  components: {
    EditModal,
  },

  computed: {
    ...mapState(["todoItems", "editValue"]),
  },

  data() {
    return {
      isEditModal: false,
      index: 0,
    };
  },

  methods: {
    ...mapActions(["remove", "edit", "editModal", "editClose", "done"]),

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
