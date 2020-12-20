import { request } from 'js/helpers';

export const authServices = {
  login,
};

interface loginParam {
  email: string;
  password: string;
}

function login(params: loginParam) {
  return request({
    method: 'POST',
    url: 'auth/login',
    param: params,
    is_authenticated: false,
    content_type: 'json',
  });
}
