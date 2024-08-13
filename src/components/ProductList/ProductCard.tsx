import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'

import { Link } from 'react-router-dom'
import { Product } from '../../types/product'
import ProductRating from '../ProductRating'

interface ProductCardProps {
  product: Product
}

const ProductCard: React.FunctionComponent<ProductCardProps> = ({ product }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      {/* @ts-expect-error: The 'LinkComponent' prop is not recognized by the 'CardActionArea' prop interface */}
      <CardActionArea LinkComponent={Link} to={`/products/${product.id}`}>
        <CardMedia
          component='img'
          image={product.images[0]}
          alt='Product image'
          sx={{ aspectRatio: '1 / 1' }}
        />
        <CardContent>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'baseline',
            }}
          >
            <Typography gutterBottom variant='h6'>
              {product.title}
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              ${product.price}
            </Typography>
          </div>
          <ProductRating rating={product.rating} />
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default ProductCard
