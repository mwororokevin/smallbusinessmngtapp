import { useState, useEffect } from "react"
import axios from "axios"
import { DataTable } from "./data-table"
import AddNewUser from "./AddNewOrderDetail"
import EditUser from "./EditOrderDetail"
import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"
import { Button } from "../../@/components/ui/button"
import { Checkbox } from "../../@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../@/components/ui/dropdown-menu"


const baseURL = "http://13.51.167.116:8082/order-details/"

export type OrderDetails = {
  orderId: number
  distributor: string
  product: string
  packaging: string
  orderHeader: string
  orderQuantity: number
  pricePerOrder: number
  totalPrice: number
  creationDate: Date
  updateDate: Date
}

export default function OrdersPage() {
  const [userJSONData, setUserJSONData] = useState([])


  const [orderDetailId, setOrderDetailId] = useState(0)
  const [distributor, setDistributor] = useState("")
  const [product, setProduct] = useState("")
  const [packaging, setPackaging] = useState("")
  const [orderHeader, setOrderHeader] = useState("")
  const [orderQuantity, setOrderQuantity] = useState(0)
  const [pricePerOrder, setPricePerOrder] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    loadUsers()
  }, [])

  const loadUsers = async () => {
    const result = await axios.get(baseURL)
    // { console.log(result.data) }
    setUserJSONData(result.data)
  }

  const columns: ColumnDef<OrderDetails>[] = [
    {
      id: "select",
      header: ({ table }) => (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "orderDetailId",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Id
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
    },
    {
      accessorKey: "distributor",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Distributor
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
    },
    {
      accessorKey: "otherNames",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Other Names
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
    },
    {
      accessorKey: "username",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Username
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
    },
    {
      accessorKey: "email",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Email
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
    },
    {
      id: "actions",
      cell: ({ row }) => {
        const orderDetail = row.original

        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem
                // onClick={() => navigator.clipboard.writeText(user.id)}
                // onClick={(e) => console.log(e)}
                // onClick={() => alert(row.getValue("userId"))}
                onClick={() => {
                  const baseURL = "http://13.51.167.116:8082/order-details/"
                  const userID = row.getValue("orderDetailId")
                  console.log(userID)

                  axios.delete(`${baseURL}${userID}`).then(() => {
                    alert("User Deleted")
                  })
                }
                }
              >
                Delete User
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={() => viewOrderDetail(
                  row.getValue("orderDetailId"), orderDetail.distributor,
                  orderDetail.product, orderDetail.packaging, orderDetail.orderHeader,
                  orderDetail.orderQuantity, orderDetail.pricePerOrder, orderDetail.totalPrice
                )}
              >
                View/Edit User
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu >
        )
      },
    },
  ]

  const [isNewUserModal, setNewUserModal] = useState(false)
  const [isEditUserModal, setEditUserModal] = useState(false)

  const openNewOrderDetailModal = () => {
    setNewUserModal(true)
  }

  const closeNewOrderDetailModal = () => {
    setNewUserModal(false)
  }

  const closeEditOrderDetailModal = () => {
    setEditUserModal(false)
  }

  const viewOrderDetail = (
    orderDetailId: number, distributor: string, product: string, packaging: string,
    orderHeader: string, orderQuantity: number, pricePerOrder: number, totalPrice: number) => {
    // console.log(userId, surname, otherNames, username, email)
    setOrderDetailId(orderDetailId)
    setDistributor(distributor)
    setProduct(product)
    setPackaging(packaging)
    setOrderHeader(orderHeader)
    setOrderQuantity(orderQuantity)
    setPricePerOrder(pricePerOrder)
    setTotalPrice(totalPrice)
    setEditUserModal(true)
  }

  return (
    <>
      <div className="container mx-auto py-10">
        <div>
          <button
            onClick={openNewOrderDetailModal}
            className="py-2 px-6 bg-green-700 rounded-sm text-white font-semibold tracking-wide"
          >
            Add New User
          </button>
        </div>
        <DataTable columns={columns} data={userJSONData} />

        <AddNewUser
          showModal={isNewUserModal}
          closeModal={closeNewOrderDetailModal}
        />

        <EditUser
          showModal={isEditUserModal}
          closeModal={closeEditOrderDetailModal}
          orderDetailId={orderDetailId}
          distributor={distributor}
          product={product}
          packaging={packaging}
          orderHeader={orderHeader}
          orderQuantity={orderQuantity}
          pricePerOrder={pricePerOrder}
          totalPrice={totalPrice}
        />
      </div>
    </>
  )
}