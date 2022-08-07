import React, { useState, useEffect } from 'react'
import { editProduct, productDetails } from '../../../api/productAPI'
import AdminSidebar from '../../Layout/AdminSidebar'
import Footer from '../../Layout/Footer'
import Navbar from '../../Layout/Navbar'
import { Link, useParams } from 'react-router-dom'
import { API } from '../../../config'
import { isAuthenticated } from '../../../api/userAPI'


const EditProduct = () => {
  // const [product, setProduct] = useState()
  const { id } = useParams()
  const { token } = isAuthenticated()
  const [product, setProduct] = useState({
    product_name: '',
    product_price: '',
    count_in_stock: '',
    product_description: '',
    error: '',
  })
  const [success, setSuccess] = useState('')
  const { product_name, product_price, count_in_stock, product_description, error } = product

  const handleChange = (name) => e => {
    setProduct({ ...product, [name]: e.target.value })
  }

  useEffect(() => {
    productDetails(id)
      .then(data => {
        if (data.error) {
          console.log(data.error)
        }
        else {
          setProduct(data)
        }
      })
      .catch(err => console.log(err))
  }, [success])

  const handleUpdate = e => {
    e.preventDefault()
    editProduct(id, product, token)
      .then(data => {
        if (data.error) {
          setProduct({ ...product, error: data.error })
        }
        else {
          setProduct({ error: ""})
          setSuccess("Product Updated Successfully.")
        }
      })
  }

  const showError = () => {
    if (error) {
      return <div className='alert alert-danger'>{error}</div>
    }
  }
  const showSuccess = () => {
    if (success) {
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
              <h3>Edit Product</h3>
              <Link to='/admin/products' className='btn btn-primary'>Go Back</Link>
            </div>
            <div className='d-flex my-3 p-5 shadow-lg'>
              <div className='img-div p-5' style={{ height: "400px", width: "40%" }}>
                <img src={`${API}/${product.product_image}`} className="h-100" />
              </div>
              <div className='align-middle p-5' style={{ width: "60%", height: "500px" }}>
                <h3>{product.product_name}</h3>
                <h3>Rs. {product.product_price}</h3>
                <h3>In Stock: {product.count_in_stock}</h3>
                <h5 className='text-truncate'>Description: {product.product_description}</h5>

                {
                  !success ?
                    <>
                    {showError()}
                      <input type={'text'} placeholder="Product Name" className='form-control mb-2 mt-4' onChange={handleChange('product_name')} value={product_name} />
                      <input type={'number'} placeholder="Product Price" className='form-control mb-2' onChange={handleChange('product_price')} value={product_price} />
                      <input type={'text'} placeholder="Count In Stock" className='form-control mb-2' onChange={handleChange('count_in_stock')} value={count_in_stock} />
                      <textarea placeholder="Product Description" className='form-control mb-3' onChange={handleChange('product_description')} value={product_description} />
                      <button className='btn btn-warning form-control' onClick={handleUpdate}>UPDATE</button>
                    </>
                    :
                    showSuccess()
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

export default EditProduct