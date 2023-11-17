import { useState, useEffect } from "react"

export default function Login() {
  const initialValues = { email: "", password: "" }
  const [loginValues, setLoginValues] = useState(initialValues)
  const [formErrors, setFormErrors] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setLoginValues({ ...loginValues, [name]: value })
  }

  const handleLoginForm = (e) => {
    e.preventDefault()
    setFormErrors(validate(loginValues))
    setIsSubmit(true)
  }

  useEffect(() => {
    // console.log(formErrors)
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(loginValues)
    }
  }, [formErrors, isSubmit, loginValues])

  const validate = (values) => {
    const errors = {}
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i

    if (!values.email) {
      errors.email = "Email is required!"
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!"
    }

    if (!values.password) {
      errors.password = "Password is required"
    }
    return errors
  }


  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <pre>{JSON.stringify(loginValues, undefined, 2)}</pre>

      <form
        onSubmit={handleLoginForm}
        className="w-3/5"
      >
        <h1 className="font-bold text-xl mb-4">Sign In</h1>
        <div className="">
          <div className="mb-4 flex flex-col gap-2">
            <label>Email</label>
            <input
              className="shadow appearance-none border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline focus:shadow-outline"
              type="text"
              name="email"
              placeholder="Email"
              value={loginValues.email}
              onChange={handleChange}
            />
            <p className="text-red-500 font-normal italic">{formErrors.email}</p>
          </div>
          <div className="mb-4 flex flex-col gap-2">
            <label>Password</label>
            <input
              className="shadow appearance-none border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline focus:shadow-outline"
              type="password"
              name="password"
              placeholder="Password"
              value={loginValues.password}
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
