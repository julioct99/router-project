import { Box, Chip, Grid, Stack, Typography } from '@mui/material'

import { Product } from '../types/product'
import ProductRating from '../components/ProductRating'
import ProductReviews from '../components/ProductReviews/ProductReviews'
import { useLoaderData } from 'react-router-dom'

const ProductPage = () => {
  const product = useLoaderData() as Product

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={4} sx={{ display: 'flex' }}>
          <img
            style={{ maxWidth: '100%', maxHeight: 450, margin: '0 auto' }}
            src={product.images[0]}
            alt={product.title}
          />
        </Grid>
        <Grid item xs={8}>
          <Stack spacing={1}>
            <Typography variant='h2'>{product.title}</Typography>
            <div
              style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 16 }}
            >
              <ProductRating rating={product.rating} size='large' />
              <Typography variant='body2' color='text.secondary'>
                ({product.reviews.length} reviews)
              </Typography>
            </div>
            <Typography variant='h4'>${product.price}</Typography>
            <div style={{ display: 'flex', gap: 8 }}>
              {product.tags.map((tag) => (
                <Chip key={tag} label={tag} />
              ))}
            </div>
            <Typography variant='body1'>{product.description}</Typography>
          </Stack>
        </Grid>
      </Grid>
      <ProductReviews product={product} />
    </Box>
  )
}

export default ProductPage
