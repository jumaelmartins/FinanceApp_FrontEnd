import Error from "../Error/Error";
import "./Input.scss";

export const Input = ({ placeholder, id, icon, register, errors }) => {
  return (
    <>
      <label className="label" htmlFor={id}>
        {icon}
        <input {...register(id)} placeholder={placeholder} className="ipnt" />
      </label>
      {errors ? <Error>{errors}</Error> : ""}
    </>
  );
};
