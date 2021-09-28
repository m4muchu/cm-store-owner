import React, { useState, useEffect } from 'react'
import { Button, Table, Row, Col, Form, Spinner } from 'react-bootstrap'

import { isEmpty } from 'lodash'
import { Link } from 'react-router-dom'
import { categoryServices } from 'js/services'
import { useParamChange } from 'js/hooks'
import OptionsInterfaceModal from './OptionInterfaceModal'
import { boolean } from 'yup'
import { optionServices } from 'js/services/option-services'

const Options = () => {
  const [options, setOptions] = useState({})
  const [loading, setLoading] = useState({
    optionsListLoading: boolean,
    optionsActionLoading: boolean,
  })
  const [modalStatus, setModalStatus] = useState(false)
  const [selectedOption, setSelectedOption] = useState({})

  const cancelModal = () => {
    setModalStatus(false)
    setSelectedOption({})
  }

  const setLoader = (name, state) => {
    setLoading(currentState => ({
      ...currentState,
      [name]: state,
    }))
  }

  const apiCalls = {
    getOptionsApi: () => {
      setLoader('optionsListLoading', true)
      optionServices
        .getAllOptions()
        .then(response => {
          const { productOptionsType } = response
          setOptions({ data: productOptionsType })
          setLoading(false)
        })
        .catch(() => {
          console.log('something went wrong while listing options')
        })
        .finally(() => {
          setLoader('optionsListLoading', false)
        })
    },
    addOptionApi: optionData => {
      setLoader('optionsActionLoading', true)
      categoryServices
        .addCategory(optionData)
        .then(() => {
          apiCalls.getOptionsApi()
          cancelModal()
        })
        .catch(() => {
          console.log('something went wrong while adding options')
        })
        .finally(() => {
          setLoader('optionsActionLoading', false)
        })
    },
    updateOptionApi: (optionId, optionData) => {
      setLoader('optionsActionLoading', true)
      categoryServices
        .updateCategory(optionId, optionData)
        .then(() => {
          apiCalls.getOptionsApi()
          cancelModal()
        })
        .catch(() => {
          console.log('something went wrong while updating options')
          setLoader('optionsActionLoading', false)
        })
        .finally(() => {
          setLoader('optionsActionLoading', false)
        })
    },
    deleteCategoryApi: optionId => {
      categoryServices
        .deleteCategory(optionId)
        .then(() => {
          apiCalls.getOptionsApi({ root: true })
        })
        .catch(() => {
          console.log('something went wrong while deleting options')
          setLoader('optionsActionLoading', false)
        })
    },
  }

  const [params, onParamsChange] = useParamChange(apiCalls.getOptionsApi)

  useEffect(() => {
    apiCalls.getOptionsApi({ root: true })
  }, [])

  const submitAction = data => {
    if (!isEmpty(selectedOption)) {
      const { id } = selectedOption
      apiCalls.updateOptionApi(id, data)
    } else {
      apiCalls.addOptionApi(data)
    }
    cancelModal()
  }

  return (
    <section className="products-section">
      <div className="generic-page-header">
        <h2 className="page-head my-0">Options</h2>
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
            Create Options
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
                  <th>Actions</th>
                </tr>
              </thead>
              {loading.optionsListLoading ? (
                <div className="loader_wrapper">
                  <div className="table__loader">
                    <Spinner animation="grow" />
                  </div>
                </div>
              ) : (
                <tbody>
                  {!isEmpty(options?.data) &&
                    options?.data?.map(option => (
                      <tr key={option.id}>
                        <td style={{ width: '90%' }}>{option.name}</td>
                        <td style={{ textAlign: 'center' }}>
                          {' '}
                          <div className="action-wrap" style={{ width: '10%' }}>
                            <Link
                              onClick={() => {
                                setModalStatus(true)
                                setSelectedOption(option)
                              }}
                            >
                              <img src="/images/admin/global/edit.svg" alt="" />
                            </Link>
                            <Link to={'#'} onClick={() => apiCalls.deleteCategoryApi(option.id)}>
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

        {modalStatus && (
          <OptionsInterfaceModal
            modalStatus={modalStatus}
            cancelModal={cancelModal}
            isLoading={loading.categoryModalLoader}
            submitAction={data => submitAction(data)}
            selectedOption={selectedOption}
          />
        )}
      </div>
    </section>
  )
}

export default Options
