import React, { useState, useEffect } from 'react'
import { Button, Row, Col, Form, Spinner } from 'react-bootstrap'
import Select from 'react-select'
import { isEmpty, isArray } from 'lodash'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { find } from 'lodash'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import { productServices, categoryServices, attachmentServices } from 'js/services'
import { EditorComponent, FileUploadComponent, ImageSortable } from 'js/components/common'
import classnames from 'classnames'
import { history } from 'js/helpers/history'
import 'react-toastify/dist/ReactToastify.css'

const variantOptionsData = [
  { value: 'size', label: 'Size' },
  { value: 'color', label: 'Color' },
  { value: 'material', label: 'Material' },
]

export const CreateProduct = ({ match: { params } }) => {
  const [productDetails, setProductDetails] = useState({})
  const [hasVariants, setHasVariants] = useState(false)
  const [variantOptions, setVariantOptions] = useState([])
  const [productVariants, setProductVariants] = useState('')
  const [loading, setLoading] = useState(false)
  const [categories, setCategories] = useState([])
  const [fileUploadLoading, setFileUploadLoading] = useState(false)
  const [selectedImages, setSelectedImages] = useState([])

  console.log('product variants++++++++++++', productVariants)

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    price: Yup.string().required('Price is required'),
    comparePrice: Yup.string().required('Compare price is required'),
    costPerItem: Yup.string().required('Cost per item is required'),
    quantity: Yup.string().required('Quantity is required'),
  })

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(validationSchema),
  })

  const apiCalls = {
    createProductApi: productDetails => {
      setLoading(true)
      productServices
        .createProduct(productDetails)
        .then(response => {
          setLoading(false)
          toast.success('Created Successfully')
          history.replace(`/admin/edit-product/${response.product.id}`)
        })
        .catch(() => {
          toast.error('Something went wrong!')
          setLoading(false)
        })
    },
    updateProductApi: (productDetails, productId) => {
      setLoading(true)
      productServices
        .updateProduct(productDetails, productId)
        .then(() => {
          toast.success('Updated Successfully')
          setLoading(false)
          history.push('/admin/products')
        })
        .catch(() => {
          toast.error('Something went wrong!')
          setLoading(false)
        })
    },
    getProductApi: productId => {
      productServices
        .getProduct(productId)
        .then(response => {
          const { product } = response

          if (!isEmpty(product)) {
            if (!isEmpty(product.productOptions)) {
              const options = product.productOptions.map(option => {
                let productOption = option.productOption
                const capitilizedProductOption =
                  productOption.charAt(0).toUpperCase() + productOption.slice(1)

                return {
                  optionValues: option.optionValues,
                  productOption: {
                    label: capitilizedProductOption,
                    value: productOption,
                  },
                }
              })

              setVariantOptions(options)
              delete product.productOptions
              setHasVariants(true)
            }

            if (!isEmpty(product.images)) {
              setSelectedImages(product.images)
            }

            if (!isEmpty(product.productVariants)) {
              setProductVariants(product.productVariants)

              delete product.productVariants
            }
            setProductDetails(product)
          }
        })
        .catch(() => {
          toast.error('Something went wrong!')
          console.log('something went wrong while fetching product details')
        })
    },
    getCategoryApi: productDetails => {
      categoryServices
        .getCategories({ tree: true })
        .then(response => {
          const { categories } = response

          setCategories(categories)
        })
        .catch(() => {
          console.log('something went wrong while fetching categories')
        })
    },
  }

  useEffect(() => {
    const { productId } = params
    if (productId) {
      apiCalls.getProductApi(productId)
    }
    apiCalls.getCategoryApi()
  }, [])

  useEffect(() => {
    if (!isEmpty(categories) && !params.productId) {
      setProductDetails(productDetails => ({
        ...productDetails,
        productCategoryId: categories[0].id,
      }))
    }
  }, [categories, params.productId])

  const editorHandleChange = (value, key) => {
    setProductDetails({
      ...productDetails,
      [key]: value,
    })
  }

  const stringToIntParser = item => {
    const parsedItem = item ? Number(item) : 0

    return parsedItem
  }

  const handleSubmitApi = data => {
    const { productId } = params
    const formattedProductOptions =
      !isEmpty(variantOptions) &&
      variantOptions.map(item => {
        return {
          ...item,
          productOption: item.productOption.value,
        }
      })

    const formattedProductVariants =
      !isEmpty(productVariants) &&
      productVariants.map(item => {
        const variant = isArray(item.variant) ? item.variant.join() : item.variant
        return {
          ...item,
          variant,
          price: stringToIntParser(item.price),
          quantity: stringToIntParser(item.quantity),
          sku: item.sku ? item.sku : '',
        }
      })

    let images = []
    if (!isEmpty(selectedImages)) {
      images = selectedImages.map(image => image.id)
    }

    const productData = {
      ...productDetails,
      comparePrice: stringToIntParser(productDetails.comparePrice),
      costPerItem: stringToIntParser(productDetails.costPerItem),
      price: stringToIntParser(productDetails.price),
      quantity: stringToIntParser(productDetails.quantity),
      images,
      physicalQuantity: true,
      weight: 7,
      productOptions: formattedProductOptions,
      productVariants: formattedProductVariants,
      category: productDetails.productCategoryId,
    }

    if (productId) {
      apiCalls.updateProductApi(productData, productId)
    } else {
      apiCalls.createProductApi(productData)
    }
  }

  const combineAll = array => {
    const res = []
    let max = array.length - 1
    const helper = (arr, i) => {
      for (let j = 0, l = array[i].length; j < l; j++) {
        let copy = arr.slice(0)
        copy.push(array[i][j])
        if (i === max) res.push(copy)
        else helper(copy, i + 1)
      }
    }
    helper([], 0)
    return res
  }

  function handleAdd() {
    const values = [...variantOptions]
    values.push({ productOption: '', optionValues: null })
    setVariantOptions(values)
  }

  function handleRemove(index) {
    const values = [...variantOptions]
    values.splice(index, 1)
    setVariantOptions(values)
  }

  const generateOptionValueCombinations = variantOptionsData => {
    const optionValuesCombinations = []
    let result = []

    variantOptionsData.forEach(variantOption => {
      if (!isEmpty(variantOption.optionValues)) {
        const optionValuesArray = variantOption.optionValues.split(',')
        optionValuesCombinations.push(optionValuesArray)
      }
    })

    if (!isEmpty(optionValuesCombinations)) {
      result = combineAll(optionValuesCombinations)

      const productVariantData = result.map((variant, index) => {
        return {
          variant,
        }
      })

      // const clonedProductVariant = [...productVariants]

      // productVariantData.map((variantItem, index) => {
      //   console.log('variantItem222222222222222222222222', variantItem)
      //   clonedProductVariant[index].variant = variantItem.variant
      //   console.log('11111111111111111111111', productVariants[index])
      //   return variantItem
      // })
      console.log('product variants inside generate++++++++++++', productVariantData)
      setProductVariants(productVariantData)
    }
  }

  const onOptionSelectChange = (value, ind, key) => {
    let currentVariantOptions = [...variantOptions]

    if (key === 'productOption') {
      currentVariantOptions[ind].productOption = value
    } else {
      const trimedOptionValues = value.replace(/\s/g, '')
      currentVariantOptions[ind].optionValues = trimedOptionValues
    }

    generateOptionValueCombinations(currentVariantOptions)

    setVariantOptions(currentVariantOptions)
  }

  const onProductVariantsChange = (event, ind) => {
    const name = event.target.name
    const value = event.target.value
    const currentProductVariants = [...productVariants]

    currentProductVariants[ind][name] = value

    setProductVariants(currentProductVariants)
  }

  const uploadImage = response => {
    setSelectedImages(images => [...images, ...response])
  }

  const removeImage = (removedItem, reminingImages) => {
    console.log('selected++++++++++++++')
    // console.log('itesm++++++++++++++++++', items, reminingImages)
    const selectedFile = removedItem[0]
    // console.log('selectedFile++++++++++++++++++', selectedFile)

    attachmentServices.removeImage(selectedFile?.id)
    setSelectedImages([...reminingImages])
  }

  console.log('images++++++++++++++++', selectedImages)

  return (
    <section className="crearte-products-section">
      <div className="generic-page-header">
        <div className="header-data-section">
          <Link
            to={{
              pathname: '/admin/products',
              // state: { current_page }
            }}
            className="back-btn"
          >
            <img src="/images/admin/global/back-button.svg" alt="" />
          </Link>
          <h2 className="page-head my-0">
            {params.productId ? 'Update Product' : 'Create Product'}
          </h2>
        </div>
        <Button className="add-new-btn" onClick={handleSubmit(handleSubmitApi)}>
          {loading ? <Spinner as="span" size="sm" animation="border" /> : 'Save Changes'}
        </Button>
      </div>
      <Row className="mt-5">
        <Col xl={8}>
          <div className="dashboard-activity-card">
            <h5 className="card-title">General Informations</h5>
            <hr className="MuiDivider-root" />
            <div className="card-data-wrapper">
              <div className="input-area">
                <Form.Group>
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    ref={register}
                    type="text"
                    name="name"
                    placeholder="Name"
                    isInvalid={errors.name}
                    onChange={e =>
                      setProductDetails({
                        ...productDetails,
                        [e.target.name]: e.target.value,
                      })
                    }
                    value={productDetails.name}
                  />
                  <Form.Control.Feedback type="invalid" tooltip>
                    {errors?.name?.message}
                  </Form.Control.Feedback>
                </Form.Group>
              </div>
            </div>
            <div className="editor-wrapper">
              <div className={classnames('editor-outer-wrap')}>
                <EditorComponent
                  advertisement
                  id="description"
                  content={productDetails?.description}
                  onChange={content => editorHandleChange(content, 'description')}
                />
              </div>
            </div>
          </div>

          <div className="dashboard-activity-card mt-4">
            <div className="d-flex justify-content-between">
              <h5 className="card-title">Images</h5>
            </div>
            <hr className="MuiDivider-root" />
            <div className="card-data-wrapper">
              <div className="upload-photo-wrap">
                <div className="photo-uploader">
                  <FileUploadComponent
                    entity_type="TripMedia"
                    multiple={true}
                    max={10}
                    accepted={['image/*']}
                    onSuccess={uploadImage}
                    fileUploadLoading={loading => setFileUploadLoading(loading)}
                  />
                </div>
                <ImageSortable
                  files={selectedImages}
                  onRemove={removeImage}
                  lock_sortable={false}
                />
                <div className="drag-drop-text">
                  <h4>
                    <img src="/images/admin/global/arrow.svg" alt="" />
                    Drag and drop photos to best represent your listing.
                  </h4>
                </div>
                <div className="drag-drop-text">
                  <h4>
                    <img src="/images/admin/global/info.svg" alt="" />
                    You can only add upto 10 files at a time, max Size of file should be less than
                    2mb
                  </h4>
                </div>
              </div>
            </div>
          </div>
          {/* pricing */}
          <div className="dashboard-activity-card mt-4">
            <h5 className="card-title">Pricing</h5>
            <hr className="MuiDivider-root" />
            <div className="card-data-wrapper">
              <div className="input-area ">
                <Row>
                  <Col md={6}>
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                      name="price"
                      ref={register}
                      isInvalid={errors.price}
                      type="number"
                      placeholder="0.00"
                      onChange={e =>
                        setProductDetails({
                          ...productDetails,
                          [e.target.name]: e.target.value,
                        })
                      }
                      value={productDetails.price}
                    />
                    <Form.Control.Feedback type="invalid" tooltip>
                      {errors?.price?.message}
                    </Form.Control.Feedback>
                  </Col>
                  <Col md={6}>
                    <Form.Label> Compare at price</Form.Label>
                    <Form.Control
                      name="comparePrice"
                      type="number"
                      ref={register}
                      isInvalid={errors.comparePrice}
                      placeholder="0.00"
                      onChange={e =>
                        setProductDetails({
                          ...productDetails,
                          [e.target.name]: e.target.value,
                        })
                      }
                      value={productDetails.comparePrice}
                    />
                    <Form.Control.Feedback type="invalid" tooltip>
                      {errors?.comparePrice?.message}
                    </Form.Control.Feedback>
                  </Col>
                </Row>
                <hr className="MuiDivider-root card-custom-hr-line" />
                <Row>
                  <Col md={6}>
                    <Form.Label>Cost per item</Form.Label>
                    <Form.Control
                      name="costPerItem"
                      ref={register}
                      isInvalid={errors.costPerItem}
                      type="number"
                      placeholder="0.00"
                      onChange={e =>
                        setProductDetails({
                          ...productDetails,
                          [e.target.name]: e.target.value,
                        })
                      }
                      value={productDetails.costPerItem}
                    />
                    <Form.Control.Feedback type="invalid" tooltip>
                      {errors?.costPerItem?.message}
                    </Form.Control.Feedback>
                    <Form.Text className="text-muted">Customers won’t see this</Form.Text>
                  </Col>
                  {/* <div className="price-card-bottom-data"> */}
                  <Col className="price-card-bottom-data">
                    <p>Margin</p>
                    <p className="price-card-bottom-data-unit">todo</p>
                  </Col>
                  <Col className="price-card-bottom-data">
                    <p>Profit</p>
                    {productDetails && productDetails.price && productDetails.costPerItem && (
                      <p className="price-card-bottom-data-unit">
                        {productDetails.price - productDetails.costPerItem}
                      </p>
                    )}
                  </Col>
                </Row>
              </div>
              {/* <div
                className="cm-admin-checkbox card-sub-title mt-3 cm-dashboard-price-footer "
                md={6}
              >
                <Form.Check
                  type="checkbox"
                  id="tax-check"
                  md={6}
                  className="cc-checkbox"
                  // onChange={(e) => selectAll(e.target.checked)}
                  // checked={state.select_all ? state.select_all : false}
                  label="Charge taxes for this item"
                />
              </div> */}
            </div>
          </div>

          {/* inventory */}
          <div className="dashboard-activity-card mt-4">
            <h5 className="card-title">Inventory</h5>
            <hr className="MuiDivider-root" />
            <div className="card-data-wrapper">
              <div className="input-area ">
                <Row>
                  <Col md={6}>
                    <Form.Label>SKU (Stock Keeping Unit)</Form.Label>
                    <Form.Control
                      name="sku"
                      placeholder="SKU"
                      onChange={e =>
                        setProductDetails({
                          ...productDetails,
                          [e.target.name]: e.target.value,
                        })
                      }
                      value={productDetails.sku}
                    />
                  </Col>
                  <Col md={6}>
                    <Form.Label> Barcode (ISBN, UPC, GTIN, etc)</Form.Label>
                    <Form.Control
                      name="barcode"
                      type="number"
                      placeholder="Barcode"
                      onChange={e =>
                        setProductDetails({
                          ...productDetails,
                          [e.target.name]: e.target.value,
                        })
                      }
                      value={productDetails.barcode}
                    />
                  </Col>
                </Row>
              </div>
              {/* <div className="cm-admin-checkbox card-sub-title mt-4">
                <Form.Check
                  type="checkbox"
                  id="tt-check-lead-select-all"
                  className="cc-checkbox"
                  // onChange={(e) => selectAll(e.target.checked)}
                  // checked={state.select_all ? state.select_all : false}
                  label="
                  Track quantity"
                />
                <Form.Check
                  type="checkbox"
                  id="tt-check-lead-select-all"
                  className="cc-checkbox"
                  // onChange={(e) => selectAll(e.target.checked)}
                  // checked={state.select_all ? state.select_all : false}
                  label="
                  Continue selling when out of stock"
                />
              </div> */}
              <hr className="MuiDivider-root card-custom-hr-line" />
              <div className="inventory-card-bottom ">
                <h6 className="mb-3 inventory-card-bottom-header ">Quantity</h6>
                <Form.Label>Available</Form.Label>
                <Form.Control
                  name="quantity"
                  type="number"
                  ref={register}
                  isInvalid={errors.quantity}
                  placeholder="0"
                  onChange={e =>
                    setProductDetails({
                      ...productDetails,
                      [e.target.name]: e.target.value,
                    })
                  }
                  value={productDetails.quantity}
                />
                <Form.Control.Feedback type="invalid" tooltip>
                  {errors?.quantity?.message}
                </Form.Control.Feedback>
              </div>
            </div>
          </div>

          {/* VARIANTS */}
          <div className="dashboard-activity-card mt-4">
            <h5 className="card-title ">Variants</h5>
            <div className="card-data-wrapper">
              <div className="cm-admin-checkbox  ">
                <Form.Check
                  type="checkbox"
                  id="variant"
                  className="cc-checkbox"
                  onChange={() => setHasVariants(!hasVariants)}
                  checked={hasVariants}
                  label="This product has multiple options, like different sizes or colors"
                />
              </div>
              {hasVariants ? (
                <div>
                  <hr className="MuiDivider-root card-custom-hr-line" />
                  <h5 className="variants-sub-heading mb-3">OPTIONS</h5>
                  {variantOptions.map((options, ind) => {
                    return (
                      <div
                        className="input-area variants-sub-input-container"
                        key={
                          variantOptions.productOption && variantOptions.productOption.label
                            ? variantOptions.productOption.label
                            : ind
                        }
                      >
                        <Row>
                          <Col md={3}>
                            <Form.Label>Option {ind + 1}</Form.Label>
                            <Select
                              options={variantOptionsData}
                              onChange={e => onOptionSelectChange(e, ind, 'productOption')}
                              value={options.productOption}
                            />
                          </Col>
                          <Col md={9}>
                            <Form.Label
                              className="variants-custom-label text-danger"
                              onClick={() => handleRemove(ind)}
                            >
                              Remove
                            </Form.Label>
                            <Form.Control
                              placeholder="Seperate options with comma"
                              onChange={e => onOptionSelectChange(e.target.value, ind)}
                              value={options.optionValues}
                            />
                          </Col>
                        </Row>
                      </div>
                    )
                  })}
                  <hr className="MuiDivider-root card-custom-hr-line" />
                  <Button className="add-new-btn" onClick={() => handleAdd()}>
                    Add another option{' '}
                  </Button>{' '}
                  <hr className="MuiDivider-root card-custom-hr-line" />
                  <h5 className="variants-sub-heading mb-3">Preview</h5>
                  <Row>
                    <Col md={3}>variant</Col>
                    <Col md={3}>Price</Col>
                    <Col md={3}>Quantity</Col>
                    <Col md={3}>SKU</Col>
                  </Row>
                  <hr className="MuiDivider-root card-custom-hr-line" />
                  {!isEmpty(productVariants) &&
                    productVariants.map((productVariant, index) => (
                      <Row className="mt-3">
                        <Col md={3}>
                          {isArray(productVariant.variant)
                            ? productVariant.variant.join()
                            : productVariant.variant}
                        </Col>
                        <Col md={3}>
                          <Form.Control
                            name="price"
                            type="number"
                            placeholder="0.00"
                            value={productVariant.price ? productVariant.price : 0}
                            onChange={e => onProductVariantsChange(e, index)}
                          />
                        </Col>
                        <Col md={3}>
                          <Form.Control
                            name="quantity"
                            type="number"
                            placeholder="0.00"
                            value={productVariant.quantity ? productVariant.quantity : 0}
                            onChange={e => onProductVariantsChange(e, index)}
                          />
                        </Col>
                        <Col md={3}>
                          <Form.Control
                            name="sku"
                            // type="number"
                            value={productVariant.sku ? productVariant.sku : ''}
                            placeholder="0.00"
                            onChange={e => onProductVariantsChange(e, index)}
                          />
                        </Col>
                      </Row>
                    ))}
                </div>
              ) : (
                ''
              )}
            </div>
          </div>
        </Col>
        <Col xl={4}>
          <div className="dashboard-activity-card">
            <h5 className="card-title">Category</h5>
            <hr className="MuiDivider-root" />
            <div className="card-data-wrapper">
              {/* <div className="custom-react-select w-100">
                <Select
                  placeholder="Product Type"
                  className="react-select-container"
                  classNamePrefix="react-select"
                  // options={BulkActionItems}
                  // styles={styles}
                  // onChange={(e: any) => {
                  //   setBulkAction(e.value)
                  // }}
                />
              </div>
              <hr className="MuiDivider-root" /> */}
              <div className="custom-react-select w-100">
                <Select
                  name="productCategoryId"
                  // ref={register}
                  // placeholder="Category"
                  className="react-select-container is-invalid"
                  classNamePrefix="react-select"
                  getOptionValue={({ id }) => id}
                  getOptionLabel={({ name }) => name}
                  options={categories}
                  // defaultValue={selectDefaultValue}
                  value={find(categories, ['id', productDetails.productCategoryId])}
                  onChange={value => {
                    setProductDetails({
                      ...productDetails,
                      productCategoryId: value.id,
                    })
                  }}
                />
                {/* 
                <div className="invalid-feedback d-block">{customErrors?.productCategoryId?.message}</div> */}
              </div>
            </div>
          </div>
          <div className="dashboard-activity-card mt-4">
            <h5 className="card-title">Visibility</h5>
            <hr className="MuiDivider-root" />
            <div className="card-data-wrapper">
              {/* <div className="custom-radio-button w-100"> */}
              {/* <Form.Check
                  type="radio"
                  id={`default-1`}
                  label="Visible"
                  inline
                  name="visibility"
                  value={true}
                  defaultChecked={productDetails.isVisible}
                  onChange={e => {
                    console.log('value radio+++++++++++=', e.target.checked)

                    setProductDetails({
                      ...productDetails,
                      isVisible: e.target.checked,
                    })
                  }}
                /> */}
              <Form.Group controlId="formHorizontalCheck">
                <Form.Check
                  label="Visible to store front"
                  checked={productDetails.isVisible}
                  onChange={e => {
                    console.log('value radio+++++++++++=', e.target.checked)

                    setProductDetails({
                      ...productDetails,
                      isVisible: e.target.checked,
                    })
                  }}
                />
              </Form.Group>
              {/* </div> */}
              {/* <div className="custom-radio-button w-100 mt-3">
                <Form.Check
                  type="radio"
                  id={`default-2`}
                  label="Hidden"
                  inline
                  value={false}
                  name="visibility"
                  defaultChecked={productDetails.isVisible}
                  onChange={e => {
                    console.log('value radio+++++++++++=', e.target.checked)

                    setProductDetails({
                      ...productDetails,
                      isVisible: e.target.checked,
                    })
                  }}
                />
              </div> */}
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="submit-footer mt-4">
            <Button className="add-new-btn" onClick={handleSubmit(handleSubmitApi)}>
              {loading ? <Spinner as="span" animation="border" size="sm" /> : 'Save Changes'}
            </Button>
          </div>
        </Col>
      </Row>
    </section>
  )
}
