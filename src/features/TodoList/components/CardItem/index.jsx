import { AddBox, DeleteForever } from "@mui/icons-material";
import { IconButton, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import React from "react";

CardItem.propTypes = {};

const useStyles = makeStyles({
  root: {
    marginTop: "30px",
  },

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
});

function CardItem(props) {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.header}>
        <Typography>Movies to watch</Typography>

        <Box className={classes.button}>
          <IconButton title="Add">
            <AddBox />
          </IconButton>
          <IconButton title="Delete">
            <DeleteForever />
          </IconButton>
        </Box>
      </Box>
      <Box className={classes.body}></Box>
    </Box>
  );
}

export default CardItem;
