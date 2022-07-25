import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { confirmUser } from '../../api/userAPI'
import Footer from '../Layout/Footer'
import Navbar from '../Layout/Navbar'

const ConfirmUser = () => {
    // const params = useParams()
    // const token = params.token
    const [success,setSuccess] = useState('')
    const [error, setError] = useState('')
    const {token} = useParams()
    useEffect(()=>{
        confirmUser(token)
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
    },[success,error])
    const showSuccess=()=>{
        if(success){
            return <div className='alert alert-success'>{success}</div>
        }
    }
    const showError = () => {
        if(error){
            return <div className='alert alert-danger'>{error}</div>
        }
    }


  return (
    <>
    <Navbar/>
    {showSuccess()}
    {showError()}
    <Footer/>
    </>
  )
}

export default ConfirmUser