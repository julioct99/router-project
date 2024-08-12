import { Grid } from '@mui/material'
import { Product } from '../../types/product'
import ProductCard from './ProductCard'

interface ProductListProps {
  products: Product[]
}

const ProductList: React.FunctionComponent<ProductListProps> = ({ products }) => {
  return (
    <Grid container spacing={3}>
      {products.map((product) => (
        <Grid item key={product.id} xs={3}>
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  )
}

export default ProductList
