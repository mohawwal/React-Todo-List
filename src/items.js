import React from 'react'

export default function Items(props) {
  
  return (
    <li>
        {props.text}
        <button onClick={() => props.onDelete(props.index)}>Delete</button>
    </li>
  )
}
