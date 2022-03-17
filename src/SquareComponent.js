import React from 'react'
import './App.css'

const SquareComponent = (props) => {
  const classes = (props.className ? `${props.className} square` : `square`)
  return (
    <div>
        <div className={classes} onClick={() => props.onClick(props.index)}>
        {props.state}
        </div>
    </div>
  )
}

export default SquareComponent