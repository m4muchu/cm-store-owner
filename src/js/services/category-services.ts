import { request } from 'js/helpers'

export const categoryServices = {
  getCategories,
  addCategory,
  updateCategory,
  deleteCategory,
}

function getCategories(param: { tree: boolean; root: boolean }) {
  return request({
    method: 'GET',
    url: 'product-category',
    param,
  })
}

function addCategory(category: { name: string }) {
  console.log('reaced services++++++++++++++', category)
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
