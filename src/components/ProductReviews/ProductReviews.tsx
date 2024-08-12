import { Box, Grid, Typography } from '@mui/material'

import { Product } from '../../types/product'
import ProductReview from './ProductReview'

interface ProductReviewsProps {
  product: Product
}

const ProductReviews: React.FunctionComponent<ProductReviewsProps> = ({ product }) => {
  return (
    <Box>
      <Typography variant='h3' gutterBottom>
        Reviews
      </Typography>
      <Grid container spacing={2}>
        {product.reviews.map((review) => (
          <Grid item key={`${review.comment}-${review.reviewerEmail}`} xs={4}>
            <ProductReview
              review={review}
              key={`${review.comment}-${review.reviewerEmail}`}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default ProductReviews
