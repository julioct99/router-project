import { Box } from '@mui/material'
import Layout from '../components/layout/Layout'
import { Product } from '../types/product'
import ProductDetail from '../components/ProductDetail'
import { productDetailsRoute } from '../router'

const ProductPage = () => {
  const product = productDetailsRoute.useLoaderData() as Product

  return (
    <Layout>
      <Box>
        <ProductDetail product={product} />
      </Box>
    </Layout>
  )
}

export default ProductPage
