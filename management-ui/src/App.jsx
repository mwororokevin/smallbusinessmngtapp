import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Layout from "./components/shared/Layout";
import Dashboard from "./components/Dashboard";
import Orders from "./components/Orders";
import Products from "./components/Products";
import Distributors from "./components/Distributors";
import Suppliers from "./components/Suppliers";
import Packaging from "./components/Packaging";
import Users from "./components/Users";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="orders" element={<Orders />} />
          <Route path="products" element={<Products />} />
          <Route path="distributors" element={<Distributors />} />
          <Route path="suppliers" element={<Suppliers />} />
          <Route path="packaging" element={<Packaging />} />
          <Route path="users" element={<Users />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
