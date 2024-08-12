import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  Rating,
  Typography,
} from '@mui/material'

import { Review } from '../../types/product'

interface ProductReviewProps {
  review: Review
}

const ProductReview: React.FunctionComponent<ProductReviewProps> = ({ review }) => {
  return (
    <Card>
      {/* <Avatar
        src={`https://robohash.org/${review.reviewerEmail}`}
        sx={{ backgroundColor: 'lightblue' }}
      />
      <Rating value={review.rating} size='small' readOnly />
      <Box>
        <Typography variant='body2'>{review.reviewerName}</Typography>
      </Box>
      <div>
        <Typography variant='h6'>{review.comment}</Typography>
      </div> */}
      <CardHeader
        avatar={
          <Avatar
            src={`https://robohash.org/${review.reviewerEmail}`}
            sx={{ backgroundColor: 'lightblue' }}
          />
        }
        title={review.reviewerName}
        subheader={new Date(review.date).toLocaleDateString()}
        action={<Rating value={review.rating} size='small' readOnly />}
      />
      <CardContent>
        <Typography variant='h6'>{review.comment}</Typography>
      </CardContent>
    </Card>
  )
}

export default ProductReview
