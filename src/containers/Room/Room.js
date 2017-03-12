import React, { Component } from 'react'
import { connect } from 'react-redux'

import Chat from '../../components/Chat/Chat'
import Card from 'material-ui/Card'

class Room extends Component {
  render () {
    return (
      <Card>
        <Chat />
      </Card>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    isAuth: state.auth.isAuth
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {

  }
}

const RoomContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Room)

export default RoomContainer

// import ReactMarkdown from 'react-markdown'
// import {Tabs, Tab} from 'material-ui/Tabs'
// import GithubIcon from 'react-material-icon-svg/dist/GithubIcon'
// import RaisedButton from 'material-ui/RaisedButton'
// import FlatButton from 'material-ui/FlatButton'
// import FontIcon from 'material-ui/FontIcon'
// import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card'

// import MarkdownEditor from 'material-ui-markdown-editor'

// import Content from '../Content/Content'
// import Sidebar from '../Sidebar/Sidebar'
// import Footer from '../Footer/Footer'
// import Button from '../Button/Button'
// import Form from '../Form/Form'
// import Toolbar from '../Toolbar/Toolbar'
// import Swipe from '../Swipe/Swipe'
// import Chat from '../Chat/Chat'
/*
<Card>
          <CardHeader
            showExpandableButton
            actAsExpander
            title='Anton Kulakov'
            subtitle='Front-end developer'
            avatar='https://avatars1.githubusercontent.com/u/557190?v=3&s=460'
            onTouchTap={this.handleUserDetailsToggle}
          />
          <CardText expandable style={{padding: '0 16px 16px'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
            Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
            Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
          </CardText>
          <CardText style={{padding: '0 16px 16px'}}>
            Lists are used to present multiple items vertically as a single continuous element. They can be configured for many uses such as a contacts list, nested lists, etc.
          </CardText>
        </Card>
        <br />
        <Card>
          <CardHeader
            title='Chi Wong'
            subtitle='Japan women'
            avatar='http://www.material-ui.com/images/chexee-128.jpg'
          />
          <CardText style={{padding: '0 16px 16px'}}>
            Similar to the Chat List example, but with Text Avatars (with transparent background) for section labeling, and an inset Divider.
          </CardText>
        </Card>
        <br />
        <Card>
          <CardHeader
            title='Anton Kulakov'
            subtitle='Front-end developer'
            avatar='https://avatars1.githubusercontent.com/u/557190?v=3&s=460'
            onTouchTap={this.handleUserDetailsToggle}
          />
          <Swipe />
          <CardActions>
            <RaisedButton label='1' primary />
            <FlatButton label='2' />
            <FlatButton label='3' />
          </CardActions>
        </Card>
        <br />
        <Card>
          <Form style={{padding: '16px'}} />
        </Card>
        <br />
        <Card>
          <Tabs>
            <Tab label='Edit' >
              <MarkdownEditor
                title='Foo'
                code='# Fancy markdown editor!'
              />
            </Tab>
            <Tab label='Preview' >
              <CardText>
                <ReactMarkdown source='# Fancy markdown editor!' />
              </CardText>
            </Tab>
          </Tabs>
        </Card>

        <FlatButton
          href='https://github.com/callemall/material-ui'
          target='_blank'
          label='GitHub Link'
          secondary
          icon={<FontIcon className='muidocs-icon-custom-github' />}
        />
        <RaisedButton label='Default' />
        <h1>Header H1</h1>
        <h2>Header H2</h2>
        <h3>Header H3</h3>
        <h4>Header H4</h4>
        <h5>Header H5</h5>
        <h6>Header H6</h6>
        <p>Paragraph text <a href='/asdasd'>link</a></p>
        <ul>
          <li>List item</li>
          <li>List item</li>
          <li>List item</li>
        </ul>
        <pre><code>class User () {}</code></pre>
        <Button>Default color</Button>
        <Button positive>Positive</Button>
        <Button negative>Negative</Button>
        <Button primary>Primary</Button>
        <Button>
          <GithubIcon /> kulakowka
        </Button>
 */
