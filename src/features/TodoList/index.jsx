import { Container, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import { addItem, removeItem, removeTodo } from "app/todoSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CardItem from "./components/CardItem";

const useStyles = makeStyles({
  root: {
    marginTop: "30px",
    paddingBottom: "30px",
  },
});

function TodoListFeature(props) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const todoList = useSelector((state) => state.todo.todoList);

  const handleRemoveTodo = (id) => {
    const action = removeTodo(id);
    dispatch(action);
  };

  const handleAddTodo = (values) => {
    const action = addItem(values);
    dispatch(action);
  };

  const handleRemoveItem = (values) => {
    const action = removeItem(values);
    dispatch(action);
  };

  return (
    <Box className={classes.root}>
      <Container>
        <Grid container spacing={4}>
          {todoList.map((todo) => (
            <Grid item key={todo.id} xs={6} sm={6} md={4} lg={4}>
              <CardItem
                todo={todo}
                onRemoveTodo={handleRemoveTodo}
                onAddItem={handleAddTodo}
                onRemoveItem={handleRemoveItem}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default TodoListFeature;
