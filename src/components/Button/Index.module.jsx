/* eslint-disable react/prop-types */
export const Button = ({ name, clickHandler, type }) => {
  return (
    <button
      onClick={clickHandler}
      type={type ? type : "button"}
      className="bg-blue-400 rounded-md px-1 py-2 min-w-8 flex justify-center"
    >
      {name}
    </button>
  );
};
