import { Stack, Typography } from '@mui/material'

import Layout from '../components/layout/Layout'
import ProductForm from '../components/ProductForm'

const NewProductPage = () => {
  return (
    <Layout>
      <Stack spacing={2}>
        <Typography variant='h2'>New Product</Typography>
        <ProductForm />
      </Stack>
    </Layout>
  )
}

export default NewProductPage
