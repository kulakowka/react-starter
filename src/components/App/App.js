import React, { Component } from 'react'
import 'codemirror/lib/codemirror.css'
import 'material-ui-markdown-editor/dist/MarkdownEditor/codemirrorOverride.css'
import css from './App.styl'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import Home from '../../containers/Home/Home'
import Room from '../../containers/Room/Room'
import Message from '../../containers/Message/Message'
import Profile from '../../containers/Profile/Profile'
import Settings from '../../containers/Settings/Settings'
import Help from '../../containers/Help/Help'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      open: false,
      logged: false
    }
    this.onLeftIconButtonTouchTap = this.onLeftIconButtonTouchTap.bind(this)
    this.onRightIconButtonTouchTap = this.onRightIconButtonTouchTap.bind(this)
    this.onLogout = this.onLogout.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }

  onLeftIconButtonTouchTap () {
    this.setState({open: true})
  }
  onRightIconButtonTouchTap () {
    this.setState({logged: true})
  }
  onLogout () {
    this.setState({logged: false})
  }

  handleClose () {
    this.setState({open: false})
  }

  render () {
    return (
      <Router>
        <div className={css.root}>
          <Header
            logged={this.state.logged}
            onLeftIconButtonTouchTap={this.onLeftIconButtonTouchTap}
            onRightIconButtonTouchTap={this.onRightIconButtonTouchTap}
            handleClose={this.handleClose}
            onLogout={this.onLogout}
          />
          <Route exact path='/' component={Home} />
          <Route exact path='/profile' component={Profile} />
          <Route exact path='/settings' component={Settings} />
          <Route exact path='/help' component={Help} />
          <Route exact path='/room/:roomId' component={Room} />
          <Route exact path='/room/:roomId/:messageId' component={Message} />
          <Sidebar
            open={this.state.open}
            handleClose={this.handleClose}
          />
        </div>
      </Router>
    )
  }
}

export default App
