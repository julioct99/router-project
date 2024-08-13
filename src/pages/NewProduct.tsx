import { Stack, Typography } from '@mui/material'

import GoBackButton from '../components/GoBackButton'
import Layout from '../components/layout/Layout'
import ProductForm from '../components/ProductForm'

const NewProductPage = () => {
  return (
    <Layout>
      <GoBackButton />
      <Stack spacing={2}>
        <Typography variant='h2'>New Product</Typography>
        <ProductForm />
      </Stack>
    </Layout>
  )
}

export default NewProductPage
