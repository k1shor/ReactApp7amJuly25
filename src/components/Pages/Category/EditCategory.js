import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { editCategory, getCategoryDetails } from '../../../api/categoryAPI'
import { isAuthenticated } from '../../../api/userAPI'
import AdminSidebar from '../../Layout/AdminSidebar'
import Footer from '../../Layout/Footer'
import Navbar from '../../Layout/Navbar'

const EditCategory = () => {
  const [category, setCategory] = useState({})
  const [new_category, setNewCategory] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const {id} = useParams()
  const {token} = isAuthenticated()
  const navigate = useNavigate()

  useEffect(()=>{
    getCategoryDetails(id)
    .then(data=>{
      if(data.error){
        console.log(data.error)
      }
      else{
        setCategory(data)
      }
    })
  },[])

  const handleSubmit = (e) => {
    e.preventDefault()
    editCategory(id, new_category, token)
    .then(data=>{
      if(data.error){
        setError(data.error)
      }
      else{
        setSuccess(true)
      }
    })
  }
  const showError = () => {
    if(error){
      return <div className='alert alert-danger'>{error}</div>
    }
  }
  const redirect = () => {
    if(success){
      return navigate('/admin/category')
    }
  }



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
            <h3>Edit Category</h3>
            <Link to= '/admin/category' className='btn btn-primary'>Go back</Link>
            </div>
            {showError()}
            {redirect()}

            <div className='w-50 my-4 shadow-lg p-4'>
              <label htmlFor='category'>Category Name:</label>
              <input type={'text'} value={category.category_name} className='form-control mb-2' disabled/>
              <label htmlFor='new_category'>New Category Name:</label>
              <input type='text' className='form-control mb-2' onChange={e=>setNewCategory(e.target.value)}/>
              <button className='btn btn-warning form-control' onClick={handleSubmit}>Edit Category</button>
            </div>
          
          </div>

        </div>
        </div>
        <Footer/>
    </>
  )
}

export default EditCategory