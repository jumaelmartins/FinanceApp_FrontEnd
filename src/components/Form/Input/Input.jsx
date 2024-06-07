import Error from "../Error/Error";
import "./Input.scss";
import React from "react";

export const Input = ({
  placeholder,
  id,
  icon,
  register,
  errors,
  type,
  modifier,
  formType,
}) => {
  return (
    <>
      {formType === "addEdit" ? (
        <>
          <label htmlFor={id}>{id}</label>
          <input
            autoComplete="off"
            {...register(id)}
            className={`ipnt${modifier ? modifier : ""}`}
            type={type}
            name={id}
          />
        </>
      ) : (
        <label className="label" htmlFor={id}>
          {icon}

          <input
            autoComplete="off"
            {...register(id)}
            placeholder={placeholder}
            className={`ipnt${modifier ? modifier : ""}`}
            type={type}
            name={id}
          />
        </label>
      )}
      {errors ? <Error>{errors}</Error> : ""}
    </>
  );
};
