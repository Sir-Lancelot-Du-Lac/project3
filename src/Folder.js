import React from 'react'
import Quest from './Quest'

export default function Folder({Folders, handleTicker}) {
  return(
    Folders.map(quest =>{
    return(<Quest key={quest.key} quest={quest} handleTicker={handleTicker}/>)
  }))
}
