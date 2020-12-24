import { history } from 'js/helpers';
import axios from 'axios';
import { configConstants } from 'js/constants';
const CancelToken = axios.CancelToken;
let cancel = {};

//Common Request
export function request(options) {
  if (options.cancel_token && cancel[options.cancel_token]) {
    cancel[options.cancel_token]();
  }
  return axios(
    requestOptions(
      options.method,
      options.url,
      options.param,
      options.is_authenticated,
      options.content_type,
      options.cancel_token
    )
  )
    .then(function(response) {
      return handleResponse(options.route, response, options.is_authenticated);
    })
    .catch(function(error) {
      if (axios.isCancel(error)) {
        console.log('Request canceled', error.message);
      } else {
        return handleError(options.route, error, options.hideModal);
      }
    });
}

//Get API URL
function getRouteApiUrl() {
  return process.env.REACT_APP_API_URL;
}

// dowload file attachment
export function downloadAttachment(options) {
  let full_url = getRouteApiUrl();
  let url = full_url + options.url;
  let params = options.param;

  if (options.is_authenticated) {
    let token;
    token = localStorage.getItem(configConstants.TOKEN_NAME);
    params.token = token;
  }
  let query_string = getQueryString(params);
  window.open(`${url}?${query_string}`);
  return Promise.resolve('success');
}

//Formate Request Options
export function requestOptions(
  method = 'GET',
  url = null,
  params = null,
  is_authenticated = true,
  content_type = null,
  cancel_token = null
) {
  let full_url = getRouteApiUrl();
  let requestOptions = {
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    credentials: 'include',
    method,
    url: full_url + url,
  };
  if (is_authenticated) {
    let token = localStorage.getItem(configConstants.TOKEN_NAME);
    if (token) {
      requestOptions.headers.Authorization = 'Bearer ' + token;
    }
  }

  if (method === 'GET' && params) {
    requestOptions.params = params;
  } else if (content_type === 'json') {
    requestOptions.headers['Content-Type'] = 'application/json';
    requestOptions.data = params;
  } else {
    requestOptions.data = params;
  }
  if (cancel_token) {
    requestOptions.cancelToken = new CancelToken(function executor(c) {
      cancel[cancel_token] = c;
    });
  }

  return requestOptions;
}

//Handle Error  Response
export function handleError(route, error, hideModal) {
  if (error && error.response) {
    if (error.response.status === 401) {
      hideModal && hideModal();
      localStorage.removeItem(configConstants.TOKEN_NAME);
      history.push('/auth/login');
    }
  }
  return Promise.reject(error.response);
}

//Handle Response
export function handleResponse(route, response) {
  if (response && response.data) {
    return response.data;
  }

  return response;
}

function getQueryString(params) {
  return Object.keys(params)
    .map((k) => {
      if (Array.isArray(params[k])) {
        return params[k]
          .map((val) => `${encodeURIComponent(k)}[]=${encodeURIComponent(val)}`)
          .join('&');
      } else if (isObject(params[k])) {
        return Object.keys(params[k])
          .map(
            (key) =>
              `${encodeURIComponent(k)}[${encodeURIComponent(
                key
              )}]=${encodeURIComponent(params[k][key])}`
          )
          .join('&');
      }

      return `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`;
    })
    .join('&');
}

// Returns if a value is an object
function isObject(value) {
  return value && typeof value === 'object' && value.constructor === Object;
}
