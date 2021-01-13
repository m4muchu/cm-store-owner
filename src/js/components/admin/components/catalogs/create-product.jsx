import React, { useState } from 'react'
import { Button, Table, Row, Col, Form } from 'react-bootstrap'
import Select from 'react-select'
import { isEmpty } from 'lodash'
import CreateVariantModal from './CreateVariantModal'
import { EditorComponent, FileUploadComponent, ImageSortable } from 'js/components/common'
import classnames from 'classnames'
import { useErrorsValidator } from 'js/hooks/useErrorsValidator'
import VariantOption from './VariantOption'

export const CreateProduct = () => {
  const [productDetails, setProductDetails] = useState({
    material: '',
  })
  const [modalShow, setModalShow] = useState(false)
  const [errors, validateData] = useErrorsValidator()
  const [variantcheck, setVariantcheck] = useState(false)
  const [fields, setFields] = useState([{ value: null }])

  const modelCallBack = modalData => {
    let modalDataArray = !isEmpty(productDetails.variants) ? productDetails.variants : []
    modalDataArray.push(modalData)
    setProductDetails({ ...productDetails, variants: modalDataArray })
  }

  const requiredFields = [
    {
      name: 'name',
      type: 'text',
    },
    {
      name: 'material',
      type: 'text',
    },
  ]

  const editorHandleChange = (value, key) => {
    setProductDetails({
      ...productDetails,
      key: value,
    })
  }

  const handleSubmit = () => {
    const productData = {
      ...productDetails,
    }

    validateData(requiredFields, productData)
  }

  const Variantcheck = e => {
    setVariantcheck(!variantcheck)
  }

  function handleAdd(id) {
    const values = [...fields]
    values.push({ value: null })
    setFields(values)
  }
  function handleRemove(i) {
    const values = [...fields]
    values.splice(i, 1)
    setFields(values)
    console.log('VALUE', i)
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
          <div className="dash_activity_card">
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
                    isInvalid={errors.name}
                  />
                  <Form.Control.Feedback type="invalid" tooltip>
                    {errors.name}
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

          <div className="dash_activity_card mt-4">
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

          <div className="dash_activity_card mt-4">
            <h5 className="card-title">Attributes</h5>
            <hr className="MuiDivider-root" />
            <div className="card-data-wrapper">
              <div className="attributes-wrapper d-flex justify-content-between align-items-center">
                <div className="text-area-attributes">
                  <span className="mb-3">Material</span>
                </div>
                <div className="custom-react-select w-50">
                  <Select
                    placeholder="Type"
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
          </div>
          {/* pricing */}
          <div className="dash_activity_card mt-4">
            <h5 className="card-title">Pricing</h5>

            <hr className="MuiDivider-root" />
            <div className="card-data-wrapper">
              <div className="input-area ">
                <Row>
                  <Col md={6}>
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="0.00"
                      onChange={e =>
                        setProductDetails({
                          ...productDetails,
                          [e.target.name]: e.target.value,
                        })
                      }
                    />
                  </Col>
                  <Col md={6}>
                    <Form.Label> Compare at price</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="0.00"
                      onChange={e =>
                        setProductDetails({
                          ...productDetails,
                          [e.target.name]: e.target.value,
                        })
                      }
                    />
                  </Col>
                </Row>
                <hr className="MuiDivider-root card-custom-hr-line" />
                <Row>
                  <Col md={6}>
                    <Form.Label>Cost per item</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="0.00"
                      onChange={e =>
                        setProductDetails({
                          ...productDetails,
                          [e.target.name]: e.target.value,
                        })
                      }
                    />
                    <Form.Text className="text-muted">Customers won’t see this</Form.Text>
                  </Col>
                  {/* <div className="price-card-bottom-data"> */}
                  <Col className="price-card-bottom-data">
                    <p>Margin</p>
                    <p className="price-card-bottom-data-unit">21</p>
                  </Col>
                  <Col className="price-card-bottom-data">
                    <p>Profit</p>
                    <p className="price-card-bottom-data-unit">21</p>
                  </Col>
                </Row>
              </div>
              <div
                className="cm-admin-checkbox card-sub-title mt-3 cm-dashboard-price-footer "
                md={6}
              >
                <Form.Check
                  type="checkbox"
                  id="tt-check-lead-select-all"
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
          <div className="dash_activity_card mt-4">
            <h5 className="card-title">Inventory</h5>

            <hr className="MuiDivider-root" />
            <div className="card-data-wrapper">
              <div className="input-area ">
                <Row>
                  <Col md={6}>
                    <Form.Label>SKU (Stock Keeping Unit)</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder=""
                      onChange={e =>
                        setProductDetails({
                          ...productDetails,
                          [e.target.name]: e.target.value,
                        })
                      }
                    />
                  </Col>
                  <Col md={6}>
                    <Form.Label> Barcode (ISBN, UPC, GTIN, etc.</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder=""
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
              <Col md={6} className="inventory-card-checkbox-custom-padding">
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
              </Col>
              <hr className="MuiDivider-root card-custom-hr-line" />
              <Col md={6}>
                <div className="inventory-card-bottom ">
                  <h6 className="mb-3 inventory-card-bottom-header ">Quantity</h6>
                  <Form.Label>Available</Form.Label>
                  <Form.Control
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
              </Col>
            </div>
          </div>

          {/* VARIANTS */}
          <div className="dash_activity_card mt-4">
            <h5 className="card-title ">Variants</h5>
            <div className="card-data-wrapper">
              <div className="cm-admin-checkbox  ">
                <Form.Check
                  type="checkbox"
                  id="tt-check-lead-select-all"
                  md={6}
                  className="cc-checkbox"
                  onChange={e => Variantcheck(e)}
                  // checked={state.select_all ? state.select_all : false}
                  label="This product has multiple options, like different sizes or colors"
                />
              </div>
              {variantcheck ? (
                <div>
                  <hr className="MuiDivider-root card-custom-hr-line" />
                  <h5 className="variants-sub-heading mb-3">OPTIONS</h5>
                  {fields.map((field, id) => {
                    return (
                      <div className="input-area variants-sub-input-container  key={id}">
                        <Row>
                          <Col md={3}>
                            <Form.Label>Option 1</Form.Label>
                            <VariantOption />
                          </Col>
                          <Col md={9}>
                            <Form.Label
                              className="variants-custom-label"
                              onClick={() => handleRemove(id)}
                            >
                              Remove
                            </Form.Label>

                            <Form.Control
                              // type="number"
                              placeholder="Seperate options with comma"
                              // onChange={e => handleRemove(id, e)}
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
                  <Row>
                    <Col md={3}>text</Col>
                    <Col md={3}>
                      <Form.Control
                        type="number"
                        placeholder="0.00"
                        onChange={e =>
                          setProductDetails({
                            ...productDetails,
                            [e.target.name]: e.target.value,
                          })
                        }
                      />
                    </Col>
                    <Col md={3}>
                      <Form.Control
                        type="number"
                        placeholder="0.00"
                        onChange={e =>
                          setProductDetails({
                            ...productDetails,
                            [e.target.name]: e.target.value,
                          })
                        }
                      />
                    </Col>
                    <Col md={3}>
                      <Form.Control
                        type="number"
                        placeholder="0.00"
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
              ) : (
                ''
              )}
            </div>
          </div>

          {/* Variants

          <div className="dash_activity_card mt-4">
            <div className="d-flex justify-content-between">
              <h5 className="card-title">Variants</h5>
              <span className="card-title-right text-uppercase" onClick={() => setModalShow(true)}>
                Create Variants
              </span>
            </div>
            <hr className="MuiDivider-root card-custom-hr-line" />
            <div className="card-data-wrapper">
              <div className="cm-admin-card--data">
                <div className="table-wrap">
                  <Table
                    responsive
                    className="cm-admin-table-compact cm-admin-table-compact--checkbox "
                  >
                    <thead>
                      <tr>
                        <th>
                          <div className="cm-admin-checkbox">
                            <Form.Check
                              type="checkbox"
                              id="tt-check-lead-select-all"
                              className="cc-checkbox"
                              // onChange={(e) => selectAll(e.target.checked)}
                              // checked={state.select_all ? state.select_all : false}
                            />
                          </div>
                        </th>
                        <th>Variant</th>
                        <th>SKU</th>
                        <th>Price</th>
                        <th>Inventory</th>
                      </tr>
                    </thead>
                    <tbody>
                      {!isEmpty(productDetails.variants) &&
                        productDetails.variants.map(variant => (
                          <tr>
                            <td>
                              <div className="tt-admin-checkbox">
                                <Form.Check
                                  type="checkbox"
                                  // id={'tt-check' + lead.lead_id}
                                  className="tt-checkbox"
                                  // onChange={(e) => {
                                  //     setState({
                                  //         ...state, selected_lead: { ...state.selected_lead, [lead.lead_id]: e.target.checked }
                                  //     });
                                  // }}
                                  // checked={state.selected_lead[lead.lead_id] ? state.selected_lead[lead.lead_id] : false}
                                />
                              </div>
                            </td>
                            <td>{variant.variant}</td>
                            <td>{variant.sku}</td>
                            <td>{variant.cpo}</td>
                            <td>{variant.inventoryStock}</td>
                          </tr>
                        ))}
                    </tbody>
                  </Table>
                </div>
              </div>
            </div>
          </div> */}

          {/* <div className="dash_activity_card mt-4">
            <h5 className="card-title">Search Engine Preview</h5>
            <hr className="MuiDivider-root" />
            <div className="card-data-wrapper">
              <span className="mb-3">
                Add search engine title and description to make this product
                easier to find
              </span>
              <div className="input-area mt-3">
                <Form.Control type="text" placeholder="Search Engine Title" />
              </div>
              <span className="reminder-text ml-2 mt-1">
                If empty, the preview shows what will be autogenerated.
              </span>

              <div className="input-area mt-3">
                <Form.Control as="textarea" rows={3} placeholder="Note" />
              </div>

              <span className="reminder-text ml-2">
                If empty, the preview shows what will be autogenerated.
              </span>
            </div>
          </div> */}
        </Col>
        <Col xl={4}>
          <div className="dash_activity_card">
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
              <hr className="MuiDivider-root" />
              <div className="custom-react-select w-100">
                <Select
                  placeholder="Collections"
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

          <div className="dash_activity_card mt-4">
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
        {modalShow && (
          <CreateVariantModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            modelCallBack={modelCallBack}
          />
        )}
      </Row>
      {/* 
            <Row className="mt-5 d-flex justify-content-center">
                <Button
                    className="add-new-btn text-uppercase"
                    //onClick={() => history.push('/admin/create-product')}
                >
                    Create Product
          			</Button>
            </Row> */}
    </section>
  )
}
