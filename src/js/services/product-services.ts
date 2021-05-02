import { request } from 'js/helpers'

export const productServices = {
  createProduct,
  getProducts,
  getProduct,
  updateProduct,
}

interface ProductVariants {
  productOption: string
  optionValues: string
}

interface Product {
  name: string
  description: string
  price: Number
  comparePrice: Number
  costPerItem: Number
  sku: string
  barcode: string
  quantity: Number
  physicalQuantity: boolean
  weight: Number
  productCategoryId: Number
  images: any
  productOptions: ProductVariants
}

function createProduct(params: Product) {
  return request({
    method: 'POST',
    url: 'product',
    param: params,
    content_type: 'json',
  })
}

function updateProduct(params: Product, productId: number) {
  return request({
    method: 'PUT',
    url: `product/${productId}`,
    param: params,
    content_type: 'json',
  })
}

function getProducts(params: any) {
  return request({
    method: 'GET',
    url: 'product',
    param: params,
  })
}

function getProduct(productId: number) {
  return request({
    method: 'GET',
    url: `product/${productId}`,
  })
}
