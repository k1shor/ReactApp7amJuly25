import React, { useState, useEffect, useRef } from 'react'
import { addProduct } from '../../../api/productAPI'
import AdminSidebar from '../../Layout/AdminSidebar'
import Footer from '../../Layout/Footer'
import Navbar from '../../Layout/Navbar'
import { Link } from 'react-router-dom'
import { getCategories } from '../../../api/categoryAPI'
import { isAuthenticated } from '../../../api/userAPI'

const AddProduct = () => {
const select_ref = useRef()
const file_ref = useRef()

  const {token} = isAuthenticated()
  const [categories, setCategories] = useState([])
  const [product, setProduct] = useState({
    product_name: '',
    product_price:'',
    category:'',
    product_description:'',
    count_in_stock:'',
    product_image:'',
    success:false,
    error:'',
    formData:''
  })

  // destructure product 
  const {product_name, product_price, product_description, count_in_stock, success, error, formData} = product
  

  useEffect(()=>{
    getCategories()
    .then(data=>{
      if(data.error){
        console.log(data.error)
      }
      else{
        setCategories(data)
        setProduct({formData: new FormData})
      }
    })
    .catch(err=>console.log(err))
  },[])

  const handleChange = name => e => {
    if(name==='product_image'){
      setProduct({...product, [name]:e.target.files[0]})
      formData.set(name, e.target.files[0])
    }
    else{
      setProduct({...product, [name]:e.target.value})
      formData.set(name, e.target.value)
    }
  }

  const handleSubmit = e => {
    e.preventDefault()
    addProduct(formData, token)
    .then(data=>{
      if(data.error){
        setProduct({...product, error: data.error})
      }
      else{
        setProduct({success:true, product_name:'',product_price:'', product_description:'',count_in_stock:''})
        file_ref.current.value=null
        select_ref.current.value=null
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
      return <div className='alert alert-success'>Product added Successfully.</div>
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
            <div className='d-flex justify-content-between w-75'>
              <h3>Add Product</h3>
              <Link to='/admin/products' className='btn btn-primary'>Go Back</Link>
            </div>
            <form className='w-75 my-5 p-5 shadow-lg'>
              {showError()}
              {showSuccess()}
              <label htmlFor='product_name'>Product Name</label>
              <input type={'text'} id='product_name' className='form-control mb-2' onChange={handleChange('product_name')} value={product_name}/>

              <label htmlFor='category'>Category</label>
              <select id='category' className='form-control mb-2' onChange={handleChange('category')} ref={select_ref}>
                <option></option>
                {
                  categories.map((category, i)=>{
                    return <option key={i} value={category._id}>{category.category_name}</option>
                  })
                }
              </select>

              <label htmlFor='product_price'>Product Price</label>
              <input type={'number'} id='product_price' className='form-control mb-2' onChange={handleChange('product_price')} value={product_price}/>

              <label htmlFor='product_description'>Description</label>
              <textarea id='product_description' className='form-control mb-2' onChange={handleChange('product_description')} value={product_description}/>

              <label htmlFor='count'>Count in Stock</label>
              <input type='number' id='count' className='form-control mb-2' onChange={handleChange('count_in_stock')} value={count_in_stock}/>

              <label htmlFor='image'>Product Image</label>
              <input type={'file'} id='image' className='form-control mb-4' onChange={handleChange('product_image')} ref={file_ref}/>

              
              <button className='btn btn-warning form-control' onClick={handleSubmit}>Add Product</button>



            </form>

          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AddProduct