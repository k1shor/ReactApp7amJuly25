import { Box,Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { getFilteredProducts, getProducts } from '../../api/productAPI'
import Checkbox_category from '../Checkbox_category'
import Footer from '../Layout/Footer'
import Navbar from '../Layout/Navbar'
import Radio_Prices from '../Radio_Prices'
import Card from './Card'
const Deals = () => {
  const [products, setProducts] = useState([])
  const [myFilters, setMyFilters] = useState({
    filters : {category:[], product_price:[]}
  })

  useEffect(()=>{
    getFilteredProducts('product_price', '1', 8, 0, myFilters)
    .then(data=>{
      if(data.error){
        console.log(data.error)
      }
      else{
        setProducts(data.filteredProducts)
      }
    })
    
  },[myFilters])

  const handleFilter = (filters, filterBy) => {
    const newFilter = {...myFilters}
    newFilter.filters[filterBy] = filters
    setMyFilters(newFilter)
    console.log(newFilter.filters)
  }

  return (

    <>
      <Navbar />
      <Box className='container-fluid' display={'flex'}>
        <Box className='left-sidebar' width={'25%'} p={'25px'}>
          {/* <Typography variant='h4' color={'secondary'}>Deals</Typography> */}
          {/* <Link href='#' underline={"hover"} variant='button' display='block'>Deals of the day</Link>
          <Link href='#' underline={"hover"} variant='button' display='block'>Flash sales</Link>
          <Link href='#' underline={"hover"} variant='button' display='block'>Most Popular</Link> */}

          <Typography variant='h4' color={'secondary'}>Departments</Typography>
          <Checkbox_category myfunction = {handleFilter}/>

          <Typography variant='h4' color={'secondary'}>Prices</Typography>
          <Radio_Prices myfunction = {handleFilter}/>

        </Box>
        <Box className='main-content' width={'75%'} padding={'25px'}>
          <Grid container spacing={4}>
            {
              products.map((product, i)=>{
                return <Card item={product}/>
              })
            }
            
          </Grid>
        </Box>
      </Box>


      <Footer />
    </>
  )
}

export default Deals