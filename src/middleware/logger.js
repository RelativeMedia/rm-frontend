import * as log from 'loglevel'

if(__DEV__) {
  log.setLevel('debug')
} else {
  log.setLevel('error')
}

window.log = log
export default log
