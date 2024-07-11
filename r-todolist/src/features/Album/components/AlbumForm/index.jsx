import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import InputField from "components/form-controls/InputField";

AlbumForm.propTypes = {
  onSubmit: PropTypes.func,
};

function AlbumForm(props) {
  const schema = yup.object({
    title: yup.string()
    .required('PLease enter title')
    .min(5, 'Title is too short')
  }).required();

  const form = useForm({
    defaultValues: {
      title: "",
    },
    resolver : yupResolver(schema),
  });

  const handleSubmit = (values) => {
    console.log("ToDo Form: ", values);
    const { onSubmit} = props;
    if(onSubmit){
      onSubmit(values);
    }

    form.reset();
  };

  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      <InputField name="title" lable="Todo" form={form} />
    </form>
  );
}

export default AlbumForm;
