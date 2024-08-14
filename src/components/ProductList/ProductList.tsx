import { Grid, Stack } from '@mui/material'
import SortTypeSelector, { SortValue } from '../SortTypeSelector'

import { Product } from '../../types/product'
import ProductCard from './ProductCard'
import SearchBar from '../Searchbar'
import { useSearchParams } from 'react-router-dom'

interface ProductListProps {
  products: Product[]
}

const ProductList: React.FunctionComponent<ProductListProps> = ({ products }) => {
  const [searchParams, setSearchParams] = useSearchParams()

  const handleSearch = (value: string) => {
    value ? searchParams.set('search', value) : searchParams.delete('search')
    setSearchParams(searchParams)
  }

  const getSortValue = (): SortValue => {
    const sortBy = searchParams.get('sortBy') as SortValue['type']
    const order = searchParams.get('order') as SortValue['direction']
    return { type: sortBy || 'default', direction: order || 'default' }
  }

  return (
    <Stack spacing={2}>
      <SearchBar
        defaultValue={searchParams.get('search') || ''}
        onSearch={handleSearch}
      />
      <SortTypeSelector defaultValue={getSortValue()} />
      <Grid container spacing={3} style={{ marginLeft: '-24px' }}>
        {products.map((product) => (
          <Grid item key={product.id} lg={3} md={4} sm={6} xs={12}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Stack>
  )
}

export default ProductList
