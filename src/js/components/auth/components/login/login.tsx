import React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { history } from 'js/helpers';


export const Login = () => {
    return (
        <div className="container cm-admin-card">
            <Row>
                <Col sm="12" lg="6" className="login-input-section">
                    <h3>Sign In</h3>
                    <p>Sign in on the internal platform</p>
                    <div className="input-area">
                        <Form.Control type="email" placeholder="Email" />
                        <Form.Control type="password" placeholder="Password" />
                        <Button type="submit" className="auth-submit-button" onClick={() => history.push('/admin/dashoard')}>LOG IN</Button>
                    </div>
                    <p className="forgot-password">Forgot Password ?</p>
                </Col>
                <Col lg="6" className="auth-image-section border">
                </Col>
            </Row>
        </div>
    );
}