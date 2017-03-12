import React, { PropTypes } from 'react'
import css from './Content.styl'

const Content = ({ children }) => (
  <div className={css.root}>{children}</div>
)

Content.propTypes = {
  children: PropTypes.node
}

export default Content
