import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { isAuthenticated, signOut } from '../../api/userAPI'

const AdminSidebar = ({ home, category, product, users, orders }) => {
    const { user } = isAuthenticated()
    const navigate = useNavigate()

    const signout = (e) => {
        e.preventDefault()
        signOut(navigate('/'))
    }
    return (
        <>
            <div className="d-flex flex-column flex-shrink-0 p-3 bg-light" style={{ "width": "280px" }}>
                {
                    home ?
                        <Link to="/admin/dashboard" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                            <i className="me-2 bi bi-speedometer"></i>
                            <span className="fs-4">Dashboard</span>
                        </Link> :
                        <Link to="/admin/dashboard" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                            <i className="me-2 bi bi-speedometer"></i>
                            <span className="fs-4">Dashboard</span>
                        </Link>

                }
                <hr />
                <ul className="nav nav-pills flex-column mb-auto">
                    <li className="nav-item">
                        <Link to="/" className="nav-link link-dark" aria-current="page">
                            <i className="me-2 bi bi-house"></i>                            Home
                        </Link>
                    </li>


                    <li>
                        {
                            category ? <Link to="/admin/category" className="nav-link link-light active">
                                <i className="me-2 bi bi-tags"></i>
                                Category
                            </Link> :
                                <Link to="/admin/category" className="nav-link link-dark">
                                    <i className="me-2 bi bi-tags"></i>
                                    Category
                                </Link>
                        }
                    </li>
                    <li>
                        {
                            product ?
                                <Link to="/admin/products" className="nav-link link-light active">
                                    <i className="me-2 bi bi-tags"></i>
                                    Products
                                </Link> :
                                <Link to="/admin/products" className="nav-link link-dark">
                                    <i className="me-2 bi bi-grid"></i>
                                    Products
                                </Link>
                        }
                    </li>
                    <li>
                        {
                            users ?
                                <Link to="/admin/users" className="nav-link link-light active">
                                    <i className="me-2 bi bi-tags"></i>
                                    Customers
                                </Link> :
                                <Link to="/admin/users" className="nav-link link-dark">
                                    <i className="me-2 bi bi-person-circle"></i>

                                    Customers
                                </Link>
                        }
                    </li>
                    <li>
                        {
                            orders ?
                                <Link to="/admin/orders" className="nav-link link-light active">
                                    <i className="me-2 bi bi-tags"></i>
                                    Orders
                                </Link> :
                                <Link to="/admin/orders" className="nav-link link-dark">
                                    <i className="me-2 bi bi-table"></i>
                                    Orders
                                </Link>
                        }
                    </li>
                </ul>
                <hr />
                <div className="dropdown">
                    <Link to="#" className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
                        <strong>{user.username}</strong>
                    </Link>
                    <ul className="dropdown-menu text-small shadow">
                        <li><Link className="dropdown-item" to="#">{user.email}</Link></li>
                        <li><Link className="dropdown-item" to="#">Profile</Link></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><Link className="dropdown-item" to="#" onClick={signout}>Sign out</Link></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default AdminSidebar