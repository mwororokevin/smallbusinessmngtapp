import { useState } from "react"
import { IoMdCloseCircle } from "react-icons/io"
import axios from 'axios'

type EditUserProps = {
  showModal: boolean
  closeModal: () => void
  userId: number
  surname: string
  otherNames: string
  username: string
  email: string
}

const baseURL = "http://localhost:8082/users/"

export default function EditUser(props: EditUserProps) {
  const userId: number = props.userId
  const [surname, setSurname] = useState("")
  const [otherNames, setOtherNames] = useState("")
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [putResponse, setPutResponse] = useState("")

  const submitUserEdits = () => {
    // e.preventDefault()

    axios.put(`${baseURL}${userId}`, {
      "surname": surname,
      "otherNames": otherNames,
      "username": username,
      "email": email
    }).then((response) => {
      setPutResponse(response.data)
    })

    console.log(putResponse)
  }

  return props.showModal ? (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-gray-500/400 backdrop-blur-sm">
      <div className="bg-white w-full p-4 mx-width overflow-hidden shadow-lg border-[1px] max-w-xl rounded-2xl">
        <div className="py-8 px-4 rounded-lg">
          <div className="mb-10 flex justify-between cursor-pointer">
            <h1 className="font-bold text-lg uppercase text-left">
              Edit User
            </h1>
            <IoMdCloseCircle
              onClick={props.closeModal}
              className="text-3xl text-red-600"
            />
          </div>
          <form
            onSubmit={() => {
              submitUserEdits()
            }}
          >
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block capitalize tracking-wide text-gray-700 text-md font-bold mb-2">
                  Surname
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-black-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="surname"
                  type="text"
                  defaultValue={props.surname}
                  onChange={(e) => { setSurname(e.target.value) }}
                >
                </input>
              </div>
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block capitalize tracking-wide text-gray-700 text-md font-bold mb-2">
                  Other Names
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-black-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="otherNames"
                  type="text"
                  defaultValue={props.otherNames}
                  onChange={(e) => { setOtherNames(e.target.value) }}
                >
                </input>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block capitalize tracking-wide text-gray-700 text-md font-bold mb-2">
                  Username
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-black-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="username"
                  type="string"
                  defaultValue={props.username}
                  onChange={(e) => { setUsername(e.target.value) }}
                >
                </input>
              </div>
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block capitalize tracking-wide text-gray-700 text-md font-bold mb-2">
                  Email Address
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-black-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="email"
                  type="email"
                  defaultValue={props.email}
                  onChange={(e) => { setEmail(e.target.value) }}
                >
                </input>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <button className="border-[2px] py-3 px-6 rounded-lg font-bold tracking-normal">Save</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  ) : null
}
