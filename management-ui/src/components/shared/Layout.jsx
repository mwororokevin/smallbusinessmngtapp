import React from 'react'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { BsArrowLeftShort, BsSearch } from "react-icons/bs"
import { DiCodeigniter } from "react-icons/di"
import { RiDashboardFill } from "react-icons/ri"

export default function Layout() {
  const [open, setOpen] = useState(true)

  const MenuItems = [
    {title: "Dashboard"},
    {title: "Orders"},
    {title: "Products"},
    {title: "Distributors"},
    {title: "Suppliers"},
    {title: "Packaging"},
    {title: "Users"},
    {title: "Logout"}
  ]

  return (
    <div className="flex">
      <div className={`bg-dark-purple h-screen mr-12 p-5 pt-8 ${open ? "w-72" : "w-20"} duration-300 relative`}>
        <BsArrowLeftShort 
          className={`bg-white text-dark-purple text-3xl rounded-full absolute -right-3 top-9 border 
          border-dark-purple cursor-pointer ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="inline-flex">
          <DiCodeigniter className={`bg-amber-300 text-4xl rounded cursor-pointer block float-left mr-2 duration-500 ${!open && "rotate-[360deg]"}`}/>
          <h1 className={`text-white origin-left font-medium text-2xl duration-300 ${!open && "scale-0"}`}>Delici Yorghurt</h1>
        </div>
        <div className={`flex items-center rounded-md bg-light-white mt-6 ${!open ? "px-2.5" : "px-4"} py-2`}>
          <BsSearch className={`text-white text-lg block float-left cursor-pointer ${open && "mr-2"}`}/>
          <input type={"search"} placeholder="Search" className={`text-base bg-transparent w-full text-white focus:outline-none ${!open && "hidden"}`}/>
        </div>
        <ul>
          {MenuItems.map((menuItem, index) => (
            <>
              <li key={index} className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer hover:bg-light-white rounded-md mt-2`}>
                <span className="text-2xl block float-left">
                  <RiDashboardFill />
                </span>
                <span className={`text-base font-medium flex-1 duration-200 ${!open && "hidden"}`}>
                  {menuItem.title}
                </span>
              </li>
            </>
          ))}
        </ul>
      </div>
      <div className="flex flex-col">
        <div>Header</div>
        <div>{<Outlet />}</div>
      </div>
    </div>
  )
}
