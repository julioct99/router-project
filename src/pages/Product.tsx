import { Product } from '../types/product'
import { useLoaderData } from 'react-router-dom'

const ProductPage = () => {
  const product = useLoaderData() as Product

  console.log({ product })

  return (
    <>
      <h1>Product detail</h1>
    </>
  )
}

export default ProductPage
