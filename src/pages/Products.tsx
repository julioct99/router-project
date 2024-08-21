import { Fab, Typography } from '@mui/material'

import { Add } from '@mui/icons-material'
import Layout from '../components/layout/Layout'
import { Link } from '@tanstack/react-router'
import { Product } from '../types/product'
import { ProductList } from '../components/ProductList'
import { productsIndexRoute } from '../router'

const ProductsPage = () => {
  const products = productsIndexRoute.useLoaderData() as Product[]

  return (
    <Layout>
      <Typography variant='h2'>Products</Typography>
      <ProductList products={products} />
      <Link to='/products/new'>
        <Fab
          title='New product'
          sx={{ position: 'fixed', bottom: 32, right: 32 }}
          color='primary'
        >
          <Add />
        </Fab>
      </Link>
    </Layout>
  )
}

export default ProductsPage
