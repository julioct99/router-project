import { Box } from '@mui/material'
import Layout from '../components/layout/Layout'
import ProductDetail from '../components/ProductDetail'

const ProductPage = () => {
  // TODO
  // const product = useLoaderData() as Product
  const product: unknown = {}

  return (
    <Layout>
      <Box>
        <ProductDetail product={product} />
      </Box>
    </Layout>
  )
}

export default ProductPage
