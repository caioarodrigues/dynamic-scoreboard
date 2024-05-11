/* eslint-disable react/prop-types */
export const Box = ({ children }) => {
  return (
    <div className="bg-gray-500 h-full flex flex-col overflow-auto">
      <div className="flex flex-col self-center w-11/12 md:gap-2 md:flex-row">
        {children}
      </div>
    </div>
  );
};
