import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react'
import Home from "./components/Pages/Home";
import Signin from "./components/Pages/Signin";
import Signup from "./components/Pages/Signup";
import Cart from "./components/Pages/Cart";
import MaterialDemo from "./components/Pages/MaterialDemo";
import Deals from "./components/Pages/Deals"
import Services from "./components/Pages/Services";
import Blogs from "./components/Pages/Blogs";
import Contact from "./components/Pages/Contact";
import Counter from "./components/Pages/Counter";
import DataFetch from "./components/Pages/DataFetch";
import Display from "./components/Pages/Display";
import ConfirmUser from "./components/Pages/ConfirmUser";
import AdminDashboard from "./components/Pages/admin/AdminDashboard";
import ForgetPassword from "./components/Pages/ForgetPassword";
import AdminRoute from "./SelectiveRoutes/AdminRoute";
import Categories from "./components/Pages/Category/Categories";
import AddCategory from "./components/Pages/Category/AddCategory";
import EditCategory from "./components/Pages/Category/EditCategory";
import DeleteCategory from "./components/Pages/Category/DeleteCategory";


const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/cart" element={<Cart />} />

        {/* Material Pages */}
        <Route path="/mui" element={<MaterialDemo />} />
        <Route path="/deals" element={<Deals />} />
        <Route path='/services' element={<Services />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/contact' element={<Contact />} />


        {/* hooks */}
        <Route path='/counter' element={<Counter />} />

        <Route path='/fetchdata' element={<DataFetch />} />
        <Route path='/display' element={<Display />} />


        <Route path='/confirmuser/:token' element={<ConfirmUser />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />

        <Route path="/" element={<AdminRoute />}>
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/category" element={<Categories/>}/>
          <Route path="/admin/category/new" element={<AddCategory/>}/>
          <Route path="/admin/category/edit/:id" element={<EditCategory/>}/>
          <Route path="/admin/category/delete/:id" element={<DeleteCategory/>}/>

        </Route>
      </Routes>
    </BrowserRouter>


  )
}

export default MyRoutes