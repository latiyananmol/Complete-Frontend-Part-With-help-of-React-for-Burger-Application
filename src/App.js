import Header from "./components/layout/Header";
import Home from "./components/home/Home";
import Footer from "./components/layout/Footer";
import Contact from "./components/contact/Contact";
import Cart from "./components/cart/Cart";
import Shipping from "./components/cart/Shipping";
import ConfirmOrder from "./components/cart/ConfirmOrder";

import "./styles/app.scss";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PaymentSuccess from "./components/cart/PaymentSuccess";
import Login from "./components/login/Login";
import Profile from "./components/profile/Profile";
import MyOrders from "./components/myorders/MyOrders";
import OrderDetails from "./components/myorders/OrderDetails";
import Dashboard from "./components/admin/Dashboard";
import User from "./components/admin/Users";
import Orders from "./components/admin/Orders";
import About from "./components/about/About";
import NotFound from "./components/layout/NotFound";

function App() {
  return (
    <Router>
      <Header isAuthenticated={true} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/shiping" element={<Shipping />}></Route>
        <Route path="/confirmorder" element={<ConfirmOrder />}></Route>
        <Route path="/paymentsuccess" element={<PaymentSuccess />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/me" element={<Profile />}></Route>
        <Route path="/myorders" element={<MyOrders />}></Route>
        <Route path="/order/:id" element={<OrderDetails />}></Route>
        <Route path="/admin/dashboard" element={<Dashboard />}></Route>
        <Route path="/admin/orders" element={<Orders />}></Route>
        <Route path="/admin/users" element={<User />}></Route>
       
        <Route path="*" element={<NotFound  />}></Route>
        
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
