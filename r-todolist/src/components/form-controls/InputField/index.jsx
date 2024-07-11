import { TextField } from "@material-ui/core";
import React from "react";
import PropTypes from "prop-types";
import { Controller } from "react-hook-form";

InputField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disabled: PropTypes.bool,
};

function InputField(props) {
  const { form, name, label, disabled } = props;
    //const {errors, formState} = form;
    const { errors, touchedFields } = form.formState;
    const hasError = touchedFields[name] && errors[name];
    
  return (
    <Controller
      name={name}
      control={form.control}
      defaultValue=""
      render={({ field }) => (
        <TextField
          {...field}
          label={label}
          error={!!hasError} // Check if there's an error
          helperText={hasError ? errors[name].message : ""} // Show error message
          fullWidth
        />
      )}
    />
  );
}

export default InputField;
