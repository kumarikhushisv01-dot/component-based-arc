import React from 'react'

const Button = ({buttonText,subText = "default"}) => {
  return (
    <>
    <button>{buttonText}</button>
    <p>{subText}</p>
    </>
  )
}

export default Button