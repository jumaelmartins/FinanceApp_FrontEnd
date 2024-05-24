import Error from "../Error/Error";
import "./Input.scss";
import React from "react";

export const Input = ({ placeholder, id, icon, register, errors,type }) => {
  return (
    <>
      <label className="label" htmlFor={id}>
        {icon}

        <input
          autoComplete="off"
          {...register(id)}
          placeholder={placeholder}
          className="ipnt"
          type={type}
        />
      </label>
      {errors ? <Error>{errors}</Error> : ""}
    </>
  );
};
