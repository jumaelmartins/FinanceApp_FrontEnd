import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const ValidateForm = ({ formType }) => {
  const schema = yup
    .object({
      username:
        formType === "userFormSignUp" || formType === "userFormEdit" 
          ? yup.string().required("Campo Username é Obrigatorio")
          : yup.string(),
      email:
        formType === "userForm"
          ? yup
              .string()
              .required("Campo Email é Obigatorio")
              .email("Informe um email valido")
          : yup.string(),
      password:
        formType === "userForm"
          ? yup.string().required("Campo Senha é Obrigatorio")
          : yup.string(),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (data) => {
    const { response } = await request(
      Api.CreateUser(data).url,
      Api.CreateUser(data).options
    );
    if (response.ok) userLogin(data);
  };

  return <div>ValidateForm</div>;
};

export default ValidateForm;
