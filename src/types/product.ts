import { z } from 'zod'

export interface ProductListResponse {
  products: Product[]
  total: number
  skip: number
  limit: number
}

export interface Product {
  id: number
  title: string
  description: string
  category: string
  price: number
  discountPercentage: number
  rating: number
  stock: number
  tags: string[]
  brand?: string
  sku: string
  weight: number
  dimensions: Dimensions
  warrantyInformation: string
  shippingInformation: string
  availabilityStatus: string
  reviews: Review[]
  returnPolicy: string
  minimumOrderQuantity: number
  meta: Meta
  images: string[]
  thumbnail: string
}

export interface Dimensions {
  width: number
  height: number
  depth: number
}

export interface Review {
  rating: number
  comment: string
  date: string
  reviewerName: string
  reviewerEmail: string
}

export interface Meta {
  createdAt: string
  updatedAt: string
  barcode: string
  qrCode: string
}

export const productSearchSchema = z.object({
  search: z.string().optional(),
  sortBy: z.enum(['title', 'price']).optional(),
  order: z.enum(['asc', 'desc']).optional(),
})

export type ProductSearch = z.infer<typeof productSearchSchema>
