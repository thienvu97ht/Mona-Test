import React from "react";
import PropTypes from "prop-types";
import TextField from "@mui/material/TextField";
import { Controller } from "react-hook-form";
import { makeStyles } from "@mui/styles";

InputField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  placeholder: PropTypes.string,
  white: PropTypes.bool,
  disable: PropTypes.bool,
};

const useStyles = makeStyles({
  white: {
    "& input": {
      color: "white",
    },

    "& label.Mui-focused, & label": {
      color: "white",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "white",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white",
      },
      "&:hover fieldset": {
        borderColor: "white",
      },
      "&.Mui-focused fieldset": {
        borderColor: "white",
      },
    },
  },

  null: {},
});

function InputField(props) {
  const { form, name, label, disable, white, keyEvent } = props;
  const { control } = form;
  const classes = useStyles();
  const keyboardEvents = (e) => {
    if (keyEvent) {
      keyEvent(e.key);
    }
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, onBlur, value, name },
        fieldState: { invalid, error },
      }) => (
        <TextField
          margin="normal"
          variant="outlined"
          fullWidth
          label={label}
          error={invalid}
          helperText={error?.message}
          onChange={onChange}
          onBlur={onBlur}
          name={name}
          value={value}
          disabled={disable}
          size="small"
          className={white ? classes.white : classes.null}
          onKeyDown={keyboardEvents}
        />
      )}></Controller>
  );
}

export default InputField;
