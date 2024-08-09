import { API } from './settings'
import axios from 'axios'

export const fetchProducts = async () => {
  const url = `${API.BASE_URL}/products`
  const response = await axios.get(url)
  return response.data
}

export const fetchProductById = async (id: number) => {
  if (!id) return null

  const url = `${API.BASE_URL}/products/${id}`
  const response = await axios.get(url)
  return response.data
}
