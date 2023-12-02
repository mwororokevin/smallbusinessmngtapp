import { useState, useEffect } from "react"
import axios from "axios"
import { DataTable } from "./data-table"
import AddNewSupplier from "./AddNewSupplier"
import EditSupplier from "./EditSupplier"
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
import Navbar from "../Shared/Navbar"


const baseURL = "http://localhost:8082/suppliers"

export type Suppliers = {
  supplierId: number
  supplierName: string
  supplierPhoneNumber1: string
  supplierPhoneNumber2: string
  supplierContactPerson: string
  creationDate: Date
  updateDate: Date
}

export default function SuppliersPage() {
  const [supplierJSONData, setSupplierJSONData] = useState('')


  const [supplierId, setSupplierId] = useState(0)
  const [supplierName, setSupplierName] = useState("")
  const [supplierPhoneNumber1, setSupplierPhoneNumber1] = useState("")
  const [supplierPhoneNumber2, setSupplierPhoneNumber2] = useState("")
  const [supplierContactPerson, setSupplierContactPerson] = useState("")

  useEffect(() => {
    loadSuppliers()
  }, [])

  const loadSuppliers = async () => {
    const result = await axios.get(baseURL)
    // { console.log(result.data) }
    setSupplierJSONData(result.data)
  }

  const columns: ColumnDef<Suppliers>[] = [
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
      accessorKey: "supplierId",
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
      accessorKey: "supplierName",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Supplier
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
    },
    {
      accessorKey: "supplierContactPerson",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Contact Person
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
    },
    {
      accessorKey: "supplierPhoneNumber1",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Phone Number
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
    },
    {
      accessorKey: "supplierPhoneNumber2",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Alt. Phone Number
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
    },
    {
      id: "actions",
      cell: ({ row }) => {
        const supplier = row.original

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
                // onClick={() => alert(row.getValue("supplierId"))}
                onClick={() => {
                  const baseURL = "http://localhost:8082/suppliers/"
                  const supplierId = row.getValue("supplierId")
                  console.log(supplierId)

                  axios.delete(`${baseURL}${supplierId}`).then(() => {
                    alert("Supplier Deleted")
                  })
                }
                }
              >
                Delete Supplier
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={() => viewSupplier(row.getValue("supplierId"), supplier.supplierName, supplier.supplierPhoneNumber1, supplier.supplierPhoneNumber2, supplier.supplierContactPerson)}
              >
                View/Edit Supplier
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu >
        )
      },
    },
  ]

  const [isNewSupplierModal, setNewSupplierModal] = useState(false)
  const [isEditSupplierModal, setEditSupplierModal] = useState(false)

  const openNewUserModal = () => {
    setNewSupplierModal(true)
  }

  const closeNewUserModal = () => {
    setNewSupplierModal(false)
  }

  const closeEditUserModal = () => {
    setEditSupplierModal(false)
  }

  const viewSupplier = (supplierId: number, supplierName: string, supplierPhoneNumber1: string, supplierPhoneNumber2: string, supplierContactPerson: string) => {
    // console.log(supplierId, surname, otherNames, username, email)
    setSupplierId(supplierId)
    setSupplierName(supplierName)
    setSupplierPhoneNumber1(supplierPhoneNumber1)
    setSupplierPhoneNumber2(supplierPhoneNumber2)
    setSupplierContactPerson(supplierContactPerson)
    setEditSupplierModal(true)
  }

  return (
    <>
      <div className="container mx-auto py-10">
        <div>
          <button
            onClick={openNewUserModal}
            className="py-2 px-6 bg-green-700 rounded-sm text-white font-semibold tracking-wide"
          >
            Add New Supplier
          </button>
        </div>
        <DataTable columns={columns} data={supplierJSONData} />

        <AddNewSupplier
          showModal={isNewSupplierModal}
          closeModal={closeNewUserModal}
        />

        <EditSupplier
          showModal={isEditSupplierModal}
          closeModal={closeEditUserModal}
          supplierId={supplierId}
          supplierName={supplierName}
          supplierPhoneNumber1={supplierPhoneNumber1}
          supplierPhoneNumber2={supplierPhoneNumber2}
          supplierContactPerson={supplierContactPerson}
        />
      </div>
    </>
  )
}