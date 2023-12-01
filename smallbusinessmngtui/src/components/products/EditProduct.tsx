import { useState } from "react"
import { IoMdCloseCircle } from "react-icons/io"
import axios from 'axios'

type EditSupplierProps = {
  showModal: boolean
  closeModal: () => void
  productId: number
  productName: string
}

const baseURL = "http://localhost:8082/products/"

export default function EditUser(props: EditSupplierProps) {
  const productId: number = props.productId
  const [productName, setProductName] = useState("")
  const [putResponse, setPutResponse] = useState("")

  const submitProductEdits = () => {
    // e.preventDefault()
    // console.log(productName)

    axios.put(`${baseURL}${productId}`, {
      "productName": productName
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
              Edit Product Details
            </h1>
            <IoMdCloseCircle
              onClick={props.closeModal}
              className="text-3xl text-red-600"
            />
          </div>
          <form
            onSubmit={() => {
              submitProductEdits()
            }}
          >
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block capitalize tracking-wide text-gray-700 text-md font-bold mb-2">
                  Product Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-black-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="productName"
                  type="text"
                  defaultValue={props.productName}
                  onChange={(e) => { setProductName(e.target.value) }}
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
