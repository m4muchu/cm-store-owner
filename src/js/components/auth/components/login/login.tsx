import React, { useState } from 'react';
import { Row, Col, Form, Button, Spinner } from 'react-bootstrap';
import { history } from 'js/helpers';
import { authServices } from 'js/services';
import { configConstants } from 'js/constants';
import { isEmpty } from 'lodash';

interface loginResponse {
  email: string;
  access_token: string;
}

interface errorResponse {
  status: number;
  error: string;
}

export const Login: React.FC<{}> = () => {
  const [state, setState] = useState({
    email: '',
    password: '',
  });

  const [loading, setLoading] = useState<boolean>(false);

  const [errors, setErrors] = useState<boolean>(false);

  const onSubmit = () => {
    if (isEmpty(state.email) && isEmpty(state.password)) {
      setErrors(true);
    } else {
      setLoading(true);
      authServices
        .login(state)
        .then((response: loginResponse) => {
          localStorage.setItem(
            configConstants.ADMIN_TOKEN,
            response.access_token
          );
          history.push('/admin/dashboard');
          setLoading(false);
        })
        .catch((errors: errorResponse) => {
          setLoading(false);
          setErrors(true);
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
            <Form.Control
              type="email"
              required
              placeholder="Email"
              onChange={(e) =>
                setState({
                  ...state,
                  email: e.target.value,
                })
              }
              isInvalid={errors}
            />
            <Form.Control
              type="password"
              required
              placeholder="Password"
              onChange={(e) =>
                setState({
                  ...state,
                  password: e.target.value,
                })
              }
              isInvalid={errors}
            />
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
