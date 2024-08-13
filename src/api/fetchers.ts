import { Product, ProductListResponse } from '../types/product'

import { API } from './settings'
import axios from 'axios'

interface ProductListQueryParams {
  search?: string
}

export const fetchProducts = async (queryParams: ProductListQueryParams) => {
  let url = `${API.BASE_URL}/products`

  if (queryParams.search) {
    url += `/search?q=${queryParams.search}`
  }

  const response = await axios.get<ProductListResponse>(url)
  return response.data.products
}

export const fetchProductById = async (id: number | undefined) => {
  if (!id) return null

  const url = `${API.BASE_URL}/products/${id}`
  const response = await axios.get<Product>(url)
  return response.data
}
