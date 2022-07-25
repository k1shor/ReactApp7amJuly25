import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { addCategory } from '../../../api/categoryAPI'
import { isAuthenticated } from '../../../api/userAPI'
import AdminSidebar from '../../Layout/AdminSidebar'
import Footer from '../../Layout/Footer'
import Navbar from '../../Layout/Navbar'

const AddCategory = () => {
  const [category, setCategory] = useState([])
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

//   const {token} = isAuthenticated()
const data = isAuthenticated()
const token = data.token

  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault()
    addCategory(category, token)
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
            <h3>Add New Category</h3>
            <Link to= '/admin/category' className='btn btn-primary'>Go back</Link>
            </div>
            {showError()}
            {redirect()}
            <div className='m-5 p-5 shadow-lg w-50'>
                <label htmlFor='category'>Category Name: </label>
                <input type={'text'} id='category' className='form-control my-2' onChange={e=>setCategory(e.target.value)}/>
                <button className='btn btn-warning form-control' onClick={handleSubmit}>Add Category</button>
            </div>
          
          </div>

        </div>
        </div>
        <Footer/>
    </>
  )
}

export default AddCategory