import { createProduct } from '../api/products'
import { toast } from 'react-toastify'

export const createProductFromFormData = async (formData: FormData) => {
  const dataObject = Object.fromEntries(formData.entries())
  toast.success('New product created! (MOCK)')
  toast.info(<pre>{JSON.stringify(dataObject, null, 2)}</pre>)

  const response = await createProduct(dataObject)
  return response
}
