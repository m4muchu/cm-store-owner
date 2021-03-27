import React, { useState, useEffect } from 'react'
import { Button, Row, Col, Form } from 'react-bootstrap'
import Select from 'react-select'
import { isEmpty } from 'lodash'
import { EditorComponent, FileUploadComponent, ImageSortable } from 'js/components/common'
import classnames from 'classnames'

const variantOptionsData = [
  { value: 'size', label: 'Size' },
  { value: 'color', label: 'Color' },
  { value: 'material', label: 'Material' },
]

export const CreateProduct = () => {
  const [productDetails, setProductDetails] = useState({})
  const [hasVariants, setHasVariants] = useState(false)
  const [variantOptions, setVariantOptions] = useState([])
  const [productVariants, setProductVariants] = useState('')

  console.log('productDetails+++++++++++++', productDetails)
  console.log('variant options+++++++++++++', variantOptions)
  console.log('productVariants+++++++++++++', productVariants)

  const editorHandleChange = (value, key) => {
    setProductDetails({
      ...productDetails,
      [key]: value,
    })
  }

  const handleSubmit = () => {
    const productData = {
      ...productDetails,
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

  useEffect(() => {
    const optionValuesCombinations = []
    let result = []

    variantOptions.forEach((varinatOption, index) => {
      if (!isEmpty(varinatOption.optionValues)) {
        const optionValuesArray = varinatOption.optionValues.split(',')
        optionValuesCombinations.push(optionValuesArray)
      }
    })

    if (!isEmpty(optionValuesCombinations)) {
      result = combineAll(optionValuesCombinations)

      const productVariants = result.map(variants => {
        return {
          variants,
        }
      })
      setProductVariants(productVariants)
    }
  }, [variantOptions])

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

  const onOptionSelectChange = (value, ind, key) => {
    let currentVariantOptions = [...variantOptions]

    if (key === 'productOption') {
      currentVariantOptions[ind].productOption = value
    } else {
      const trimedOptionValues = value.replace(/\s/g, '')
      currentVariantOptions[ind].optionValues = trimedOptionValues
    }

    setVariantOptions(currentVariantOptions)
  }

  const onProductVariantsChange = (event, ind) => {
    const name = event.target.name
    const value = event.target.value
    const currentProductVariants = [...productVariants]

    currentProductVariants[ind][name] = value

    setProductVariants(currentProductVariants)
  }

  return (
    <section className="crearte-products-section">
      <div className="generic-page-header">
        <h2 className="page-head my-0">Create Product</h2>
        <Button className="add-new-btn" onClick={handleSubmit}>
          Save Changes
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
                    type="text"
                    name="name"
                    placeholder="Name"
                    onChange={e =>
                      setProductDetails({
                        ...productDetails,
                        [e.target.name]: e.target.value,
                      })
                    }
                    // isInvalid={errors.name}
                  />
                  {/* <Form.Control.Feedback type="invalid" tooltip>
                    {errors.name}
                  </Form.Control.Feedback> */}
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
                    // onSuccess={props.onAddNewFiles}
                  />
                </div>
                <ImageSortable
                  files={[
                    { attachment_url: 'https://picsum.photos/200/300' },
                    { attachment_url: 'https://picsum.photos/200/200' },
                    { attachment_url: 'https://picsum.photos/200/204' },
                  ]}
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
                  </Col>
                  <Col md={6}>
                    <Form.Label> Compare at price</Form.Label>
                    <Form.Control
                      name="comparePrice"
                      type="number"
                      placeholder="0.00"
                      onChange={e =>
                        setProductDetails({
                          ...productDetails,
                          [e.target.name]: e.target.value,
                        })
                      }
                      value={productDetails.comparePrice}
                    />
                  </Col>
                </Row>
                <hr className="MuiDivider-root card-custom-hr-line" />
                <Row>
                  <Col md={6}>
                    <Form.Label>Cost per item</Form.Label>
                    <Form.Control
                      name="costPerItem"
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
              <div
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
              </div>
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
                      type="number"
                      placeholder="SKU"
                      onChange={e =>
                        setProductDetails({
                          ...productDetails,
                          [e.target.name]: e.target.value,
                        })
                      }
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
                    />
                  </Col>
                </Row>
              </div>
              <div className="cm-admin-checkbox card-sub-title mt-4">
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
              </div>
              <hr className="MuiDivider-root card-custom-hr-line" />
              <div className="inventory-card-bottom ">
                <h6 className="mb-3 inventory-card-bottom-header ">Quantity</h6>
                <Form.Label>Available</Form.Label>
                <Form.Control
                  name="quantity"
                  type="number"
                  placeholder="0"
                  onChange={e =>
                    setProductDetails({
                      ...productDetails,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
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
                          variantOptions.variantOption && variantOptions.variantOption.label
                            ? variantOptions.variantOption
                            : ind
                        }
                      >
                        <Row>
                          <Col md={3}>
                            <Form.Label>Option {ind + 1}</Form.Label>
                            <Select
                              options={variantOptionsData}
                              onChange={e => onOptionSelectChange(e, ind, 'productOption')}
                              value={options.variantOption}
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
                        <Col md={3}>{productVariant.variants.join()}</Col>
                        <Col md={3}>
                          <Form.Control
                            name="price"
                            type="number"
                            placeholder="0.00"
                            onChange={e => onProductVariantsChange(e, index)}
                          />
                        </Col>
                        <Col md={3}>
                          <Form.Control
                            name="quantity"
                            type="number"
                            placeholder="0.00"
                            onChange={e => onProductVariantsChange(e, index)}
                          />
                        </Col>
                        <Col md={3}>
                          <Form.Control
                            name="sku"
                            type="number"
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
            <h5 className="card-title">Organize Product</h5>
            <hr className="MuiDivider-root" />
            <div className="card-data-wrapper">
              <div className="custom-react-select w-100">
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
              <hr className="MuiDivider-root" />
              <div className="custom-react-select w-100">
                <Select
                  placeholder="Category"
                  className="react-select-container"
                  classNamePrefix="react-select"
                  //options={BulkActionItems}
                  //styles={styles}
                  // onChange={(e: any) => {
                  //     setBulkAction(e.value);
                  // }}
                />
              </div>
            </div>
          </div>
          <div className="dashboard-activity-card mt-4">
            <h5 className="card-title">Visibility</h5>
            <hr className="MuiDivider-root" />
            <div className="card-data-wrapper">
              <div className="custom-radio-button w-100">
                <Form.Check
                  type="radio"
                  id={`default-1`}
                  label="Visible"
                  inline
                  name="visibility"
                />
              </div>
              <div className="custom-radio-button w-100 mt-3">
                <Form.Check type="radio" id={`default-2`} label="Hidden" inline name="visibility" />
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="submit-footer mt-4">
            <Button className="add-new-btn" onClick={handleSubmit}>
              Save Changes
            </Button>
          </div>
        </Col>
      </Row>
    </section>
  )
}
