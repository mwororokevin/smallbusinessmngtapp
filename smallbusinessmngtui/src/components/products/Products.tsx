import { useState, useEffect } from "react"
import axios from "axios"
import { DataTable } from "./data-table"
import AddNewProduct from "./AddNewProduct"
import EditProduct from "./EditProduct"
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


const baseURL = "http://13.51.167.116:8082/products"

export type Products = {
  productId: number
  productName: string
  creationDate: Date
  updateDate: Date
}

export default function ProductsPage() {
  const [productJSONData, setproductJSONData] = useState([])


  const [productId, setProductId] = useState(0)
  const [productName, setProductName] = useState("")

  useEffect(() => {
    loadProducts()
  }, [])

  const loadProducts = async () => {
    const result = await axios.get(baseURL)
    // { console.log(result.data) }
    setproductJSONData(result.data)
  }

  const columns: ColumnDef<Products>[] = [
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
      accessorKey: "productId",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            id
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
    },
    {
      accessorKey: "productName",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Product
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
    },
    {
      id: "actions",
      cell: ({ row }) => {
        const product = row.original

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
                // onClick={() => alert(row.getValue("productId"))}
                onClick={() => {
                  const baseURL = "http://13.51.167.116:8082/products/"
                  const productId = row.getValue("productId")
                  console.log(productId)

                  axios.delete(`${baseURL}${productId}`).then(() => {
                    alert("Product Deleted")
                  })
                }
                }
              >
                Delete Product
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={() => viewProduct(row.getValue("productId"), product.productName)}
              >
                View/Edit Product
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu >
        )
      },
    },
  ]

  const [isNewProductModal, setNewProductModal] = useState(false)
  const [isEditProductModal, setEditProductModal] = useState(false)

  const openNewProductModal = () => {
    setNewProductModal(true)
  }

  const closeNewProductModal = () => {
    setNewProductModal(false)
  }

  const closeEditProductModal = () => {
    setEditProductModal(false)
  }

  const viewProduct = (productId: number, productName: string) => {
    // console.log(productId, surname, otherNames, username, email)
    setProductId(productId)
    setProductName(productName)
    setEditProductModal(true)
  }

  return (
    <>
      <div className="container mx-auto py-10">
        <div>
          <button
            onClick={openNewProductModal}
            className="py-2 px-6 bg-green-700 rounded-sm text-white font-semibold tracking-wide"
          >
            Add New Product
          </button>
        </div>
        <DataTable columns={columns} data={productJSONData} />

        <AddNewProduct
          showModal={isNewProductModal}
          closeModal={closeNewProductModal}
        />

        <EditProduct
          showModal={isEditProductModal}
          closeModal={closeEditProductModal}
          productId={productId}
          productName={productName}
        />
      </div>
    </>
  )
}