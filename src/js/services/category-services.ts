import { request } from 'js/helpers'

export const categoryServices = {
  getAllCategories,
  getLevelOneCategories,
  getLevelTwoCategories,
  getLevelThreeCategories,
  addCategory,
  updateCategory,
  deleteCategory,
}

function getAllCategories() {
  return request({
    method: 'GET',
    url: 'product-category',
  })
}

function getLevelOneCategories(param: { tree: boolean; root: boolean }) {
  return request({
    method: 'GET',
    url: 'product-category',
    param,
  })
}

function getLevelTwoCategories(categoryId: string) {
  return request({
    method: 'GET',
    url: `product-category/${categoryId}`,
  })
}

function getLevelThreeCategories(categoryId: string) {
  return request({
    method: 'GET',
    url: `product-category/${categoryId}`,
  })
}

function addCategory(category: { name: string }) {
  return request({
    method: 'POST',
    url: 'product-category',
    param: category,
    content_type: 'json',
  })
}

function updateCategory(categoryId: string, category: { name: string }) {
  return request({
    method: 'PUT',
    url: `product-category/${categoryId}`,
    param: category,
    content_type: 'json',
  })
}

function deleteCategory(categoryId: string) {
  return request({
    method: 'DELETE',
    url: `product-category/${categoryId}`,
  })
}
