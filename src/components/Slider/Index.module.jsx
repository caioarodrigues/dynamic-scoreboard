/* eslint-disable react/prop-types */
import { useState } from "react";

export const Slider = ({ children, style }) => {
  const [horizontal, setHorizontal] = useState(false);
  const toggleHorizontalView = () => setHorizontal((state) => !state);

  return (
    <div className="bg-white p-2 rounded-md mt-1 md:mt-0 md:bg-transparent">
      <div className="flex items-center gap-2 my-1 md:hidden">
        <input
          type="checkbox"
          name="toggle-horizontal-view"
          id=""
          className="h-4 w-4"
          onClick={toggleHorizontalView}
        />
        <label htmlFor="toggle-horizontal-view">Toggle horizontal view</label>
      </div>

      <div
        className={`flex gap-2 overflow-scroll md:overflow-hidden md:flex-wrap md:flex-row 
          md:justify-end ${horizontal ? "flex-row" : "flex-col"} ${style}`}
      >
        {children}
      </div>
    </div>
  );
};
