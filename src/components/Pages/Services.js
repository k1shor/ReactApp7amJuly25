import { Box, Card, Grid, Typography } from '@mui/material'
import React from 'react'
import Navbar from '../Layout/Navbar'
import Footer from '../Layout/Footer'

const Services = () => {
    return (
        <>
            <Navbar />
            <Grid container spacing={4} paddingX={5} marginY={4}>
                <Grid item xs={4}>
                    <Box display={'flex'}
                        sx={{
                            border: 3,
                            borderRadius: 3,
                            borderColor: "gray",
                            padding: 3
                        }}>
                        <img src='./image/realme.png' height='50px' />
                        <div>
                            <Typography variant='h6'>Octopus Deploy</Typography>
                            <Typography variant='body2'>A unified DevOps automation platform for your team.</Typography>
                        </div>
                    </Box>
                </Grid>
                <Grid item xs={4}>
                <Box display={'flex'} justifyContent={'space-evenly'}
                        sx={{
                            border: 3,
                            borderRadius: 3,
                            borderColor: "gray",
                            padding: 3
                        }}>
                        <img src='./image/realme.png' height='50px' />
                        <div>
                            <Typography variant='h6'>Octopus Deploy</Typography>
                            <Typography variant='body2'>A unified DevOps automation platform for your team.</Typography>
                        </div>
                    </Box>
                </Grid>
                <Grid item xs={4}>
                <Box display={'flex'}
                        sx={{
                            border: 3,
                            borderRadius: 3,
                            borderColor: "gray",
                            padding: 3
                        }}>
                        <img src='./image/realme.png' height='50px' />
                        <div>
                            <Typography variant='h6'>Octopus Deploy</Typography>
                            <Typography variant='body2'>A unified DevOps automation platform for your team.</Typography>
                        </div>
                    </Box>
                </Grid>
                <Grid item xs={3}>
                <Box display={'flex'}
                        sx={{
                            border: 3,
                            borderRadius: 3,
                            borderColor: "gray",
                            padding: 3
                        }}>
                        <img src='./image/realme.png' height='50px' />
                        <div>
                            <Typography variant='h6'>Octopus Deploy</Typography>
                            <Typography variant='body2'>A unified DevOps automation platform for your team.</Typography>
                        </div>
                    </Box>
                </Grid>
                <Grid item xs={3}>
                <Box display={'flex'}
                        sx={{
                            border: 3,
                            borderRadius: 3,
                            borderColor: "gray",
                            padding: 3
                        }}>
                        <img src='./image/realme.png' height='50px' />
                        <div>
                            <Typography variant='h6'>Octopus Deploy</Typography>
                            <Typography variant='body2'>A unified DevOps automation platform for your team.</Typography>
                        </div>
                    </Box>
                </Grid>
                <Grid item xs={3}>
                <Box display={'flex'}
                        sx={{
                            border: 3,
                            borderRadius: 3,
                            borderColor: "gray",
                            padding: 3
                        }}>
                        <img src='./image/realme.png' height='50px' />
                        <div>
                            <Typography variant='h6'>Octopus Deploy</Typography>
                            <Typography variant='body2'>A unified DevOps automation platform for your team.</Typography>
                        </div>
                    </Box>
                </Grid>
                <Grid item xs={3}>
                <Box display={'flex'}
                        sx={{
                            border: 3,
                            borderRadius: 3,
                            borderColor: "gray",
                            padding: 3
                        }}>
                        <img src='./image/realme.png' height='50px' />
                        <div>
                            <Typography variant='h6'>Octopus Deploy</Typography>
                            <Typography variant='body2'>A unified DevOps automation platform for your team.</Typography>
                        </div>
                    </Box>
                </Grid>
            </Grid>
            <Footer />
        </>
    )
}

export default Services