import { Button, TextField, Typography } from '@mui/material'

import { Form } from 'react-router-dom'
import GoBackButton from '../components/GoBackButton'
import Layout from '../components/layout/Layout'

const NewProductPage = () => {
  return (
    <Layout>
      <GoBackButton />
      <Typography variant='h2'>New Product</Typography>
      <Form method='post'>
        <TextField type='text' name='name' label='Name' />
        <TextField type='number' name='price' label='Price' />
        <Button type='submit'>Create</Button>
      </Form>
    </Layout>
  )
}

export default NewProductPage
