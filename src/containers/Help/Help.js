import React, { Component } from 'react'
import { connect } from 'react-redux'

class Help extends Component {
  render () {
    return (
      <div>Help</div>
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

const HelpContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Help)

export default HelpContainer
