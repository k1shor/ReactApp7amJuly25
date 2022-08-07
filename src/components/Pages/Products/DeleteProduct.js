import React, { useState, useEffect } from 'react'
import { deleteProduct, productDetails } from '../../../api/productAPI'
import AdminSidebar from '../../Layout/AdminSidebar'
import Footer from '../../Layout/Footer'
import Navbar from '../../Layout/Navbar'
import { Link, useParams } from 'react-router-dom'
import { API } from '../../../config'
import { isAuthenticated } from '../../../api/userAPI'


const DeleteProduct = () => {
  const [product, setProduct] = useState([])
  const {id} = useParams()
  const {token} = isAuthenticated()
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  useEffect(()=>{
    productDetails(id)
    .then(data=>{
      if(data.error){
        console.log(data.error)
      }
      else{
        setProduct(data)
      }
    })
    .catch(err=>console.log(err))
  },[])

  const handleDelete = () => {
    deleteProduct(id, token)
    .then(data=>{
      if(data.error){
        setError(data.error)
        setSuccess('')
      }
      else{
        setSuccess(data.message)
        setError('')
      }
    })
  }

  const showError = () => {
    if(error){
      return <div className='alert alert-danger'>{error}</div>
    }
  }
  const showSuccess = () => {
    if(success){
      return <div className='alert alert-success'>{success}</div>
    }
  }


  return (
    <>
    <Navbar />
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-md-3'>
          <AdminSidebar product />

        </div>
        <div className='col-md-9 p-5'>
          <div className='d-flex justify-content-between w-50'>
            <h3>Delete Product</h3>
            <Link to='/admin/products' className='btn btn-primary'>Go Back</Link>
          </div>
          
          <div className='d-flex my-3 p-5 shadow-lg'>
            <div className='img-div p-5' style={{height:"400px", width:"40%"}}>
              <img src= {`${API}/${product.product_image}`} className="h-100"/>
            </div>
            <div className='align-middle p-5' style={{width:"60%", height: "400px"}}>
              <h3>{product.product_name}</h3>
              <h3>Rs. {product.product_price}</h3>
              <h3>In Stock: {product.count_in_stock}</h3>
              <h5 className='text-truncate'>Description: {product.product_description}</h5>
              {showError()}
          {showSuccess()}
{
  !success &&
  <>
              <h5 className='mt-5'>Are you sure, you want to delete this product?</h5>
              <button className='btn btn-danger form-control' onClick={handleDelete}>DELETE</button>
  </>
}

            </div>
          </div>

        </div>
      </div>
    </div>
    <Footer />
  </>
  )
}

export default DeleteProduct