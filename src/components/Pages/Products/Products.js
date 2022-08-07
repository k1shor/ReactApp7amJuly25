import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getProducts } from '../../../api/productAPI'
import { API } from '../../../config'
import AdminSidebar from '../../Layout/AdminSidebar'
import Footer from '../../Layout/Footer'
import Navbar from '../../Layout/Navbar'

const Products = () => {
  const [products, setProducts] = useState([])

  useEffect(()=>{
    getProducts()
    .then(data=>{
      if(data.error){
        console.log(data.error)
      }
      else{
        setProducts(data)
      }
    })
    .catch(err=>console.log(err))
  },[])


  return (
    <>
      <Navbar />
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-3'>
            <AdminSidebar product />

          </div>
          <div className='col-md-9 p-5'>
            <div className='d-flex justify-content-between pe-4'>
              <h3>Products</h3>
              <Link to='/admin/product/new' className='btn btn-primary'>Add Product</Link>
            </div>
<table className='table text-center align-middle'>
  <thead>
    <tr>
      <th>S.No.</th>
      <th>Product Image</th>
      <th>Product Name</th>
      <th>Quantity</th>
      <th>Unit Price</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    {
      products.map((product, i)=>{
        return <tr key={i}>
          <td>{i+1}</td>
          <td>
            <img src={`${API}/${product.product_image}`} alt={product.product_image} style={{height:"100px"}}/>

          </td>
          <td>{product.product_name}</td>
          <td>{product.count_in_stock}</td>
          <td>Rs. {product.product_price}</td>
          <td>
            <div className='btn-group'>
              <Link to={`/admin/product/update/${product._id}`} className='btn btn-warning'><i className='bi bi-pencil text-dark'/></Link>
              <Link to={`/admin/product/delete/${product._id}`} className='btn btn-danger'><i className='bi bi-trash'/></Link>
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
      <Footer />
    </>
  )
}

export default Products