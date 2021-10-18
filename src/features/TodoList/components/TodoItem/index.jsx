import { HighlightOff } from "@mui/icons-material";
import { Checkbox, IconButton, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import PropTypes from "prop-types";
import React from "react";

TodoItem.propTypes = {
  todoItem: PropTypes.object,
  onRemoveItem: PropTypes.func,
  onUpdateItem: PropTypes.func,
};

const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 5px",

    "& > div": {
      display: "flex",
      alignItems: "center",
    },
  },

  isChecked: {
    color: "grey",
    textDecoration: "line-through",
  },
});

function TodoItem({ todoItem, onRemoveItem, onUpdateItem }) {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box>
        <Checkbox
          checked={todoItem.status}
          onChange={() => onUpdateItem(todoItem.id)}
        />
        {todoItem.status ? (
          <Typography className={classes.isChecked}>
            {todoItem.itemName}
          </Typography>
        ) : (
          <Typography>{todoItem.itemName}</Typography>
        )}
      </Box>
      <IconButton onClick={() => onRemoveItem(todoItem.id)}>
        <HighlightOff />
      </IconButton>
    </Box>
  );
}

export default TodoItem;
