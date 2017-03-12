import React, { Component } from 'react'
import { connect } from 'react-redux'

class Home extends Component {
  render () {
    return (
      <div>Home</div>
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

const HomeContainer = connect(
  // mapStateToProps,
  // mapDispatchToProps
)(Home)

export default HomeContainer
