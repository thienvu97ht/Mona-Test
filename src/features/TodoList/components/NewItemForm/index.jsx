import { yupResolver } from "@hookform/resolvers/yup";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import InputField from "components/form-controls/InputField";
import PropTypes from "prop-types";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

NewItemForm.propTypes = {
  onSubmit: PropTypes.func,
};

const useStyles = makeStyles({
  root: {
    width: "100%",

    "& > form": {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "15px 18px 10px 15px",

      "& > div": {
        flex: 1,
        margin: 0,
      },
    },
  },
});

function NewItemForm(props) {
  const classes = useStyles();
  const { keyEvent } = props;

  const schema = yup.object().shape({
    newItem: yup.string().required("Không được để trống!"),
  });

  const form = useForm({
    defaultValues: {
      newItem: "",
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
        <InputField
          name="newItem"
          label="New Item"
          form={form}
          keyEvent={keyEvent}
        />
      </form>
    </Box>
  );
}

export default NewItemForm;
