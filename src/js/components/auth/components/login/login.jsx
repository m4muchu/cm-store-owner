import React, { useState } from 'react';
import { Row, Col, Form, Button, Spinner } from 'react-bootstrap';
import { isEmpty } from 'lodash';
import { authServices } from 'js/services';
import { configConstants } from 'js/constants';
// import { isEmpty } from 'lodash';
import { useErrorsValidator } from 'js/hooks/useErrorsValidator';

// interface loginResponse {
//   email: string;
//   access_token: string;
// }

// interface errorResponse {
//   status: number;
//   error: string;
// }

const requiredFields = [
  {
    name: 'email',
    type: 'text',
  },
  {
    name: 'password',
    type: 'text',
  },
];

export const Login = () => {
  const [state, setState] = useState({
    email: '',
    password: '',
  });

  const [loading, setLoading] = useState(false);
  const [errors, validateData] = useErrorsValidator();

  const onSubmit = () => {
    console.log('errors++++++++++++++', errors);
    validateData(requiredFields, state);

    if (isEmpty(errors)) {
      authServices
        .login(state)
        .then((response) => {
          localStorage.setItem(
            configConstants.ADMIN_TOKEN,
            response.access_token
          );
          setLoading(false);
        })
        .catch((errors) => {
          setLoading(false);
        });
    }
  };

  return (
    <div className="container cm-admin-card">
      <Row>
        <Col sm="12" lg="6" className="login-input-section">
          <h3>Sign In</h3>
          <p>Sign in on the internal platform</p>
          <div className="input-area">
            <Form.Group className="mb-4">
              <Form.Control
                type="email"
                name="email"
                required
                placeholder="Email"
                onChange={(e) =>
                  setState({
                    ...state,
                    email: e.target.value,
                  })
                }
                isInvalid={errors.email}
              />
              <Form.Control.Feedback type="invalid" tooltip>
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Control
                type="password"
                name="password"
                required
                placeholder="Password"
                onChange={(e) =>
                  setState({
                    ...state,
                    password: e.target.value,
                  })
                }
                isInvalid={errors.password}
              />
              <Form.Control.Feedback type="invalid" tooltip>
                {errors.password}
              </Form.Control.Feedback>
            </Form.Group>
            <Button
              type="submit"
              className="auth-submit-button"
              onClick={onSubmit}
            >
              {!loading ? (
                'LOG IN'
              ) : (
                <Spinner animation="border" variant="primary" />
              )}
            </Button>
            <Form.Control.Feedback type="invalid" className="pt-2">
              Please check your email and password
            </Form.Control.Feedback>
          </div>
          <p className="forgot-password">Forgot Password ?</p>
        </Col>
        <Col lg="6" className="auth-image-section border"></Col>
      </Row>
    </div>
  );
};
