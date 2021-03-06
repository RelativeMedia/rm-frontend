import LogRocket from 'logrocket'
import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'
import routes from './routes'
import configureStore from './store/configureStore'
import { syncHistoryWithStore } from 'react-router-redux'

import config from 'config'

const store = configureStore()
import './styles/core.scss'

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store)
LogRocket.init(config.LOG_ROCKET_APP_ID)

render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>, document.getElementById('app')
)
