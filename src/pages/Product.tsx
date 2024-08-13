import { Box, Chip, Grid, Stack, Typography } from '@mui/material'

import Layout from '../components/layout/Layout'
import { Product } from '../types/product'
import ProductRating from '../components/ProductRating'
import { useLoaderData } from 'react-router-dom'

const ProductPage = () => {
  const product = useLoaderData() as Product

  return (
    <Layout>
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
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <ProductRating rating={product.rating} size='large' />
                <Typography variant='body2' color='text.secondary'>
                  ({product.reviews.length} reviews)
                </Typography>
              </div>
              <Typography variant='h4'>${product.price}</Typography>
              <div style={{ display: 'flex', gap: 8 }}>
                {product.tags.map((tag) => (
                  <Chip key={tag} label={tag} color='info' />
                ))}
              </div>
              <Typography variant='body1'>{product.description}</Typography>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  )
}

export default ProductPage
