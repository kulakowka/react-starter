import React from 'react'
import Drawer from 'material-ui/Drawer'
import Avatar from 'material-ui/Avatar'
import {List, ListItem} from 'material-ui/List'
import { withRouter } from 'react-router-dom'

const SidebarListItem = withRouter(({ history, to, onTouchTap, secondaryText, avatar, primaryText }) => {
  const handleTouchTap = (event) => {
    onTouchTap()
    history.push(to)
  }
  return (
    <ListItem
      leftAvatar={<Avatar src={avatar} />}
      primaryText={primaryText}
      secondaryText={secondaryText}
      onTouchTap={handleTouchTap}
    />
  )
})

const Sidebar = ({ open, handleClose }) => (
  <Drawer
    docked={false}
    width={300}
    open={open}
    onRequestChange={handleClose}
  >
    <List>
      <SidebarListItem
        to='/room/go'
        leftAvatar={<Avatar src='https://libraries.io/assets/go/go-1c36babe0b5868cae0421d95505db2fefe0ac1acf7f7207fd259dfd90a7b2319.png' />}
        primaryText='GO'
        secondaryText='2 days ago'
        onTouchTap={handleClose}
      />
      <SidebarListItem
        to='/room/js'
        leftAvatar={<Avatar src='https://libraries.io/assets/javascript/javascript-825f758444207d5394f01c75941559c65b47838fbdf7d91cab63312ff4d8d9c0.png' />}
        primaryText='Java Script'
        secondaryText='19 days ago'
        onTouchTap={handleClose}
      />
      <SidebarListItem
        to='/room/ruby'
        leftAvatar={<Avatar src='https://libraries.io/assets/ruby/ruby-4179c28a2baff638507b3336601c9620416cfc09a36006bd8bebdf400083af57.png' />}
        primaryText='Ruby'
        secondaryText='6 months ago'
        onTouchTap={handleClose}
      />
    </List>
  </Drawer>
)

export default Sidebar
