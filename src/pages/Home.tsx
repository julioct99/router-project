import { useLoaderData } from 'react-router-dom'

const Home = () => {
  const products = useLoaderData()

  return (
    <>
      <h1>Home page</h1>
      <pre>{JSON.stringify(products, null, 2)}</pre>
    </>
  )
}

export default Home
