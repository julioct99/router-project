import { Button, TextField } from '@mui/material'

import { Add } from '@mui/icons-material'
import { createProduct } from '../api/products'
import { toast } from 'react-toastify'

const ProductForm = () => {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const dataObject = Object.fromEntries(formData.entries())

    toast.success('New product created! (MOCK)')
    toast.info(<pre>{JSON.stringify(dataObject, null, 2)}</pre>)

    const response = await createProduct(dataObject)
    return response
  }

  return (
    <form
      method='post'
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
      }}
      onSubmit={handleSubmit}
    >
      <TextField type='text' name='name' label='Name' />
      <TextField type='text' name='description' label='Description' />
      <TextField type='number' name='price' label='Price' />
      <Button variant='contained' type='submit' startIcon={<Add />}>
        Create product
      </Button>
    </form>
  )
}

export default ProductForm
