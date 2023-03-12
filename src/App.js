import React from 'react'
import './App.css'
import ColorSet from './ColorSet'
import Input from './Input'
import Navbar from './Navbar'

function App() {
  return (
    <div className="App">
      <div>
      <Navbar/>
      </div>
      <div>
      <Input/>
      <ColorSet/>
      </div>
    </div>
  )
}
export default App;