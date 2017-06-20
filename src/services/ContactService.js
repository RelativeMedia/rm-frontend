import Api from 'middleware/api'
import log from 'middleware/logger'

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
      if (state.contact.get('isSubmitted') === true) {
        dispatch(_error('You already sent an email'))
        return reject('You already sent an email')
      } else {
        dispatch(_send(payload))
        Api.post('/email/send', payload)
        .then((response) => {
          dispatch(_sent(response))
          resolve()
        })
        .catch((err) => {
          log.error(err)
          dispatch(_error(err))
        })
      }
    })
  }
}

export default {
  submit
}
