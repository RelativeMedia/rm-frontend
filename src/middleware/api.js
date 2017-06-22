import axios from 'axios'
import lodash from 'lodash'
import log from 'middleware/logger'

import config from 'config'

function _buildUrl (endpoint, params) {
  let url = config.API_URL
  let finalParams = ''

  if (endpoint.charAt(0) !== '/') {
    url += '/'
  }

  if (params) {
    finalParams += '?'
    lodash.each(params, (p, k) => {
      finalParams = finalParams + '&' + k + '=' + p
    })
  }

  url += endpoint + finalParams
  return url
}

export const handleErrors = (response) => {
  if (response.status >= 200 && response.status <= 300) {
    return response
  } else if (response.status === 401 || response.status === 403) {
    throw response
  }
}

const Api = {
  get: function (route, params) {
    return new Promise(function (resolve, reject) {
      const url = _buildUrl(route, params)
      log.debug('Api::get::initial', url, params)
      return axios(url)
      .then(handleErrors)
      .then((response) => {
        const json = response.json()
        log.debug('Api::post::response', url)
        resolve(json)
      }).catch((err) => {
        return reject(err)
      })
    })
  },
  post: function (route, payload) {
    return new Promise(function (resolve, reject) {
      const url = _buildUrl(route)
      log.debug('Api::post::initial', url, payload)
      return axios({
        url,
        method: 'POST',
        data: payload
      })
      .then(handleErrors)
      .then((response) => {
        log.debug('Api::post::response', url, response)
        resolve(response)
      }).catch((err) => {
        return reject(err)
      })
    })
  }
}
export default Api
