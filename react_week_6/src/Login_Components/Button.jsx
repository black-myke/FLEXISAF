import React from 'react'

const Button = (props) => {
  return (
    <div>
        <button type={props.type}>{props.option}</button>
    </div>
  )
}

export default Button