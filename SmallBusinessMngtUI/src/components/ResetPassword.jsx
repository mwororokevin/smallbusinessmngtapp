import { useState, useEffect } from "react"

export default function ResetPassword() {
  const initialValues = { oldPassword: "", newPassword: "", repeatPassword: "" }
  const [resetValues, setResetValues] = useState(initialValues)
  const [formErrors, setFormErrors] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setResetValues({ ...resetValues, [name]: value })
  }

  const handlePasswordReset = (e) => {
    e.preventDefault()
    setFormErrors(validatePasswordResetForm(resetValues))
    setIsSubmitted(true)
  }

  useEffect(() => {
    // console.log(formErrors)
    if (Object.keys(formErrors).length === 0 && isSubmitted) {
      // console.log(resetValues)
    }
  }, [formErrors, isSubmitted, resetValues])

  const validatePasswordResetForm = (values) => {
    const errors = {}

    if (!values.oldPassword) {
      errors.password = "The current Password is required"
    }

    if (!values.newPassword) {
      errors.password = "Password is required"
    } else if (values.newPassord.length < 8) {
      errors.password = "The password needs to be atleast 8 characters long."
    }

    if (!values.repeatPassword) {
      errors.password = "Password is required"
    } else if (values.newPassord != '' && values.repeatPassword != '') {
      if (values.newPassord != values.repeatPassword) {
        errors.password = "The passwords are not the same."
      }
    }

    return errors
  }

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <form
        onSubmit={handlePasswordReset}
        className="w-3/5"
      >
        <h1 className="font-bold text-xl mb-4">Sign In</h1>
        <div className="">
          <div className="mb-4 flex flex-col gap-2">
            <label>Old Password</label>
            <input
              className="shadow appearance-none border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline focus:shadow-outline"
              type="password"
              name="oldPassword"
              placeholder="Old Password"
              value={resetValues.oldPassword}
              onChange={handleChange}
            />
            <p className="text-red-500 font-normal italic">{formErrors.oldPassword}</p>
          </div>
          <div className="mb-4 flex flex-col gap-2">
            <label>New Password</label>
            <input
              className="shadow appearance-none border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline focus:shadow-outline"
              type="password"
              name="newPassword"
              placeholder="New Password"
              value={resetValues.newPassword}
              onChange={handleChange}
            />
            <p className="text-red-500 font-normal italic">{formErrors.password}</p>
          </div>
          <div className="mb-4 flex flex-col gap-2">
            <label>Reset Password</label>
            <input
              className="shadow appearance-none border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline focus:shadow-outline"
              type="password"
              name="repeatPassword"
              placeholder="Repeat Password"
              value={resetValues.repeatPassword}
              onChange={handleChange}
            />
            <p className="text-red-500 font-normal italic">{formErrors.password}</p>
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
        </div>
      </form>
    </div>
  )
}
