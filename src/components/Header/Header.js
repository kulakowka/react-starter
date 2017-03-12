
import React, { PropTypes } from 'react'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import FlatButton from 'material-ui/FlatButton'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import { withRouter } from 'react-router-dom'

const HeaderMenuItem = withRouter(({ history, to, primaryText, onTouchTap }) => (
  <MenuItem
    onTouchTap={onTouchTap}
    primaryText={primaryText}
    onClick={() => history.push(to)}
  />
))

const Logged = ({ onLogout }) => (
  <IconMenu
    iconButtonElement={
      <IconButton><MoreVertIcon /></IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
    <HeaderMenuItem primaryText='Home' to='/' />
    <HeaderMenuItem primaryText='Profile' to='/profile' />
    <HeaderMenuItem primaryText='Settings' to='/settings' />
    <HeaderMenuItem primaryText='Help' to='/help' />
    <HeaderMenuItem primaryText='Sign out' onTouchTap={onLogout} />
  </IconMenu>
)

Logged.muiName = 'IconMenu'

const Header = ({ logged, onLeftIconButtonTouchTap, onRightIconButtonTouchTap, onLogout }) => (
  <AppBar
    title={logged ? 'Anton Kulakov' : 'Hacker News'}
    onLeftIconButtonTouchTap={onLeftIconButtonTouchTap}
    onRightIconButtonTouchTap={onRightIconButtonTouchTap}
    iconElementRight={logged ? <Logged onLogout={onLogout} /> : <FlatButton label='Login' />}
    style={logged ? { textAlign: 'right' } : {}}
  />
)

Header.propTypes = {
  logged: PropTypes.bool
}

export default Header
