import React from 'react'
import Quest from './Quest'

export default function Folder({Folders, handleTicker,handleNotepad}) {


  return(
    Folders.map(quest =>{
    return(<Quest key={quest.key} quest={quest} handleTicker={handleTicker} handleNotepad={handleNotepad}/>)
  }))
}
