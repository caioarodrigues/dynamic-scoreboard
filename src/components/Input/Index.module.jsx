/* eslint-disable react/prop-types */

export const Input = ({ type, placeholder, value, changeHandler }) => {
  const handleChange = (e) => {
    changeHandler(e.target.value);
  };

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      className="bg-gray-200 outline-none rounded-md px-1 py-2 text-black"
    />
  );
};