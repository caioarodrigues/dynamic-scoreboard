/* eslint-disable react/prop-types */
export const Button = ({ name, clickHandler, type }) => {
  return (
    <button
      onClick={clickHandler}
      type={type ? type : "button"}
      className="bg-blue-300 rounded-md px-1 py-2"
    >
      {name}
    </button>
  );
};
