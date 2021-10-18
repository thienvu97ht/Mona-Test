import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import InputField from "components/form-controls/InputField";
import PropTypes from "prop-types";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

NewTodoForm.propTypes = {
  onSubmit: PropTypes.func,
};

const useStyles = makeStyles({
  root: {},

  form: {
    display: "flex",

    "& > div": {
      margin: 0,
    },

    "& > button": {
      height: "56px",
      marginLeft: "10px",
    },
  },
});

function NewTodoForm(props) {
  const classes = useStyles();

  const schema = yup.object().shape({
    todo: yup.string().required("Không được để trống!"),
  });

  const form = useForm({
    defaultValues: {
      todo: "",
    },
    reValidateMode: "onSubmit",
    resolver: yupResolver(schema),
  });

  const handleSubmit = (values) => {
    const { onSubmit } = props;

    if (onSubmit) {
      onSubmit(values);
    }
  };

  return (
    <Box className={classes.root}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className={classes.form}>
        <InputField name="todo" label="New To-do List" form={form} />

        <Button type="submit" variant="outlined" size="large">
          CREATE
        </Button>
      </form>
    </Box>
  );
}

export default NewTodoForm;
