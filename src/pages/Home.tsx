import { Product } from '../types/product'
import { ProductList } from '../components/ProductList'
import { Typography } from '@mui/material'
import { useLoaderData } from 'react-router-dom'

const Home = () => {
  const products = useLoaderData() as Product[]

  return (
    <>
      <Typography variant='h2'>Products</Typography>
      <ProductList products={products} />
    </>
  )
}

export default Home
