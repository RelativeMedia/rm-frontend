import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'

import {
  hasErrorReducer,
  hasResultsReducer,
  isLoadingReducer
} from './statekeys'

import contactReducer from './contact'

const rootReducer = combineReducers({
  isLoading: isLoadingReducer,
  hasResults: hasResultsReducer,
  hasErrors: hasErrorReducer,
  contact: contactReducer,
  routing: routerReducer,
  form: formReducer
})

export default rootReducer
