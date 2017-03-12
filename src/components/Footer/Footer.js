import React, { PropTypes } from 'react'
import css from './Footer.styl'

const Footer = ({ children }) => (
  <div className={css.root}>{children}</div>
)

Footer.propTypes = {
  children: PropTypes.node
}

export default Footer
