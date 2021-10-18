import { addTodo } from "app/todoSlice";
import React from "react";
import { useDispatch } from "react-redux";
import NewTodoForm from "./Components/NewTodoForm";
import uniqid from "uniqid";

function NewTodoFeature(props) {
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    const newTodo = {
      id: uniqid(),
      name: values.todo,
      openItems: [],
    };

    const action = addTodo(newTodo);
    dispatch(action);
  };

  return (
    <div>
      <NewTodoForm onSubmit={handleSubmit} />
    </div>
  );
}

export default NewTodoFeature;
