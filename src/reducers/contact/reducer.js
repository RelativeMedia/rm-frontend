import log from 'middleware/logger'
import {
  CONTACT_SUBMIT,
  CONTACT_SUBMITTED,
  CONTACT_ERROR
} from './constants'

const initialState = {
}

// ------------------------------------
// Reducer
// ------------------------------------
export const ACTION_HANDLERS = {
  [CONTACT_SUBMIT] : (state, action) => ({
    ...state
  }),
  [CONTACT_SUBMITTED] : (state, action) => ({
    ...state,
    isSubmitted: true
  }),
  [CONTACT_ERROR] : (state, action) => ({
    ...state,
    isSubmitted: false
  })
}

export default function reducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
