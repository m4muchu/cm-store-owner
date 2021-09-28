import React, { useState, useEffect } from 'react'
import { Button, Table, Row, Col, Form, Spinner } from 'react-bootstrap'

import { isEmpty } from 'lodash'
import { Link } from 'react-router-dom'
import { history } from 'js/helpers'
import { categoryServices } from 'js/services'
import { useParamChange } from 'js/hooks'
import CategoryInterfaceModal from './CategoryInterfaceModal'
import { BarLoader } from 'react-spinners'
import { boolean } from 'yup'

const Categories = () => {
  const [categories, setCategories] = useState({})
  const [loading, setLoading] = useState({
    categoryListLoading: boolean,
    categoryActionLoading: boolean,
  })
  const [modalStatus, setModalStatus] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState({})

  const cancelModal = () => {
    setModalStatus(false)
    setSelectedCategory({})
  }

  const setLoader = (name, state) => {
    setLoading(currentState => ({
      ...currentState,
      [name]: state,
    }))
  }

  const apiCalls = {
    getCategoriesApi: param => {
      setLoader('categoryListLoading', true)
      categoryServices
        .getLevelOneCategories(param)
        .then(response => {
          const { categories } = response
          setCategories({ data: categories })
          setLoading(false)
        })
        .catch(() => {
          console.log('something went wrong while listing categories')
        })
        .finally(() => {
          setLoader('categoryListLoading', false)
        })
    },
    addCategoryApi: category => {
      setLoader('categoryActionLoading', true)
      categoryServices
        .addCategory(category)
        .then(() => {
          apiCalls.getCategoriesApi({ root: true })
          cancelModal()
        })
        .catch(() => {
          console.log('something went wrong while adding category')
        })
        .finally(() => {
          setLoader('categoryActionLoading', false)
        })
    },
    updateCategoryApi: (categoryId, category) => {
      setLoader('categoryActionLoading', true)
      categoryServices
        .updateCategory(categoryId, category)
        .then(() => {
          apiCalls.getCategoriesApi({ root: true })
          cancelModal()
        })
        .catch(() => {
          console.log('something went wrong while updating category')
          setLoader('categoryActionLoading', false)
        })
        .finally(() => {
          setLoader('categoryActionLoading', false)
        })
    },
    deleteCategoryApi: categoryId => {
      categoryServices
        .deleteCategory(categoryId)
        .then(() => {
          apiCalls.getCategoriesApi({ root: true })
        })
        .catch(() => {
          console.log('something went wrong while deleting category')
          setLoader('categoryActionLoading', false)
        })
    },
  }

  const [params, onParamsChange] = useParamChange(apiCalls.getCategoriesApi)

  useEffect(() => {
    apiCalls.getCategoriesApi({ root: true })
  }, [])

  const submitAction = data => {
    if (!isEmpty(selectedCategory)) {
      const { id } = selectedCategory
      apiCalls.updateCategoryApi(id, data)
    } else {
      apiCalls.addCategoryApi(data)
    }
    cancelModal()
  }

  return (
    <section className="products-section">
      <div className="generic-page-header">
        <h2 className="page-head my-0">Categories</h2>
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
          <Button className="add-new-btn text-uppercase" onClick={() => setModalStatus(true)}>
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
            Create Category
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
                        placeholder="Search Category"
                        onChange={e => onParamsChange('keyword', e.target.value)}
                      />
                    </div>
                  </Form.Group>
                </Col>
              </Row>
            </Form>
          </div>
        </div>
        <div className="cm-admin-card--data">
          <div className="table-wrap">
            <Table responsive className="cm-admin-table-compact cm-admin-table-compact--checkbox ">
              <thead>
                <tr>
                  <th>Name</th>
                  {/* <th>status</th> */}
                  <th>Actions</th>
                </tr>
              </thead>
              {loading.categoryListLoading ? (
                <div className="loader_wrapper">
                  <div className="table__loader">
                    <Spinner animation="grow" />
                  </div>
                </div>
              ) : (
                <tbody>
                  {!isEmpty(categories?.data) &&
                    categories?.data?.map(category => (
                      <tr key={category.id}>
                        <td style={{ width: '90%' }}>{category.name}</td>
                        {/* <td>{category.isVisible ? 'Visible' : 'Hidden'}</td> */}
                        <td style={{ textAlign: 'center' }}>
                          {' '}
                          <div className="action-wrap" style={{ width: '10%' }}>
                            <Link to={`/admin/categories/${category.id}/level-two/`}>
                              <img src="/images/admin/global/view.svg" alt="" />
                            </Link>
                            <Link
                              onClick={() => {
                                setModalStatus(true)
                                setSelectedCategory(category)
                              }}
                            >
                              <img src="/images/admin/global/edit.svg" alt="" />
                            </Link>
                            <Link to={'#'} onClick={() => apiCalls.deleteCategoryApi(category.id)}>
                              <img src="/images/admin/delete.svg" alt="" />
                            </Link>
                          </div>
                        </td>
                      </tr>
                    ))}
                </tbody>
              )}
            </Table>
          </div>
        </div>
        {/* {!isEmpty(products.meta) && (
          <PaginationComponent
            page={products.meta}
            onChange={page => onParamsChange('page', page)}
          />
        )} */}

        {modalStatus && (
          <CategoryInterfaceModal
            modalStatus={modalStatus}
            cancelModal={cancelModal}
            isLoading={loading.categoryModalLoader}
            submitAction={data => submitAction(data)}
            selectedCategory={selectedCategory}
          />
        )}
      </div>
    </section>
  )
}

export default Categories
