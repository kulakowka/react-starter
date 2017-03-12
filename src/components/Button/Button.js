import React, { PropTypes } from 'react'
import cx from 'classnames'

import css from './Button.styl'

const Button = (props) => {
  const {
    children,
    negative,
    positive,
    primary
  } = props

  const className = cx(
    css.root,
    negative && css.negative,
    positive && css.positive,
    primary && css.primary
  )

  return (
    <button className={className}>
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node
}

export default Button
