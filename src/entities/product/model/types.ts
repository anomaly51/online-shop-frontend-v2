export type Product = {
  id: number
  title: string
  description: string | null
  price: number
  is_active: boolean
  image_url: string | null
  stock: number
  average_rating: number
  reviews_count: number
  favorites_count: number
  characteristics: Record<string, string>
  color_variants: ProductColorVariant[]
  created_at: string
  categories: ProductCategory[]
}

export type ProductCategory = {
  id: number
  name: string
  slug: string
}

export type ProductColorVariant = {
  name: string
  hex: string
  stock: number
}
