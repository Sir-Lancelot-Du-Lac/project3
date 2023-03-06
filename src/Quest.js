import React from 'react'

export default function Quest({quest,handleTicker, handleNotepad}) {
    function logg(){
    console.log(quest.name)}
    const handleTickerSelector = () =>{
      handleTicker(quest.key)
    }
    const handleRadioSelecting = () =>{    
      handleNotepad(quest.key)
      logg()
    }
  return (
    <div>
        <input type="checkbox" checked={quest.ticker} onChange={handleTickerSelector}/>
        <label><input type='radio' name='QuestChoose' className='RadioQuest'onChange={handleRadioSelecting}/>{quest.name}</label>
    </div>
  )
}
//Zrobić label o id key, zmieniać jego style funkcją włączaną przez radio onclick. 
//Brać quest.key i tyle
//document stylem zmienić bc color