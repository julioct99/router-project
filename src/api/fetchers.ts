import { API } from './settings'
import axios from 'axios'

export const fetchProducts = async () => {
  const url = `${API.BASE_URL}/products`
  const response = await axios.get(url)
  return response.data
}
