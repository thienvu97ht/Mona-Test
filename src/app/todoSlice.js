import uniqid from "uniqid";

const { createSlice } = require("@reduxjs/toolkit");

const todoSlide = createSlice({
  name: "todo",
  initialState: {
    todoList: [
      {
        id: 1,
        name: "Movies",
        openItems: [
          {
            id: 1,
            status: true,
            itemName: "Interstellar",
          },
          {
            id: 2,
            status: false,
            itemName: "End Game",
          },
        ],
      },
      {
        id: 2,
        name: "Movies",
        openItems: [
          {
            id: 1,
            status: true,
            itemName: "Interstellar",
          },
          {
            id: 2,
            status: false,
            itemName: "End Game",
          },
        ],
      },
    ],
  },

  reducers: {
    addTodo(state, action) {
      state.todoList.push(action.payload);
    },

    removeTodo(state, action) {
      const index = state.todoList.findIndex((x) => x.id === action.payload);
      state.todoList.splice(index, 1);
    },

    addItem(state, action) {
      const index = state.todoList.findIndex(
        (x) => x.id === action.payload.idTodo
      );

      const newItem = {
        id: uniqid(),
        status: false,
        itemName: action.payload.itemName,
      };
      state.todoList[index].openItems.push(newItem);
    },

    removeItem(state, action) {
      const indexTodo = state.todoList.findIndex(
        (x) => x.id === action.payload.idTodo
      );

      const indexItem = state.todoList[indexTodo].openItems.findIndex(
        (x) => x.id === action.payload.idItem
      );

      state.todoList[indexTodo].openItems.splice(indexItem, 1);
    },

    updateItem(state, action) {
      const indexTodo = state.todoList.findIndex(
        (x) => x.id === action.payload.idTodo
      );

      const indexItem = state.todoList[indexTodo].openItems.findIndex(
        (x) => x.id === action.payload.idItem
      );

      state.todoList[indexTodo].openItems[indexItem].status =
        !state.todoList[indexTodo].openItems[indexItem].status;
    },
  },
});

const { actions, reducer } = todoSlide;
export const { addTodo, removeTodo, addItem, removeItem, updateItem } = actions;
export default reducer;
