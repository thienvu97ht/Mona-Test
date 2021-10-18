import { yupResolver } from "@hookform/resolvers/yup";
import { Save } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import { makeStyles } from "@mui/styles";
import InputField from "components/form-controls/InputField";
import PropTypes from "prop-types";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

RenameForm.propTypes = {
  onSubmit: PropTypes.func,
};

const useStyles = makeStyles({
  root: {
    width: "100%",

    "& > form": {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "15px 10px 10px 15px",

      "& > div": {
        flex: 1,
        margin: 0,
      },
    },
  },
});

function RenameForm(props) {
  const classes = useStyles();
  const { todoName } = props;

  const schema = yup.object().shape({
    name: yup.string().required("Không được để trống!"),
  });

  const form = useForm({
    defaultValues: {
      name: todoName,
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
        <InputField name="name" label="New Name" form={form} white={true} />

        <IconButton type="submit">
          <Save />
        </IconButton>
      </form>
    </Box>
  );
}

export default RenameForm;
