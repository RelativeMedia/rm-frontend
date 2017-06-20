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
    ...state
  }),
  [CONTACT_ERROR] : (state, action) => ({
    ...state
  })
}

export default function counterReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
