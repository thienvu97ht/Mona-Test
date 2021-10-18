import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import NewTodoFeature from "features/NewTodo";
import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    "& > header": {
      backgroundColor: "#fff",
      height: "100px",
    },
  },

  bar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
  },
});

export default function Header() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.bar}>
          <Typography variant="h2" className={classes.title} color="primary">
            DASHBOARD
          </Typography>

          <NewTodoFeature />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
