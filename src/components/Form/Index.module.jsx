/* eslint-disable react/prop-types */
export const Form = ({ children }) => {
  return (
    <form className="rounded-md w-11/12 flex flex-col gap-1">
      {children}
    </form>
  )
}