const state = () => ({
  todoItems: [],
  editValue: "",
});

// getters
const getters = {
  getEditValue(state) {
    return state.editValue;
  },
};

// mutaions
const mutations = {
  // create
  onPush(state, payload) {
    state.todoItems = [...state.todoItems, payload];
  },

  // delete
  onRemove(state, index) {
    state.todoItems = [
      ...state.todoItems.filter((item, _index) => _index !== index),
    ];
  },

  // edit
  onEdit(state, payload) {
    if (!state.editValue) {
      alert("수정할 내용을 입력해주세요!");
      return;
    }
    payload.value = state.editValue;
    state.editValue = "";
  },

  // edit value 수정
  onUpdateValue(state, text) {
    if (!text) {
      state.editValue = "";
      return;
    }
    state.editValue = text;
  },

  // edit modal
  onEditModal(state, index) {
    state.todoItems.map((item, _index) => {
      if (index === _index) {
        item.isEdit = true;
      }
    });
  },

  onEditClose(state, index) {
    state.todoItems.map((item, _index) => {
      if (index === _index) {
        item.isEdit = false;
      }
    });
  },

  onDone(state, index) {
    state.todoItems.map((item, _index) => {
      if (index === _index) {
        item.done = !item.done;
      }
    });
  },

  onAllDelete(state) {
    state.todoItems = [];
  },
};

// actions
const actions = {
  push({ commit, dispatch }, payload) {
    console.log("push actions!");
    commit("onPush", payload);
  },

  remove({ commit, dispatch }, index) {
    console.log("remove actions!");
    commit("onRemove", index);
  },

  edit({ commit, dispatch }, payload) {
    console.log("edit actions!");
    commit("onEdit", payload);
  },

  updateValue({ commit, dispatch }, text) {
    console.log("update Value!");
    if (!text) {
      commit("onUpdateValue");
      return;
    }
    commit("onUpdateValue", text);
  },

  editModal({ commit, dispatch }, index) {
    console.log("editModal!");
    commit("onEditModal", index);
  },

  editClose({ commit, dispatch }, index) {
    console.log("modal close!");
    commit("onEditClose", index);
  },

  done({ commit, dispath }, index) {
    console.log("done!");
    commit("onDone", index);
  },

  allDelete({ commit, dispatch }) {
    console.log("All Delete!");
    commit("onAllDelete");
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
