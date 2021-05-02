import { request } from 'js/helpers'

export const categoryServices = {
  getCategories,
}

function getCategories() {
  return request({
    method: 'GET',
    url: 'product-category',
  })
}
