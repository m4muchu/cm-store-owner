import { request } from 'js/helpers';

export const authServices = {
    login
}

interface loginParam {
    email: string,
    password: string
}

function login(params: loginParam) {
    console.log('params+++++++', params);
    return request({
        method: 'POST',
        url: 'auth/login',
        params: params,
        is_authenticated: false,
        content_type: 'json',
    })
}