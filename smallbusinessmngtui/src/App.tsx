// import { useState } from "react"
import { Routes, Route } from "react-router-dom"

import UserModal from './components/users/Users'
import DistributorsPage from './components/distributors/Distributors'
import SuppliersPage from './components/suppliers/Supplier'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<UserModal />} />
        <Route path="distributors" element={<DistributorsPage />} />
        <Route path="suppliers" element={<SuppliersPage />} />
      </Routes>
    </>
  )
}

export default App
