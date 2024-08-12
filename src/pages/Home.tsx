import { Product } from '../types/product'
import { ProductList } from '../components/ProductList'
import { useLoaderData } from 'react-router-dom'

const Home = () => {
  const products = useLoaderData() as Product[]

  console.log({ products })

  return (
    <>
      <h1>Home page</h1>
      <ProductList products={products} />
    </>
  )
}

export default Home
