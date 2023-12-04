import { useState, useEffect } from "react"
import axios from "axios"
import { DataTable } from "./data-table"
import AddNewDistributor from "./AddNewDistributor"
import EditDistributor from "./EditDistributor"
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


// const baseURL = "http://13.51.167.116:8082/"

export type Distributors = {
  id: number
  surname: string
  otherNames: string
  phoneNumber1: string
  phoneNumber2: string
  email: string
  creationDate: Date
  updateDate: Date
}

export default function DistributorsPage() {
  const [distributorJSONData, setDistributorJSONData] = useState([])


  const [distributorId, setDistributorId] = useState(0)
  const [surname, setSurname] = useState("")
  const [otherNames, setOtherNames] = useState("")
  const [phoneNumber1, setPhoneNumber1] = useState("")
  const [phoneNumber2, setPhoneNumber2] = useState("")
  const [email, setEmail] = useState("")

  useEffect(() => {
    loadDistributors()
  }, [])

  const loadDistributors = async () => {
    const result = await axios.get("http://13.51.167.116:8082/distributors")
    // { console.log(result.data) }
    setDistributorJSONData(result.data)
  }

  const columns: ColumnDef<Distributors>[] = [
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
      accessorKey: "distributorId",
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
      accessorKey: "surname",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Surname
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
      accessorKey: "phoneNumber1",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Mobile Number
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
    },
    {
      accessorKey: "phoneNumber2",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Alt. Mobile Number
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
        const distributor = row.original

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
                // onClick={() => alert(row.getValue("distributorId"))}
                onClick={() => {
                  const baseURL = "http://13.51.167.116:8082/distributors/"
                  const distributorId = row.getValue("distributorId")
                  console.log(distributorId)

                  axios.delete(`${baseURL}${distributorId}`).then(() => {
                    alert("Distributor Deleted")
                  })
                }
                }
              >
                Delete Distributor
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={() => viewDistributor(row.getValue("distributorId"), distributor.surname, distributor.otherNames, distributor.phoneNumber1, distributor.phoneNumber2, distributor.email)}
              >
                View/Edit Distributor
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu >
        )
      },
    },
  ]

  const [isNewDistributorModal, setNewDistributorModal] = useState(false)
  const [isEditDistributorModal, setEditDistributorModal] = useState(false)

  const openNewDistributorModal = () => {
    setNewDistributorModal(true)
  }

  const closeNewUserModal = () => {
    setNewDistributorModal(false)
  }

  const closeEditDistributorModal = () => {
    setEditDistributorModal(false)
  }

  const viewDistributor = (distributorId: number, surname: string, otherNames: string, phoneNumber1: string, phoneNumber2: string, email: string) => {
    // console.log(distributorId, surname, otherNames, username, email)
    setDistributorId(distributorId)
    setSurname(surname)
    setOtherNames(otherNames)
    setPhoneNumber1(phoneNumber1)
    setPhoneNumber2(phoneNumber2)
    setEmail(email)
    setEditDistributorModal(true)
  }

  return (
    <>
      <div className="container mx-auto py-10">
        <div>
          <button
            onClick={openNewDistributorModal}
            className="py-2 px-6 bg-green-700 rounded-sm text-white font-semibold tracking-wide"
          >
            Add New Distributor
          </button>
        </div>
        <DataTable columns={columns} data={distributorJSONData} />

        <AddNewDistributor
          showModal={isNewDistributorModal}
          closeModal={closeNewUserModal}
        />

        <EditDistributor
          showModal={isEditDistributorModal}
          closeModal={closeEditDistributorModal}
          distributorId={distributorId}
          surname={surname}
          otherNames={otherNames}
          phoneNumber1={phoneNumber1}
          phoneNumber2={phoneNumber2}
          email={email}
        />
      </div>
    </>
  )
}