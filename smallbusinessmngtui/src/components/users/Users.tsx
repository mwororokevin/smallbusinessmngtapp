import { useState, useEffect } from "react"
import axios from "axios"
import { DataTable } from "./data-table"
import AddNewUser from "./AddNewUser"
import EditUser from "./EditUser"
import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, MoreHorizontal, Users } from "lucide-react"
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

export type Users = {
  id: number
  status: string
  surname: string
  otherNames: string
  username: string
  email: string
  creationDate: Date
  updateDate: Date
}

export default function UsersPage() {
  const [userJSONData, setUserJSONData] = useState([])


  const [userId, setUserId] = useState(0)
  const [surname, setSurname] = useState("")
  const [otherNames, setOtherNames] = useState("")
  const [username, setUserName] = useState("")
  const [email, setEmail] = useState("")

  useEffect(() => {
    loadUsers()
  }, [])

  const loadUsers = async () => {
    const result = await axios.get("http://13.51.167.116:8082/users")
    // { console.log(result.data) }
    setUserJSONData(result.data)
  }

  const columns: ColumnDef<Users>[] = [
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
      accessorKey: "userId",
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
        const user = row.original

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
                  const baseURL = "http://13.51.167.116:8082/users/"
                  const userID = row.getValue("userId")
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
                onClick={() => viewUser(row.getValue("userId"), user.surname, user.otherNames, user.username, user.email)}
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

  const openNewUserModal = () => {
    setNewUserModal(true)
  }

  const closeNewUserModal = () => {
    setNewUserModal(false)
  }

  const closeEditUserModal = () => {
    setEditUserModal(false)
  }

  const viewUser = (userId: number, surname: string, otherNames: string, username: string, email: string) => {
    // console.log(userId, surname, otherNames, username, email)
    setUserId(userId)
    setSurname(surname)
    setOtherNames(otherNames)
    setUserName(username)
    setEmail(email)
    setEditUserModal(true)
  }

  return (
    <>
      <div className="container mx-auto py-10">
        <div>
          <button
            onClick={openNewUserModal}
            className="py-2 px-6 bg-green-700 rounded-sm text-white font-semibold tracking-wide"
          >
            Add New User
          </button>
        </div>
        <DataTable columns={columns} data={userJSONData} />

        <AddNewUser
          showModal={isNewUserModal}
          closeModal={closeNewUserModal}
        />

        <EditUser
          showModal={isEditUserModal}
          closeModal={closeEditUserModal}
          userId={userId}
          surname={surname}
          otherNames={otherNames}
          username={username}
          email={email}
        />
      </div>
    </>
  )
}