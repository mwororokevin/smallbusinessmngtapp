import { useState } from "react"
import { IoMdCloseCircle } from "react-icons/io"
import axios from 'axios'

type EditDistributorProps = {
  showModal: boolean
  closeModal: () => void
  distributorId: number
  surname: string
  otherNames: string
  phoneNumber1: string
  phoneNumber2: string
  email: string
}

const baseURL = "http://localhost:8082/distributors/"

export default function EditDistributor(props: EditDistributorProps) {
  const distributorId: number = props.distributorId
  const [surname, setSurname] = useState("")
  const [otherNames, setOtherNames] = useState("")
  const [phoneNumber1, setPhoneNumber1] = useState("")
  const [phoneNumber2, setPhoneNumber2] = useState("")
  const [email, setEmail] = useState("")
  const [putResponse, setPutResponse] = useState("")

  const submitUserEdits = () => {
    // e.preventDefault()

    axios.put(`${baseURL}${distributorId}`, {
      "surname": surname,
      "otherNames": otherNames,
      "phoneNumber1": phoneNumber1,
      "phoneNumber2": phoneNumber2,
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
                  Mobile Number
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-black-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="phoneNumber1"
                  type="text"
                  defaultValue={props.phoneNumber1}
                  onChange={(e) => { setPhoneNumber1(e.target.value) }}
                >
                </input>
              </div>
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block capitalize tracking-wide text-gray-700 text-md font-bold mb-2">
                  Alternate Mobile Number
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-black-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="phoneNumber2"
                  type="text"
                  defaultValue={props.phoneNumber2}
                  onChange={(e) => { setPhoneNumber2(e.target.value) }}
                >
                </input>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
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
