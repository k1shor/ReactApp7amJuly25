import React from 'react'
import { AppBar, Button, Icon, Typography } from '@mui/material'

const MaterialDemo = () => {
  return (
    <>
    <AppBar color='primary' position='static'>
        <Typography variant='h4' textAlign={'center'} color='secondary'>
            APPBAR HEADING



        </Typography>

        </AppBar>
        <Button variant='contained' color='secondary' className='mt-5 ms-5'>Click me</Button>
    
    </>
  )
}

export default MaterialDemo