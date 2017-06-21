import { ACTION_HANDLERS } from './reducer'
export constants from './constants'

const initialState = {
  isSubmitted: false
}

export default function reducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
