import { Box, Typography } from '@mui/material'
import React from 'react'
import Footer from '../Layout/Footer'
import Navbar from '../Layout/Navbar'

const Blogs = () => {
  return (
    <>
    <Navbar/>

    <Box className='BlogsContainer' backgroundColor='primary.dark' padding={3}>
        <Box className='Blog' display={'flex'} padding={3} backgroundColor='primary.main' borderRadius={5} sx={{
            '&:hover':{
                backgroundColor:'primary.light'
            }
        }}>
            <Box className='Blog-Content' width={'80%'}>
                <Box className='Blog-Title'>
                    <Typography variant='h4'>
                        Title
                    </Typography>
                    </Box>
                <Box className = 'Blog-Text'>
                    <Typography variant='body1'>
                        this is a blog text.
                    </Typography>
                    </Box>
            </Box>
            <Box className='Blog-Author' width={'20%'}>
                <Box className='Blogger-image' width={'100%'} borderRadius={'50%'} overflow={'hidden'} backgroundColor='info.light'><img src='./image/realme.png' width={'100%'}/></Box>
                <Box className='Blogger-name'>
                    <Typography variant='h5' textAlign='right'>
                    Blogger
                    </Typography>
                    </Box>
            </Box>
        </Box>
    </Box>

    <Footer/>
    </>
  )
}

export default Blogs