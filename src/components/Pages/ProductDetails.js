import { Box, Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { getRelatedProducts, productDetails } from '../../api/productAPI'
import { isAuthenticated } from '../../api/userAPI'
import { API } from '../../config'
import { addItemsToCart, addItemToCart } from '../../reducer/actions/cartActions'
import { ADD_TO_CART } from '../../reducer/constants/cartConstants'
import Footer from '../Layout/Footer'
import Navbar from '../Layout/Navbar'
import DisplayCard from './Card'
import { useDispatch } from 'react-redux';

const ProductDetails = () => {
    const { user } = isAuthenticated()
    const { id } = useParams()
    const [product, setProduct] = useState({})
    const [relatedProducts, setRelatedProducts] = useState([])

    const dispatch = useDispatch()

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

        getRelatedProducts(id)
            .then(data => {
                if (data.error) {
                    console.log(data.error)
                }
                else {
                    setRelatedProducts(data)
                    console.log(data)
                }
            })
            .catch(err => console.log(err))
    }, [id]
    )
    const addToCart = (name, id, quantity) => e => {
        e.preventDefault()
        dispatch(addItemsToCart(id, quantity))
        toast.success(name + " is added to cart.")
    }

    return (
        <>
        <ToastContainer theme='colored' position='top-left'/>
            <Navbar />
            <div className='my-5 p-5 d-flex shadow-lg w-75 mx-auto'>
                <div className='img-div w-50 text-center p-3'>
                    <img src={`${API}/${product.product_image}`} className = 'w-100' />
                </div>
                <div className='p-5 w-50'>
                    <h3>{product.product_name}</h3>
                    <h3>Rs. {product.product_price}</h3>
                    <h3>In Stock: {product.count_in_stock}</h3>
                    <p>{product.product_description}</p>
                    {
                        user && user.role === 0 &&
                        <button className='btn btn-warning' onClick={addToCart(product.product_name, product._id,1)}>Add to Cart</button>
                    }
                </div>

            </div>

            <Box className='main-content' width={'75%'} padding={'25px'}>
                <Grid container spacing={4}>
                    {
                        relatedProducts.map((product, i) => {
                            return <DisplayCard item={product} />
                        })
                    }

                </Grid>
            </Box>


            <Footer />
        </>
    )
}

export default ProductDetails