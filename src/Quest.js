import React from 'react'

export default function Quest({quest,handleTicker, handleNotepad}) {
    const handleTickerSelector = () =>{
      handleTicker(quest.key)
    }
    const handleRadioSelecting = () =>{    
      handleNotepad(quest.key)
    }
  return (
    <div>
        <input type="checkbox" checked={quest.ticker} onChange={handleTickerSelector}/>
        <input type='radio' name='QuestChoose' className='RadioQuest'onChange={handleRadioSelecting} id={quest.key}/>
        <label for={quest.key}>{quest.name}</label>
    </div>
  )
}
//Zrobić label o id key, zmieniać jego style funkcją włączaną przez radio onclick. 
//Brać quest.key i tyle
//document stylem zmienić bc color