import {React,useEffect,useState,useRef} from 'react'
import './App.css'
import ColorSet from './ColorSet'
import Input from './Input'

function App() {
  return (
    <div className="App">
      <Input/>
      <ColorSet />
    </div>
  )
}
export default App;