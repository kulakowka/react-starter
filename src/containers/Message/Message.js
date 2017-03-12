import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, CardHeader, CardText } from 'material-ui/Card'

class Message extends Component {
  render () {
    return (
      <Card>
        <CardHeader
          showExpandableButton
          actAsExpander
          title='Mr. Robot'
          subtitle='Front-end developer'
          avatar='https://avatars1.githubusercontent.com/u/48200?v=3&s=60'
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
    )
  }
}

// const mapStateToProps = (state, props) => {
//   return {
//     isAuth: state.auth.isAuth
//   }
// }
// const mapDispatchToProps = (dispatch, props) => {
//   return {

//   }
// }

const MessageContainer = connect(
  // mapStateToProps,
  // mapDispatchToProps
)(Message)

export default MessageContainer
