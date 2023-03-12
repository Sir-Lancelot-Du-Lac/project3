import React from 'react'
import { useRef} from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Logg from './Logg'

export default function ColorSet(logg2) {
    const ColorBC = useRef()
    const ColorTXT = useRef()
    const ColorTAB = useRef()
    const [Customing, setCustoming] = useState(["pusta"])
    const LOCAL_STORAGE_KEY = "colorApp.color"


    //Saving and Loading Site settings of colors//
    const Saving = (BeingSaved,num) =>{
      const newCustoming = Customing
      if(newCustoming[0]==="pusta") setCustoming(["","","#FFAABB"])
      newCustoming[num] = BeingSaved
      setCustoming(newCustoming)
      localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(Customing))
    }
    useEffect(()=>{
      const newCustoming = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
      setCustoming(newCustoming)
    },["pusta"])
    // ------------------ //

    // Coloring BC - background , TXT - text , TAB - menu //
    const handleColorBC = () =>{
        const coloring = ColorBC.current.value
        document.documentElement.style.setProperty('--colorBC',coloring)
        Saving(coloring,0)
    }
    const handleColorTXT = () =>{
        const coloring = ColorTXT.current.value
        document.documentElement.style.setProperty('--colorTXT',coloring)
        Saving(coloring,1)
    }
    const handleColorTAB = () =>{
        const coloring = ColorTAB.current.value
        document.documentElement.style.setProperty('--colorTAB',coloring)
        Saving(coloring,2)
    }
    // ------------------ //

    //---reseting all colors//
    const Reseting = () =>{
      document.documentElement.style.setProperty('--colorBC',"#FFFFFF")
      document.documentElement.style.setProperty('--colorTXT',"#000000")
      document.documentElement.style.setProperty('--colorTAB',"#ac80ff")
      setCustoming(["pusta"])
      localStorage.removeItem(LOCAL_STORAGE_KEY)
      }
    // ------------------ //
  return (
    <div id="ColorSettings">
        <ol><li>
        <ul>
        <li><p className='textOP'>Dostosuj kolor tła:</p>
        <input type="color" ref={ColorBC} onChange={handleColorBC}></input></li>
        <li><p className='textOP'>Dostosuj kolor tekstu:</p>
        <input type="color" ref={ColorTXT} onChange={handleColorTXT}></input></li>
        <li><p className='textOP'>Dostosuj kolor menu:</p>
        <input type="color" ref={ColorTAB} onChange={handleColorTAB}></input></li>
        <li><button onClick={Reseting}>Reset</button></li>
        <li><button onClick={Saving}>Save</button></li>
        <li><Logg elToLog={Customing}/></li>
        </ul>Dostosuj</li>
        </ol>
      </div>
  )
}
