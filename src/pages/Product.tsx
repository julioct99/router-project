import { Box } from '@mui/material'
import GoBackButton from '../components/GoBackButton'
import Layout from '../components/layout/Layout'
import { Product } from '../types/product'
import ProductDetail from '../components/ProductDetail'
import { useLoaderData } from 'react-router-dom'

const ProductPage = () => {
  const product = useLoaderData() as Product

  return (
    <Layout>
      <Box>
        <GoBackButton />
        <ProductDetail product={product} />
      </Box>
    </Layout>
  )
}

export default ProductPage
