import { AddBox, DeleteForever } from "@mui/icons-material";
import { IconButton, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import PropTypes from "prop-types";
import React, { useState } from "react";
import NewItemForm from "../NewItemForm";
import TodoItem from "../TodoItem";

CardItem.propTypes = {
  todo: PropTypes.object,
  onRemoveTodo: PropTypes.func,
  onAddItem: PropTypes.func,
  onRemoveItem: PropTypes.func,
};

const useStyles = makeStyles({
  root: {},

  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    backgroundColor: "#1976d2",
    padding: "10px",

    "& > p": {
      color: "#fff",
    },

    "& button": {
      color: "#fff",
    },
  },

  body: {
    backgroundColor: "#fff",
    height: "400px",
  },
});

function CardItem({ todo, onRemoveTodo, onAddItem, onRemoveItem }) {
  const classes = useStyles();
  const [isNewTodo, setIsNewTodo] = useState(false);

  const handleOpenAddForm = () => {
    setIsNewTodo(true);
  };

  const handleOnSubmit = (values) => {
    setIsNewTodo(false);

    if (onAddItem) {
      const newItem = {
        idTodo: todo.id,
        itemName: values.newItem,
      };
      onAddItem(newItem);
    }
  };

  const handeleRemoveItem = (values) => {
    const data = {
      idTodo: todo.id,
      idItem: values,
    };

    if (onRemoveItem) {
      onRemoveItem(data);
    }
  };

  return (
    <Box className={classes.root}>
      <Box className={classes.header}>
        <Typography>{todo.name}</Typography>
        <Box className={classes.button}>
          <IconButton title="Add" onClick={handleOpenAddForm}>
            <AddBox />
          </IconButton>
          <IconButton title="Delete" onClick={() => onRemoveTodo(todo.id)}>
            <DeleteForever />
          </IconButton>
        </Box>
      </Box>
      <Box className={classes.body}>
        {isNewTodo && <NewItemForm onSubmit={handleOnSubmit} />}
        {todo?.openItems?.map((item) => (
          <TodoItem
            key={item.id}
            todoItem={item}
            onRemoveItem={handeleRemoveItem}
          />
        ))}
      </Box>
    </Box>
  );
}

export default CardItem;
