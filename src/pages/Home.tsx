import Layout from '../components/layout/Layout'
import { Product } from '../types/product'
import { ProductList } from '../components/ProductList'
import { Typography } from '@mui/material'
import { useLoaderData } from 'react-router-dom'

const Home = () => {
  const products = useLoaderData() as Product[]

  return (
    <Layout>
      <Typography variant='h2'>Products</Typography>
      <ProductList products={products} />
    </Layout>
  )
}

export default Home
