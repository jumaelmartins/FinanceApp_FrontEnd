import "./Input.scss"

export const Input = ({ placeholder, id, icon }) => {
  return (
    <>
      <label className="label" htmlFor={id}>
        {icon}
        <input id={id} placeholder={placeholder} className="ipnt" />
      </label>
    </>
  );
};
