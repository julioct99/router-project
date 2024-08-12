import { Box, Rating, Typography } from '@mui/material'

interface ProductRatingProps {
  rating: number
  size: 'small' | 'medium' | 'large'
}

const ProductRating: React.FunctionComponent<ProductRatingProps> = ({
  rating,
  size = 'small',
}) => {
  return (
    <Box sx={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
      <Rating precision={0.5} value={rating} readOnly size={size} />
      <Typography variant='body2' color='text.secondary'>
        {rating}
      </Typography>
    </Box>
  )
}

export default ProductRating
