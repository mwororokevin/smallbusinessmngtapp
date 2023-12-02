import { Outlet } from "react-router-dom"
import Navbar from "./Navbar";


export default function SharedLayout() {
  return (
    <div className="h-screen w-screen bg-black-100">
      <Navbar />
      <Outlet />
    </div>
  )
}
