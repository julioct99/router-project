import { Product, ProductListResponse, ProductSearch } from '../types/product'

import { API } from './settings'
import { addQueryParamToUrl } from '../utils/api'
import axios from 'axios'

export const fetchProducts = async (queryParams: ProductSearch = {}) => {
  let url = `${API.BASE_URL}/products`

  if (queryParams.search) {
    url += `/search`
    url = addQueryParamToUrl(url, 'q', queryParams.search)
  }

  if (queryParams.sortBy) {
    url = addQueryParamToUrl(url, 'sortBy', queryParams.sortBy)
    url = addQueryParamToUrl(url, 'order', queryParams.order || 'asc')
  }

  const response = await axios.get<ProductListResponse>(url)
  return response.data.products
}

export const fetchProductById = async (id: number | string | undefined) => {
  if (!id) return null

  const url = `${API.BASE_URL}/products/${id}`
  const response = await axios.get<Product>(url)
  return response.data
}

export const createProduct = async (product: Partial<Product>) => {
  const url = `${API.BASE_URL}/products/add`
  const response = await axios.post<Partial<Product>>(url, product)
  return response.data
}
