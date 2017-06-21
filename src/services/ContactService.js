import Api from 'middleware/api'
import log from 'middleware/logger'
/*eslint import/namespace: ['error', { allowComputed: true }]*/
import KEYS, { setIsLoading, setHasResults, handleApiErrors } from 'reducers/statekeys'

import {
  constants
} from 'reducers/contact'

// ------------------------------------
// Synchronous Actions
// ------------------------------------
const _send = (payload = {}) => {
  return {
    type: constants['CONTACT_SUBMIT'],
    payload
  }
}

const _sent = (payload = {}) => {
  return {
    type: constants['CONTACT_SUBMITTED'],
    payload
  }
}

const _error=  (payload = {}) => {
  return {
    type: constants['CONTACT_ERROR'],
    payload
  }
}

const submit = (payload) => {
  return (dispatch, getState) => {
    const state = getState()
    return new Promise((resolve, reject) => {
      if (state.contact.isSubmitted === true) {
        dispatch(_error('You already sent an email'))
        dispatch(setIsLoading(KEYS['CONTACT'], false))
        return reject('You already sent an email')
      } else {
        dispatch(_send(payload))
        dispatch(setIsLoading(KEYS['CONTACT'], true))
        Api.post('/email/send', payload)
        .then((response) => {
          dispatch(setIsLoading(KEYS['CONTACT'], false))
          dispatch(setHasResults(KEYS['CONTACT'], true))
          dispatch(_sent(response))
          resolve()
        })
        .catch((err) => {
          dispatch(setIsLoading(KEYS['CONTACT'], false))
          dispatch(setHasResults(KEYS['CONTACT'], false))
          dispatch(handleApiErrors(KEYS['CONTACT'], true, err))
          dispatch(_error(err))
          log.error(err)
        })
      }
    })
  }
}

export default {
  submit
}
