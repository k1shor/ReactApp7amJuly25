import React, { useState } from 'react'
import Footer from '../Layout/Footer'
import Navbar from '../Layout/Navbar'
import { Link, useNavigate } from 'react-router-dom'
import { authenticate, isAuthenticated, signIn } from '../../api/userAPI'

const Signin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState('')
    const {user} = isAuthenticated()

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        signIn(email, password)
        .then(data=>{
            if(data.error){
                setError(data.error)
            }
            else{
                authenticate(data)
                setSuccess(true)
            }
        })
    }
    const showError = () =>{
        if(error){
            return <div className='alert alert-danger'>{error}</div>
        }
    }
    const redirect = () => {
        if(success){
            if(user && user.role === 1){
                return navigate('/')
            }
            if(user && user.role === 0 ){
                return navigate('/admin/dashboard')
            }
        }
    }

    return (
        <>
            <Navbar />
            {showError()}
            {redirect()}
            <div className='container'>
                <main className="form-signin w-50 mt-5 shadow-lg p-5 m-auto">
                    <form>
                        <img className="mb-4" src="./logo192.png" alt="" width="72" height="57" />
                        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                        <div className="form-floating">
                            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={e=>setEmail(e.target.value)} />
                            <label htmlFor="floatingInput">Email address</label>
                        </div>
                        <div className="form-floating">
                            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={e=>setPassword(e.target.value)}/>
                            <label htmlFor="floatingPassword">Password</label>
                        </div>

                        <div className="checkbox mb-3">
                            <label>
                                <input type="checkbox" value="remember-me" /> Remember me
                            </label>
                        </div>
                        <button className="w-100 btn btn-lg btn-primary" type="submit" onClick={handleSubmit}>Sign in</button>
                        <Link to='/forgetpassword'>Forget Password</Link><br/>
                        Do not have an account? <Link to ='/register'>Register</Link>
                        <p className="mt-5 mb-3 text-muted">&copy; 2017–2022</p>
                    </form>
                </main>
            </div>
            <Footer />
        </>
    )
}

export default Signin