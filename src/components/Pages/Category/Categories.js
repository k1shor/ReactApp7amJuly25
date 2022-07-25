import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getCategories } from '../../../api/categoryAPI'
import AdminSidebar from '../../Layout/AdminSidebar'
import Footer from '../../Layout/Footer'
import Navbar from '../../Layout/Navbar'

const Categories = () => {
  const [categories, setCategories] = useState([])

  useEffect(()=>{
    getCategories()
    .then(data=>{
      if(data.error){
        console.log(data.error)
      }
      else{
        setCategories(data)
      }
    })
  },[])

  return (
    <>
        <Navbar/>
        <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-3'>
            <AdminSidebar category/>

          </div>
          <div className='col-md-9 p-5'>
            <div className='d-flex justify-content-between w-50'>
            <h3>Category</h3>
            <Link to= '/admin/category/new' className='btn btn-primary'>Add Category</Link>
            </div>
          <table className='table text-center table-hover table-striped table-bordered shadow-lg mt-3'>
            <thead>
              <tr>
                <th>S.No.</th>
                <th>Category Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                categories.map((category, i)=>{
                  return <tr key={i}>
                    <td>{i+1}</td>
                    <td>{category.category_name}</td>
                    <td>
                      <div className='btn-group'>
                      <Link to={`/admin/category/edit/${category._id}`} className='btn btn-warning'><i class="bi bi-pencil-square"></i></Link>
                      <Link to={`/admin/category/delete/${category._id}`} className='btn btn-danger'><i class="bi bi-trash"></i></Link>
                      </div>
                    </td>
                  </tr>
                })
              }
            </tbody>
          </table>
          </div>

        </div>
        </div>
        <Footer/>
    </>
  )
}

export default Categories