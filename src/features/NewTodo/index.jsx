import React from "react";
import NewTodoForm from "./Components/NewTodoForm";

function NewTodoFeature(props) {
  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <div>
      <NewTodoForm onSubmit={handleSubmit} />
    </div>
  );
}

export default NewTodoFeature;
