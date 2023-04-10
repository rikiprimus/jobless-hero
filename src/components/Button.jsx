import React from 'react'

const Button = ({ font, bgColor, color, size, text, border, rounded }) => {
  return (
    <button
      type='button'
      className={`font-${font} bg-${bgColor} text-${size} text-${color} border-[${border}] rounded-${rounded} hover:drop-shadow-lg`}
    >
      {text}
    </button>
  )
}

export default Button