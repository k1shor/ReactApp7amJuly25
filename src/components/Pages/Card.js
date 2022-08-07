import { Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Grid, IconButton, Typography } from '@mui/material'
import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { API } from '../../config';
import { Link } from 'react-router-dom';

const DisplayCard = ({item}) => {
  return (
    <>
        <Grid item xs={4} sx={{ backgroundColor: 'primary'}} padding={'25px'}>
              <Card sx={{ maxWidth: 345, shadow:'large' }} raised>
                <CardHeader
                  title={item.product_name}
                  subheader={`Rs. ${item.product_price}`}
                />
                <CardMedia
                  component="img"
                  height="194"
                  image={`${API}/${item.product_image}`}
                  alt={item.product_name}
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary" className="text-truncate">
                        {item.product_description}
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
                  <Link to={`/product/${item._id}`}><Button size = {"small"} variant='contained'>View Details</Button></Link>
                </Box>

              </Card>
            </Grid>
    </>
  )
}

export default DisplayCard