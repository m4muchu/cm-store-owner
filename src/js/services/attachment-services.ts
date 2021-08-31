import { request } from 'js/helpers/api'

export const attachmentServices = {
  uploadImages,
  removeImage,
}

function uploadImages(details: any) {
  return request({
    method: 'POST',
    url: 'images',
    param: details,
  })
}

function removeImage(imageId: number) {
  return request({
    method: 'DELETE',
    url: `images/${imageId}`,
  })
}
