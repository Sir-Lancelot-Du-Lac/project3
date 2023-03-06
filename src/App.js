import {React,useEffect,useState,useRef} from 'react'
import './App.css'
import ColorSet from './ColorSet'
import Input from './Input'
import Writer from './Writer'
import Navbar from './Navbar'

function App() {
  return (
    <div className="App">
      <Navbar/>
    <div id="left">
      <Writer/>
    </div>
    <div id="right">
      <Input/>
    </div>
      <ColorSet />
    </div>
  )
}
export default App;