import React, { Component } from 'react'
import { connect } from 'react-redux'

class Settings extends Component {
  render () {
    return (
      <div>Settings</div>
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

const SettingsContainer = connect(
  // mapStateToProps,
  // mapDispatchToProps
)(Settings)

export default SettingsContainer
