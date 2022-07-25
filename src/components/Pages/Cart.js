import React from 'react'
import Footer from '../Layout/Footer'
import Navbar from '../Layout/Navbar'

const Cart = () => {
  return (
    <>
    <Navbar/>
    <h3 className='text-center'>Cart Items</h3>

    <table className='w-75 mx-auto my-3 table table-bordered text-center table-hover table-striped align-middle'>
        <thead>
            <tr>
                <th>S.No.</th>
                <th>Product Image</th>
                <th>Product Description</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>
                    <img src='./image/realme.png' alt='real me phone' height={'100px'}/>
                </td>
                <td>
                    <h3>Real Me</h3>
                    <h4>Rs. 15000</h4>
                    <p>a very handy phone at reasonable price</p>
                </td>
                <td>
                    <button className='btn btn-warning'>UPdate</button>
                    <button className='btn btn-danger'>Remove</button>
                </td>
            </tr>
            <tr>
                <td>1</td>
                <td>
                    <img src='./image/realme.png' alt='real me phone' height={'100px'}/>
                </td>
                <td>
                    <h3>Real Me</h3>
                    <h4>Rs. 15000</h4>
                    <p>a very handy phone at reasonable price</p>
                </td>
                <td>
                    <button className='btn btn-warning'>UPdate</button>
                    <button className='btn btn-danger'>Remove</button>
                </td>
            </tr>
            <tr>
                <td>1</td>
                <td>
                    <img src='./image/realme.png' alt='real me phone' height={'100px'}/>
                </td>
                <td>
                    <h3>Real Me</h3>
                    <h4>Rs. 15000</h4>
                    <p>a very handy phone at reasonable price</p>
                </td>
                <td>
                    <button className='btn btn-warning'>UPdate</button>
                    <button className='btn btn-danger'>Remove</button>
                </td>
            </tr>
            <tr>
                <td>1</td>
                <td>
                    <img src='./image/realme.png' alt='real me phone' height={'100px'}/>
                </td>
                <td>
                    <h3>Real Me</h3>
                    <h4>Rs. 15000</h4>
                    <p>a very handy phone at reasonable price</p>
                </td>
                <td>
                    <button className='btn btn-warning'>UPdate</button>
                    <button className='btn btn-danger'>Remove</button>
                </td>
            </tr>
        </tbody>
    </table>




    <Footer/>
    </>
  )
}

export default Cart