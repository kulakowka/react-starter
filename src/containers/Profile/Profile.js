import React, { Component } from 'react'
import { connect } from 'react-redux'

class Profile extends Component {
  render () {
    return (
      <div>Profile</div>
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

const ProfileContainer = connect(
  // mapStateToProps,
  // mapDispatchToProps
)(Profile)

export default ProfileContainer
