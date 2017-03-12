import React from 'react'
import SwipeableViews from 'react-swipeable-views'
import {CardText} from 'material-ui/Card'
const styles = {
  slide: {
    padding: 15,
    minHeight: 100
  },
  slide1: {
    // background: '#FEA900'
  },
  slide2: {
    // background: '#B3DC4A'
  },
  slide3: {
    // background: '#6AC0FF'
  }
}

const MyComponent = () => (
  <SwipeableViews>
    <CardText style={Object.assign({}, styles.slide, styles.slide1)}>
      <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
    </CardText>
    <CardText style={Object.assign({}, styles.slide, styles.slide2)}>
      <h1>Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.</h1>
    </CardText>
    <CardText style={Object.assign({}, styles.slide, styles.slide3)}>
      <h2>Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.</h2>
    </CardText>
  </SwipeableViews>
)

export default MyComponent
