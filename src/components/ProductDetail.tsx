import { Chip, Grid, Stack, Typography } from '@mui/material'

import { Product } from '../types/product'
import ProductRating from './ProductRating'

interface ProductDetailProps {
  product: Product
}

const ProductDetail: React.FunctionComponent<ProductDetailProps> = ({ product }) => {
  return (
    <Grid container spacing={2} sx={{ marginTop: 2 }}>
      <Grid item xs={12} md={6} sx={{ display: 'flex' }}>
        <img
          style={{
            maxWidth: '100%',
            maxHeight: 500,
            objectFit: 'cover',
            margin: '0 auto',
          }}
          src={product.images[0]}
          alt={product.title}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <Stack spacing={1}>
          <Typography variant='h2'>{product.title}</Typography>
          <ProductRating rating={product.rating} size='large' />
          <Typography variant='h4'>${product.price}</Typography>
          <Typography variant='body1'>{product.description}</Typography>
          <div style={{ display: 'flex', gap: 8 }}>
            {product.tags.map((tag) => (
              <Chip key={tag} label={tag} color='info' />
            ))}
          </div>
        </Stack>
      </Grid>
    </Grid>
  )
}

export default ProductDetail
