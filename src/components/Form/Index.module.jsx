/* eslint-disable react/prop-types */
export const Form = ({ children }) => {
  return (
    <form className="rounded-md w-11/12 md:w-fit flex flex-col gap-1 md:flex-row">
      {children}
    </form>
  )
}