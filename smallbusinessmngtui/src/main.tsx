import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom"
import SharedLayout from './components/Shared/SharedLayout.tsx'
import UserModal from './components/users/Users.tsx'
import DistributorsPage from './components/distributors/Distributors.tsx'
import SuppliersPage from './components/suppliers/Supplier.tsx'
import OrdersPage from './components/orderDetails/OrderDetails.tsx'
import ProductsPage from "./components/products/Products.tsx"
import Dashboard from "./components/dashboard/Dashboard.tsx"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<SharedLayout />}>
      <Route path="/" element={<Dashboard />} />
      <Route path="users" element={<UserModal />} />
      <Route path="distributors" element={<DistributorsPage />} />
      <Route path="suppliers" element={<SuppliersPage />} />
      <Route path="orders" element={<OrdersPage />} />
      <Route path="products" element={<ProductsPage />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
