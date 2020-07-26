import React, { useState, useEffect } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { history } from 'js/helpers';
import { authServices } from 'js/services'
import { configConstants } from 'js/constants';


export const Login = () => {

    const [ state, setState ] = useState({
        email: '',
        password: '',
    });

    interface loginResponse {
        email: string,
        access_token: string
    }

    const onSubmit = () => {
        authServices.login(state).then((response: loginResponse) => {
            localStorage.setItem(configConstants.ADMIN_TOKEN, response.access_token);
            history.push('/admin/dashboard');
        });
    }

    return (
        <div className="container cm-admin-card">
            <Row>
                <Col sm="12" lg="6" className="login-input-section">
                    <h3>Sign In</h3>
                    <p>Sign in on the internal platform</p>
                    <div className="input-area">
                        <Form.Control 
                            type="email" 
                            placeholder="Email" 
                            onChange={(e) => setState({
                                ...state,
                                email: e.target.value
                            })}
                        />
                        <Form.Control 
                            type="password" 
                            placeholder="Password" 
                            onChange={(e) => setState({
                                ...state,
                                password: e.target.value
                            })}
                        />
                        <Button type="submit" className="auth-submit-button" onClick={onSubmit}>LOG IN</Button>
                    </div>
                    <p className="forgot-password">Forgot Password ?</p>
                </Col>
                <Col lg="6" className="auth-image-section border">
                </Col>
            </Row>
        </div>
    );
}