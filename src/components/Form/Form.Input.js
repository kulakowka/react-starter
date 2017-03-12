import React, { PropTypes } from 'react'
import css from './Form.Input.styl'

const FormInput = ({ children, value }) => (
  <input type='text' className={css.root} value={value} />
)

FormInput.propTypes = {
  value: PropTypes.string,
  children: PropTypes.node
}

export default FormInput
