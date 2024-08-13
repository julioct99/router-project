import { Grid, Stack } from '@mui/material'
import { useNavigate, useSearchParams } from 'react-router-dom'

import { Product } from '../../types/product'
import ProductCard from './ProductCard'
import SearchBar from '../Searchbar'

interface ProductListProps {
  products: Product[]
}

const ProductList: React.FunctionComponent<ProductListProps> = ({ products }) => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()

  const testSearch = (value: string) => {
    navigate(`/products?search=${value}`)
  }

  return (
    <Stack spacing={2}>
      <SearchBar defaultValue={searchParams.get('search') || ''} onSearch={testSearch} />
      <Grid container spacing={3} style={{ marginLeft: '-24px' }}>
        {products.map((product) => (
          <Grid item key={product.id} xs={3}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Stack>
  )
}

export default ProductList
