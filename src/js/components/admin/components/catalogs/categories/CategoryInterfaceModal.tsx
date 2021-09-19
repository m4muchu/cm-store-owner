import React, { useState, useEffect, SyntheticEvent } from 'react'
import { Row, Col, Button, Form, Spinner, FormGroup, Modal } from 'react-bootstrap'
import CreatableSelect from 'react-select/creatable'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { categoryServices } from 'js/services'
import { isEmpty } from 'lodash'

interface CustomSectionModalProps {
  selectedCategory: { name: string }
  modalStatus: boolean
  cancelModal: Function
  isLoading: boolean
  submitAction: ({ name }: { name: string }) => void
}

const CategoryInterfaceModal: React.FC<CustomSectionModalProps> = ({
  modalStatus,
  cancelModal,
  isLoading,
  submitAction,
  selectedCategory,
}) => {
  const [state, setState] = useState<{
    name: string
  }>({ name: '' })

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Category name is required'),
  })

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(validationSchema),
  })

  console.log('modal status++++++++', modalStatus)

  useEffect(() => {
    if (!isEmpty(selectedCategory)) {
      setState(selectedCategory)
    }
  }, [])

  return (
    <div>
      <Modal
        show={modalStatus}
        onHide={() => cancelModal()}
        className="tt-modal--admin shadow rounded"
        centered
        backdrop="static"
      >
        <Modal.Header>{isEmpty(selectedCategory) ? 'Create' : 'Update'} Category</Modal.Header>
        <Modal.Body>
          <Row>
            <Col md={12}>
              <div className="input-area">
                <Form.Group>
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    ref={register}
                    type="text"
                    name="name"
                    placeholder="Category Name"
                    isInvalid={errors.name}
                    onChange={e => setState({ name: e.target.value })}
                    value={state.name}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors?.name?.message}
                  </Form.Control.Feedback>
                </Form.Group>
              </div>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button
            color="primary"
            className="btn-outline-grey"
            onClick={() => cancelModal()}
            disabled={isLoading}
          >
            Cancel
          </Button>
          <Button
            color="primary"
            className="add-new-btn"
            onClick={handleSubmit(submitAction)}
            disabled={isLoading}
          >
            {isLoading ? <Spinner size="sm" animation="border" /> : 'Save'}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default CategoryInterfaceModal
