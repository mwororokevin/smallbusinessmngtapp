import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <div className="w-full h-16 bg-black flex flex-row text-white gap-x-4 items-center justify-evenly">
      <Link className="font-bold tracking-wide hover:text-[#F5DEB3] text-lg" to="distributors">Distributors</Link>
      <Link className="font-bold tracking-wide hover:text-[#F5DEB3] text-lg" to="suppliers">Suppliers</Link>
      <Link className="font-bold tracking-wide hover:text-[#F5DEB3] text-lg" to="orders">Orders</Link>
      <Link className="font-bold tracking-wide hover:text-[#F5DEB3] text-lg" to="products">Products</Link>
      <Link className="font-bold tracking-wide hover:text-[#F5DEB3] text-lg" to="users">Users</Link>
    </div>
  )
}

