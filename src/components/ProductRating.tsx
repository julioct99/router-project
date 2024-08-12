import { Box, Rating, Typography } from '@mui/material'

interface ProductRatingProps {
  rating: number
}

const ProductRating: React.FunctionComponent<ProductRatingProps> = ({ rating }) => {
  return (
    <Box sx={{ display: 'flex', gap: '8px' }}>
      <Rating precision={0.5} value={rating} readOnly size='small' />
      <Typography variant='body2' color='text.secondary'>
        {rating}
      </Typography>
    </Box>
  )
}

export default ProductRating
