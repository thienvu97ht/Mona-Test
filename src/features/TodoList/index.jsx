import React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import { Container, Grid } from "@mui/material";
import CardItem from "./components/CardItem";

TodoListFeature.propTypes = {};

const useStyles = makeStyles({
  root: {},
});

function TodoListFeature(props) {
  const classes = useStyles();

  const data = [
    {
      id: 1,
      name: "Movies",
      openItems: [
        {
          id: 1,
          status: 1,
          todoName: "Interstellar",
        },
        {
          id: 2,
          status: 0,
          todoName: "End Game",
        },
      ],
    },
    {
      id: 2,
      name: "Movies",
      openItems: [
        {
          id: 1,
          status: 1,
          todoName: "Interstellar",
        },
        {
          id: 2,
          status: 0,
          todoName: "End Game",
        },
      ],
    },
    {
      id: 3,
      name: "Movies",
      openItems: [
        {
          id: 1,
          status: 1,
          todoName: "Interstellar",
        },
        {
          id: 2,
          status: 0,
          todoName: "End Game",
        },
      ],
    },
    {
      id: 4,
      name: "Movies",
      openItems: [
        {
          id: 1,
          status: 1,
          todoName: "Interstellar",
        },
        {
          id: 2,
          status: 0,
          todoName: "End Game",
        },
      ],
    },
    {
      id: 5,
      name: "Movies",
      openItems: [
        {
          id: 1,
          status: 1,
          todoName: "Interstellar",
        },
        {
          id: 2,
          status: 0,
          todoName: "End Game",
        },
      ],
    },
  ];

  return (
    <Box>
      <Container>
        <Grid container spacing={4}>
          {data.map((todo) => (
            <Grid item key={todo.id} xs={6} sm={6} md={4} lg={4}>
              <CardItem todo={todo} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default TodoListFeature;
