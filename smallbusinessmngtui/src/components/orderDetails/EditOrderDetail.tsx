import { useState } from "react"
import { IoMdCloseCircle } from "react-icons/io"
import axios from 'axios'

type EditOrderDetailsProps = {
  showModal: boolean
  closeModal: () => void
  orderDetailId: number
  distributor: string
  product: string
  packaging: string
  orderHeader: string
  orderQuantity: number
  pricePerOrder: number
  totalPrice: number
}

const baseURL = "http://13.51.167.116:8082/order-details/"

export default function EditOrderDetails(props: EditOrderDetailsProps) {
  const orderDetailId: number = props.orderDetailId
  const [distributor, setDistributor] = useState("")
  const [product, setProduct] = useState("")
  const [packaging, setPackaging] = useState("")
  const [orderHeader, setOrderHeader] = useState("")
  const [orderQuantity, setOrderQuantity] = useState("")
  const [pricePerOrder, setPricePerOrder] = useState("")
  const [totalPrice, setTotalPrice] = useState("")

  const submitUserEdits = () => {
    // e.preventDefault()

    axios.put(`${baseURL}/${orderDetailId}`, {
      "distributor": distributor,
      "product": product,
      "packaging": packaging,
      "orderHeader": orderHeader,
      "orderQuantity": orderQuantity,
      "pricePerOrder": pricePerOrder,
      "totalPrice": totalPrice,
    }).then(() => {

    })
  }

  return props.showModal ? (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-gray-500/400 backdrop-blur-sm">
      <div className="bg-white w-full p-4 mx-width overflow-hidden shadow-lg border-[1px] max-w-xl rounded-2xl">
        <div className="py-8 px-4 rounded-lg">
          <div className="mb-10 flex justify-between cursor-pointer">
            <h1 className="font-bold text-lg uppercase text-left">
              Edit Order
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
                  Distributor
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-black-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="distributor"
                  type="text"
                  defaultValue={props.distributor}
                  onChange={(e) => { setDistributor(e.target.value) }}
                >
                </input>
              </div>
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block capitalize tracking-wide text-gray-700 text-md font-bold mb-2">
                  Product
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-black-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="product"
                  type="text"
                  defaultValue={props.product}
                  onChange={(e) => { setProduct(e.target.value) }}
                >
                </input>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block capitalize tracking-wide text-gray-700 text-md font-bold mb-2">
                  Packaging
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-black-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="packaging"
                  type="string"
                  defaultValue={props.packaging}
                  onChange={(e) => { setPackaging(e.target.value) }}
                >
                </input>
              </div>
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block capitalize tracking-wide text-gray-700 text-md font-bold mb-2">
                  Order Header
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-black-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="orderHeader"
                  type="orderHeader"
                  defaultValue={props.orderHeader}
                  onChange={(e) => { setOrderHeader(e.target.value) }}
                >
                </input>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block capitalize tracking-wide text-gray-700 text-md font-bold mb-2">
                  Quantity
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-black-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="orderQuantity"
                  type="string"
                  defaultValue={props.orderQuantity}
                  onChange={(e) => { setOrderQuantity(e.target.value) }}
                >
                </input>
              </div>
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block capitalize tracking-wide text-gray-700 text-md font-bold mb-2">
                  Price Per Unit
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-black-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="pricePerOrder"
                  type="text"
                  defaultValue={props.pricePerOrder}
                  onChange={(e) => { setPricePerOrder(e.target.value) }}
                >
                </input>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block capitalize tracking-wide text-gray-700 text-md font-bold mb-2">
                  totalPrice
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-black-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="totalPrice"
                  type="string"
                  defaultValue={props.totalPrice}
                  onChange={(e) => { setTotalPrice(e.target.value) }}
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
