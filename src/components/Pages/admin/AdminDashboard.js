import React from 'react'
import AdminSidebar from '../../Layout/AdminSidebar'
import Footer from '../../Layout/Footer'
import Navbar from '../../Layout/Navbar'

const AdminDashboard = () => {
  return (
    <>
        <Navbar/>
        <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-3'>
            <AdminSidebar home/>

          </div>
          <div className='col-md-9 p-5'>
            <h3>Welcome to Admin Dashboard.</h3>
          </div>
        </div>
        </div>

        <Footer/>
    </>
  )
}

export default AdminDashboard