import React from 'react'
import Folder from './Folder';
import uuidv4 from '../node_modules/uuid/dist/v4'
import { useRef, useState } from 'react';
import Writer from './Writer'

export default function Input() {
    const [Folders,setFolders] = useState([])
    const [currentQuest,setCurrentQuest] = useState({key: "default",name: "defaultName",content:"defaultContent"})
    const NameOfQuest = useRef()
    const currentName = "Name"
    const currentContent = "Content"

    function logg2(){
        console.log(Folders)
      }
    const handleAddQuest = (e) =>{
      const QuestName = NameOfQuest.current.value
      if(QuestName==="") return
      console.log(QuestName)
      setFolders(prevFolders=>{
        return[...prevFolders,{key: uuidv4(),name: QuestName,ticker: false,content: "Placeholdering"}]
      })
    }
    const handleTicker = (id) =>{
      const newFolders = [...Folders]
      const quest = newFolders.find(quest => quest.key===id)
      quest.ticker = !quest.ticker
      setFolders(newFolders)
    }
    const handleNotepad = (id) =>{
      console.log(id)
      const newFolders = [...Folders]
      const quest = newFolders.find(quest => quest.key===id)
      setCurrentQuest({key: quest.key,name: quest.name, content: quest.content})
      console.log(currentQuest)
    }
  return (
    <div id="Columns">
      <div id="left">
        <Writer currentQuest={currentQuest}/>
      </div>
      <div id="right">
        <div id="first">
            <input type="text" ref={NameOfQuest}/>
            <button onClick={handleAddQuest}>Add your quest</button>
            <button onClick={logg2}>Logg</button>    
        </div>
        <div id="second">
          <form>
            <Folder Folders={Folders} handleTicker={handleTicker} handleNotepad={handleNotepad}/>
          </form>
        </div>
      </div>
    </div>
  )
}
