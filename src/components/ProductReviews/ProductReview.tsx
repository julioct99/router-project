import { Avatar, Card, CardContent, CardHeader, Rating, Typography } from '@mui/material'

import { Review } from '../../types/product'

interface ProductReviewProps {
  review: Review
}

const ProductReview: React.FunctionComponent<ProductReviewProps> = ({ review }) => {
  return (
    <Card>
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
