import React, { useState, useEffect } from 'react'
import { Button, Table, Row, Col, Form, Spinner } from 'react-bootstrap'
import Select from 'react-select'
import { isEmpty } from 'lodash'
import { Link } from 'react-router-dom'
import { history } from 'js/helpers'
import { productServices } from 'js/services'
import { FilterSelector } from 'js/components/common'
import { useParamChange } from 'js/hooks'
import { PaginationComponent } from 'js/components/common'

// interface BulkActionItem {
//   value: string
//   label: string
// }

const BulkActionItems = [
  { value: 'delete', label: 'Delete' },
  { value: 'publish', label: 'Publish' },
  { value: 'un_publish', label: 'Unpublish' },
]

export const Products = () => {
  const [bulk_action, setBulkAction] = useState()
  const [products, setProducts] = useState({})
  const [loading, setLoading] = useState(false)

  const apiCalls = {
    getProductsApi: params => {
      setLoading(true)
      productServices
        .getProducts(params)
        .then(response => {
          const { data, count, currentPage, endPage, limit, startPage } = response

          setProducts({
            data,
            meta: {
              count,
              currentPage,
              endPage,
              limit,
              startPage,
            },
          })
          setLoading(false)
        })
        .catch(() => {
          setLoading(false)
        })
    },
  }

  const [params, onParamsChange] = useParamChange(apiCalls.getProductsApi)

  useEffect(() => {
    apiCalls.getProductsApi()
  }, [])

  console.log('bulk action', bulk_action)

  return (
    <section className="products-section">
      <div className="generic-page-header">
        <h2 className="page-head my-0">Products</h2>
        <div className="header-data-section">
          <Button className="coloumn-btn mr-3 text-uppercase">
            <i>
              <svg
                width="19"
                height="17"
                viewBox="0 0 19 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14.728 12.8206H11.9003L9.97152 10.0926L7.94478 12.8206H5.10477L8.62819 8.38936L5.78315 4.51387H8.6517L9.98439 6.62121L11.4044 4.51387H14.3233L11.3406 8.38936L14.728 12.8206ZM18.4585 16.6071H1.66699V0.570107H18.4585V16.6071ZM3.2801 14.994H16.8426V2.18433H3.2801"
                  fill="#10C56E"
                />
              </svg>
            </i>
            Export To Excel
          </Button>
          <Button
            className="add-new-btn text-uppercase"
            onClick={() => history.push('/admin/create-product')}
          >
            <i>
              <svg
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.03027 7.77295H0.171875V5.6001H5.03027V0.619629H7.22754V5.6001H12.0981V7.77295H7.22754V12.729H5.03027V7.77295Z"
                  fill="#fff"
                />
              </svg>
            </i>
            Create Product
          </Button>
        </div>
      </div>
      <div className="cm-admin-card">
        <div className="cm-admin-card--header cm-admin-card--header_filter">
          <div className="cm-filter">
            <Form>
              <Row className="justify-content-between">
                <Col xs="12" lg="4">
                  <Form.Group>
                    <div className="filter-input">
                      <Form.Control
                        type="text"
                        name=""
                        id=""
                        placeholder="Search Product"
                        onChange={e => onParamsChange('keyword', e.target.value)}
                      />
                    </div>
                  </Form.Group>
                </Col>
                {/* <Col xs="12" lg="4">
                  <Form.Group>
                    <div className="custom-react-select w-100">
                      <Select
                        placeholder="Bulk Action"
                        className="react-select-container"
                        classNamePrefix="react-select"
                        options={BulkActionItems}
                        //styles={styles}
                        onChange={e => {
                          setBulkAction(e.value)
                        }}
                      />
                    </div>
                  </Form.Group>
                </Col>
                <Col xs="12" lg="4">
                  <Form.Group>
                    <div className="custom-react-select w-100">
                      <Select
                        placeholder="Status"
                        className="react-select-container"
                        classNamePrefix="react-select"
                        // options={lookups.lead_status}
                        // styles={styles}
                        // onChange={(e) => {
                        //     onParamsChange('status', e.value);
                        // }}
                      />
                    </div>
                  </Form.Group>
                </Col> */}
              </Row>
            </Form>
          </div>
        </div>
        <div className="cm-admin-card--data">
          <div className="table-wrap">
            <Table responsive className="cm-admin-table-compact cm-admin-table-compact--checkbox ">
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
                  <th>Name</th>
                  <th>Product Category</th>
                  <th>weight</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th className="sortable" onClick={() => console.log('tets')}>
                    Status
                  </th>
                  <th>Actions</th>
                </tr>
              </thead>
              {loading ? (
                <div className="loader_wrapper">
                  <div className="table__loader">
                    <Spinner animation="grow" />
                  </div>
                </div>
              ) : (
                <tbody>
                  {!isEmpty(products.data) &&
                    products.data.map(product => (
                      <tr key={product.id}>
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
                        <td>{product.name}</td>
                        <td>{product?.category?.categoryName}</td>
                        <td>{product.weight}</td>
                        <td>{product.quantity}</td>
                        <td>{product.price}</td>
                        <td>{product.isVisible ? 'Visible' : 'Hidden'}</td>
                        <td style={{ textAlign: 'center' }}>
                          {' '}
                          <div className="action-wrap">
                            <Link
                              to={{
                                pathname: `/admin/edit-product/${product.id}`,
                                state: { current_page: params.page ? params.page : 1 },
                              }}
                            >
                              <img src="/images/admin/global/edit.svg" alt="" />
                            </Link>
                            {/* <Link
                              to={'#'}
                              onClick={() =>
                                show('ConfirmModal', {
                                  title: 'Delete Lead',
                                  body: 'Do you want to delete this lead ?',
                                  button_name: 'Delete',
                                  action: () => apiCalls.deleteLead(lead.lead_id),
                                })
                              }
                            >
                              <img src="/images/admin/global/delete.svg" alt="" />
                            </Link> */}
                          </div>
                        </td>
                      </tr>
                    ))}
                </tbody>
              )}
            </Table>
          </div>
        </div>
        {!isEmpty(products.meta) && (
          <PaginationComponent
            page={products.meta}
            onChange={page => onParamsChange('page', page)}
          />
        )}
      </div>
    </section>
  )
}
