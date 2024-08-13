import { Button, TextField } from '@mui/material'

import { Add } from '@mui/icons-material'
import { Form } from 'react-router-dom'

const ProductForm = () => {
  return (
    <Form
      method='post'
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
      }}
    >
      <TextField type='text' name='name' label='Name' />
      <TextField type='text' name='description' label='Description' />
      <TextField type='number' name='price' label='Price' />
      <Button variant='contained' type='submit' startIcon={<Add />}>
        Create product
      </Button>
    </Form>
  )
}

export default ProductForm
