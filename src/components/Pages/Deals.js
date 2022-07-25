import { Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, FormControlLabel, Grid, IconButton, Link, Radio, RadioGroup, Typography } from '@mui/material'
import React from 'react'
import Footer from '../Layout/Footer'
import Navbar from '../Layout/Navbar'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
const Deals = () => {
  return (

    <>
      <Navbar />
      <Box className='container-fluid' display={'flex'}>
        <Box className='left-sidebar' width={'25%'} p={'25px'}>
          <Typography variant='h4' color={'secondary'}>Deals</Typography>
          <Link href='#' underline={"hover"} variant='button' display='block'>Deals of the day</Link>
          <Link href='#' underline={"hover"} variant='button' display='block'>Flash sales</Link>
          <Link href='#' underline={"hover"} variant='button' display='block'>Most Popular</Link>

          <Typography variant='h4' color={'secondary'}>Prices</Typography>
          <RadioGroup name='prices'>
            <FormControlLabel value='a' control={<Radio />} label="Below $25" />
            <FormControlLabel value='b' control={<Radio />} label="$25 - $100" />
            <FormControlLabel value='c' control={<Radio />} label="$100 - $250" />
            <FormControlLabel value='d' control={<Radio />} label="$250 - $1000" />
            <FormControlLabel value='e' control={<Radio />} label="Above $1000" />

          </RadioGroup>
        </Box>
        <Box className='main-content' width={'75%'} padding={'25px'}>
          <Grid container spacing={4}>
            <Grid item xs={4} sx={{ backgroundColor: 'primary'}} padding={'25px'}>
              <Card sx={{ maxWidth: 345, shadow:'large' }} raised>
                <CardHeader
                  title="Real Me"
                  subheader="Rs. 30000"
                />
                <CardMedia
                  component="img"
                  height="194"
                  image="./image/realme.png"
                  alt="Paella dish"
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    A very smart phone at affordable price with functions of deluxe phone
                  </Typography>
                </CardContent>
                <Box display={'flex'} justifyContent={'space-between'}>
                  <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                      <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                      <ShareIcon />
                    </IconButton>
                  </CardActions>
                  <Button size = {"small"} variant='contained'>View Details</Button>
                </Box>

              </Card>
            </Grid>
            <Grid item xs={4} padding={'25px'}>
              <Card sx={{ maxWidth: 345, shadow:'large' }} raised>
                <CardHeader
                  title="Real Me"
                  subheader="Rs. 30000"
                />
                <CardMedia
                  component="img"
                  height="194"
                  image="./image/realme.png"
                  alt="Paella dish"
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    A very smart phone at affordable price with functions of deluxe phone
                  </Typography>
                </CardContent>
                <Box display={'flex'} justifyContent={'space-between'}>
                  <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                      <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                      <ShareIcon />
                    </IconButton>
                  </CardActions>
                  <Button variant='text'>View Details</Button>
                </Box>

              </Card></Grid>
            <Grid item xs={4} padding={'25px'}>
              <Card sx={{ maxWidth: 345, shadow:'large' }} padding={'25px'} raised>
                <CardHeader
                  title="Real Me"
                  subheader="Rs. 30000"
                />
                <CardMedia
                  component="img"
                  height="194"
                  image="./image/realme.png"
                  alt="Paella dish"
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    A very smart phone at affordable price with functions of deluxe phone
                  </Typography>
                </CardContent>
                <Box display={'flex'} justifyContent={'space-between'}>
                  <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                      <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                      <ShareIcon />
                    </IconButton>
                  </CardActions>
                  <Button variant='text'>View Details</Button>
                </Box>

              </Card></Grid>
            <Grid item xs={4} padding={'25px'}>
              <Card sx={{ maxWidth: 345, shadow:'large' }} padding={'25px'} raised>
                <CardHeader
                  title="Real Me"
                  subheader="Rs. 30000"
                />
                <CardMedia
                  component="img"
                  height="194"
                  image="./image/realme.png"
                  alt="Paella dish"
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    A very smart phone at affordable price with functions of deluxe phone
                  </Typography>
                </CardContent>
                <Box display={'flex'} justifyContent={'space-between'}>
                  <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                      <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                      <ShareIcon />
                    </IconButton>
                  </CardActions>
                  <Button variant='text'>View Details</Button>
                </Box>

              </Card></Grid>
            <Grid item xs={4} padding={'25px'}>
              <Card sx={{ maxWidth: 345, shadow:'large' }} padding={'25px'} raised>
                <CardHeader
                  title="Real Me"
                  subheader="Rs. 30000"
                />
                <CardMedia
                  component="img"
                  height="194"
                  image="./image/realme.png"
                  alt="Paella dish"
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    A very smart phone at affordable price with functions of deluxe phone
                  </Typography>
                </CardContent>
                <Box display={'flex'} justifyContent={'space-between'}>
                  <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                      <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                      <ShareIcon />
                    </IconButton>
                  </CardActions>
                  <Button variant='text'>View Details</Button>
                </Box>

              </Card></Grid>
            <Grid item xs={4} padding={'25px'}>
              <Card sx={{ maxWidth: 345, }} padding={'25px'} raised>
                <CardHeader
                  title="Real Me"
                  subheader="Rs. 30000"
                />
                <CardMedia
                  component="img"
                  height="194"
                  image="./image/realme.png"
                  alt="Paella dish"
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    A very smart phone at affordable price with functions of deluxe phone
                  </Typography>
                </CardContent>
                <Box display={'flex'} justifyContent={'space-between'}>
                  <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                      <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                      <ShareIcon />
                    </IconButton>
                  </CardActions>
                  <Button variant='text'>View Details</Button>
                </Box>

              </Card></Grid>
          </Grid>
        </Box>
      </Box>


      <Footer />
    </>
  )
}

export default Deals