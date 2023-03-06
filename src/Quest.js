import React from 'react'
import { useRef } from 'react'
import handleTicker from './Input'

export default function Quest({quest,handleTicker}) {
    const selector = useRef()
    function logg(){
    console.log(quest.name)}
    const handleSelector = () =>{
        handleTicker(quest.key)
    }

  return (
    <div>
        <input type="checkbox" checked={quest.ticker} onChange={handleSelector}/>
        <label><input type='radio' name='QuestChoose' className='RadioQuest'/>{quest.name}</label>
    </div>
  )
}
//Zrobić label o id key, zmieniać jego style funkcją włączaną przez radio onclick. 
//Brać quest.key i tyle
//document stylem zmienić bc color