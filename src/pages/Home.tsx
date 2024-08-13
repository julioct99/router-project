import { Fab, Typography } from '@mui/material'
import { Link, useLoaderData } from 'react-router-dom'

import { Add } from '@mui/icons-material'
import Layout from '../components/layout/Layout'
import { Product } from '../types/product'
import { ProductList } from '../components/ProductList'

const Home = () => {
  const products = useLoaderData() as Product[]

  return (
    <Layout>
      <Typography variant='h2'>Products</Typography>
      <ProductList products={products} />
      <Link to='new'>
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

export default Home
