import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'
import Footer from '../Layout/Footer'
import Navbar from '../Layout/Navbar'

const Contact = () => {
    return (
        <>
            <Navbar />
            <Box className='contact-container'>
                <Box className='contact-info' display='flex' margin={5} padding={5} boxShadow={3}>
                    <Box className="address" width='40%'>
                        <Typography variant='h4'>Our store</Typography>
                        <Typography variant='h5'>Jamal, Kathmandu</Typography>
                        <Typography variant='h5'>01-4444444, info@ourstore.com</Typography>
                        <Typography variant='h5'>www.ourstore.com</Typography>
                    </Box>
                    <Box className='contact-form' width='60%' paddingX={5} borderLeft={1}>
                        <TextField id="standard-basic" label="Email" variant="outlined" fullWidth className='mb-3' />
                        <TextField id="standard-basic" label="Subject" variant="outlined" fullWidth
                            className='mb-3' />
                        <TextField id="standard-basic" label="Message" variant="outlined" fullWidth multiline rows={5} className='mb-3' />
                        <Button color='info' fullWidth variant='contained'>SEND MESSAGE</Button>
                    </Box>
                </Box>
                <Box className='location-map' padding={5} boxShadow={3} backgroundColor={'gray'}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1766.1209655310881!2d85.31455102581761!3d27.709815595676634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19019876a7f5%3A0xbb5ed6acf03f1089!2sJamal%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1655175270765!5m2!1sen!2snp" width='100%' height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </Box>
            </Box>
            <Footer />
        </>
    )
}

export default Contact