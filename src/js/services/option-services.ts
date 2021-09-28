import { request } from 'js/helpers'

export const optionServices = {
  getAllOptions,
  addOption,
  updateOption,
  deleteOption,
}

function getAllOptions() {
  return request({
    method: 'GET',
    url: 'product-options-type',
  })
}

function addOption(option: { name: string }) {
  return request({
    method: 'POST',
    url: 'product-options-type',
    param: option,
    content_type: 'json',
  })
}

function updateOption(optionId: number, option: { name: string }) {
  return request({
    method: 'POST',
    url: `product-options-type/${optionId}/ `,
    param: option,
    content_type: 'json',
  })
}

function deleteOption(optionId: number) {
  return request({
    method: 'DELETE',
    url: `product-options-type/${optionId}/`,
  })
}
