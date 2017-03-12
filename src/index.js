import injectTapEventPlugin from 'react-tap-event-plugin'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import store from './store'
import App from './components/App/App'
import theme from './utils/theme'

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin()

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={theme}>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
)
