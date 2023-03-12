import React from 'react'

export default function Logg(elToLog) {
    //----Sending log of objects to console//
    function logg2(){
        console.log(elToLog)
    }
    // ------------------ //
  return (
    <button onClick={logg2}>Logg</button>
  )
}
