import React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import { Checkbox, IconButton, Typography } from "@mui/material";
import { HighlightOff } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";

TodoItem.propTypes = {
  todoItem: PropTypes.object,
  onRemoveItem: PropTypes.func,
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

function TodoItem({ todoItem, onRemoveItem }) {
  const classes = useStyles();

  const isChecked = !!todoItem.status;

  return (
    <Box className={classes.root}>
      <Box>
        <Checkbox checked={isChecked} />
        {isChecked ? (
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
