import { IoMdCloseCircle } from "react-icons/io"
import { useState } from "react"
import axios from "axios"

type AddNewSupplierProps = {
  showModal: boolean
  closeModal: () => void
}

const baseURL = "http://localhost:8082/suppliers"

export default function AddNewSupplier(props: AddNewSupplierProps) {
  const [supplierName, setSupplierName] = useState("")
  const [supplierContactPerson, setSupplierContactPerson] = useState("")
  const [supplierPhoneNumber1, setSupplierPhoneNumber1] = useState("")
  const [supplierPhoneNumber2, setSupplierPhoneNumber2] = useState("")

  const submitNewSupplier = () => {
    axios.post(`${baseURL}`, {
      "supplierName": supplierName,
      "supplierContactPerson": supplierContactPerson,
      "supplierPhoneNumber1": supplierPhoneNumber1,
      "supplierPhoneNumber2": supplierPhoneNumber2
    }).then(() => {

    })

    // console.log(postResponse)
  }

  return props.showModal ? (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-gray-500/400 backdrop-blur-sm">
      <div className="bg-white w-full p-4 mx-width overflow-hidden shadow-lg border-[1px] max-w-xl rounded-2xl">
        <div className="py-8 px-4 rounded-lg">
          <div className="mb-10 flex justify-between cursor-pointer">
            <h1 className="font-bold text-lg uppercase text-left">
              Add New Supplier
            </h1>
            <IoMdCloseCircle
              onClick={props.closeModal}
              className="text-3xl text-red-600"
            />
          </div>
          <form
            onSubmit={() => {
              submitNewSupplier()
            }}
          >
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block capitalize tracking-wide text-gray-700 text-md font-bold mb-2">
                  Supplier
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-black-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="supplierName"
                  type="text"
                  value={supplierName}
                  placeholder="Supplier Name"
                  onChange={(e) => { setSupplierName(e.target.value) }}
                >
                </input>
              </div>
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block capitalize tracking-wide text-gray-700 text-md font-bold mb-2">
                  Contact Person
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-black-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="supplierContactPerson"
                  type="text"
                  value={supplierContactPerson}
                  placeholder="Contact Person"
                  onChange={(e) => { setSupplierContactPerson(e.target.value) }}
                >
                </input>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block capitalize tracking-wide text-gray-700 text-md font-bold mb-2">
                  Contact Number
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-black-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="supplierPhoneNumber1"
                  type="string"
                  value={supplierPhoneNumber1}
                  placeholder="Contact Number"
                  onChange={(e) => { setSupplierPhoneNumber1(e.target.value) }}
                >
                </input>
              </div>
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block capitalize tracking-wide text-gray-700 text-md font-bold mb-2">
                  Alt. Contact Number
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-black-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="supplierPhoneNumber2"
                  type="string"
                  value={supplierPhoneNumber2}
                  placeholder="Alternate Contact Number"
                  onChange={(e) => { setSupplierPhoneNumber2(e.target.value) }}
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
