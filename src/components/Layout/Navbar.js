import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { isAuthenticated, signOut } from '../../api/userAPI'
import './navbar.css'

const Navbar = () => {
    const { user } = isAuthenticated()
    const navigate = useNavigate()


    const signout = (e) => {
        e.preventDefault()
        signOut(navigate('/'))
    }
    return (
        <>
            <div className='container-fluid'>
                <div className='row custom-background'>
                    <div className='col-md-3'>
                        <Link className="navbar-brand fs-3 fw-bold" to="/">Our Store</Link>
                    </div>
                    <div className='col-md-6 pt-2'>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-warning" type="submit">Search</button>
                        </form>
                    </div>
                    <div className='col-md-3 d-flex justify-content-evenly pt-1'>
                        {!user &&
                            <>
                                <Link to='/signin'><i className="bi bi-box-arrow-in-left text-white fs-3"></i></Link>
                                <Link to="/register"><i className="bi bi-person-plus text-white fs-3"></i></Link>
                            </>
                        }
                        {user && user.role === 0 &&
                            <>

                                <Link to="/user/profile"><i className="bi bi-person-circle text-white fs-3"></i></Link>
                                <Link to="/cart"><i className="bi bi-cart text-white fs-3"></i></Link>
                            </>
                        }
                        {
                            user && user.role === 1 && 
                            <Link to="/admin/dashboard"><i className="bi bi-speedometer text-white fs-3"></i></Link>

                        }
{
    user &&
    <Link to="#" onClick={signout}><i className="bi bi-box-arrow-right text-white fs-3"></i></Link>

}

                    </div>
                </div>
            </div>

            <nav className="navbar navbar-expand-lg custom-background">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/deals">Deals</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/services">Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/blogs">Blogs</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar