import { request } from 'js/helpers'

export const categoryServices = {
  getCategories,
}

function getCategories(params: { tree: true }) {
  return request({
    method: 'GET',
    url: 'product-category',
    params,
  })
}
