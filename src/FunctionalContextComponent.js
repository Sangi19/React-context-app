import React, { useContext } from 'react'
import {ThemeContext} from './App'

export default function FunctionalContextComponent() {

const darkTheme=useContext(ThemeContext)

const darkStyle={
    padding:'2rem',
    margin:'2rem',
    backgroundColor:darkTheme? '#333' : '#ccc',
    color:darkTheme? '#ccc' : '#333'
    
}

  return (
    <div style={darkStyle}>
       <h1>
        FunctionalContextComponent
        </h1> 
    </div>
  )
}
