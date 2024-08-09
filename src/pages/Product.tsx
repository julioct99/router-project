import { useLoaderData } from 'react-router-dom'

const Product = () => {
  const product = useLoaderData()

  return (
    <>
      <h1>Product detail</h1>
      <pre>{JSON.stringify(product, null, 2)}</pre>
    </>
  )
}

export default Product
