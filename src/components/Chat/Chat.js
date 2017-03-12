import React from 'react'
import {List, ListItem} from 'material-ui/List'
import Divider from 'material-ui/Divider'
// import Subheader from 'material-ui/Subheader'
import Avatar from 'material-ui/Avatar'
// import {grey400, darkBlack} from 'material-ui/styles/colors'
// import IconButton from 'material-ui/IconButton'
// import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
// import IconMenu from 'material-ui/IconMenu'
// import MenuItem from 'material-ui/MenuItem'
import { withRouter } from 'react-router-dom'

const MessagesListItem = withRouter(({ history, to, secondaryText, avatar, primaryText }) => {
  const handleTouchTap = (event) => {
    history.push(to)
  }
  return (
    <ListItem
      leftAvatar={<Avatar src={avatar} />}
      primaryText={primaryText}
      secondaryText={secondaryText}
      secondaryTextLines={2}
      onTouchTap={handleTouchTap}
    />
  )
})

const Chat = () => (
  <List>
    <MessagesListItem
      to='/room/js/1'
      avatar='https://avatars1.githubusercontent.com/u/48200?v=3&s=60'
      primaryText='Mr. Robot'
      secondaryText={
        <p>
          I&apos;ll be in your neighborhood doing errands this weekend. Do you want to grab brunch? I&apos;ll be in your neighborhood doing errands this weekend. Do you want to grab brunch?
          I&apos;ll be in your neighborhood doing errands this weekend. Do you want to grab brunch? I&apos;ll be in your neighborhood doing errands this weekend. Do you want to grab brunch?
        </p>
      }
    />
    <Divider inset />
    <MessagesListItem
      to='/room/js/2'
      avatar='https://avatars3.githubusercontent.com/u/2565045?v=3&s=100'
      primaryText='Jed Watson'
      secondaryText={
        <p>
          I&apos;ll be in your neighborhood doing errands this weekend. Do you want to grab brunch? I&apos;ll be in your neighborhood doing errands this weekend. Do you want to grab brunch?
          I&apos;ll be in your neighborhood doing errands this weekend. Do you want to grab brunch? I&apos;ll be in your neighborhood doing errands this weekend. Do you want to grab brunch?
        </p>
      }
    />

  </List>
)

export default Chat
