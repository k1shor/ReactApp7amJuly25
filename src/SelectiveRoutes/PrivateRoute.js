import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoute = () => {
  return (
    <>
    isAuthenticated() && isAuthenticated().user.role === 0 ? <Outlet/> : <Navigate to = '/signin' />
    </>
  )
}

export default PrivateRoute