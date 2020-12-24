import React, { useState } from 'react';
import { Row, Col, Form, Button, Spinner } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { authServices } from 'js/services';
import { configConstants } from 'js/constants';
import { history } from 'js/helpers/history';

export const Login = () => {
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState(false);

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required('Email is required')
      .email('The given email is invalid'),
    password: Yup.string().required('Password is required'),
  });

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const apiCall = (data) => {
    setServerError(false);
    setLoading(true);
    authServices
      .login(data)
      .then((response) => {
        if (response.data) {
          const { data } = response;
          localStorage.setItem(configConstants.ADMIN_TOKEN, data.access_token);
          setLoading(false);
          history.push('/admin/dashboard');
        }
      })
      .catch((errors) => {
        setLoading(false);
        setServerError(true);
      });
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
                ref={register}
                type="email"
                name="email"
                placeholder="Email"
                isInvalid={errors.email}
              />
              {!serverError && (
                <Form.Control.Feedback type="invalid" tooltip="true">
                  {errors.email?.message}
                </Form.Control.Feedback>
              )}
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Control
                ref={register}
                type="password"
                name="password"
                required
                placeholder="Password"
                isInvalid={errors.password}
              />
              {!serverError && (
                <Form.Control.Feedback type="invalid" tooltip="true">
                  {errors.password?.message}
                </Form.Control.Feedback>
              )}

              {serverError && (
                <div className="invalid-feedback d-block mt-2">
                  Please check your email and password
                </div>
              )}
            </Form.Group>
            <Button
              type="submit"
              className="auth-submit-button"
              onClick={handleSubmit(apiCall)}
            >
              {!loading ? (
                'LOG IN'
              ) : (
                <Spinner animation="border" variant="primary" />
              )}
            </Button>
          </div>
          <p className="forgot-password">Forgot Password ?</p>
        </Col>
        <Col lg="6" className="auth-image-section border"></Col>
      </Row>
    </div>
  );
};
