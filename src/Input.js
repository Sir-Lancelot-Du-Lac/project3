import React from 'react'
import Folder from './Folder';
import uuidv4 from '../node_modules/uuid/dist/v4'
import { useRef, useState } from 'react';

export default function Input() {
    const [Folders,setFolders] = useState([])
    const NameOfQuest = useRef()

    function logg2(){
        console.log(Folders)
      }
      const handleTicker = (id) =>{
        const newFolders = [...Folders]
        const quest = newFolders.find(quest => quest.key===id)
        quest.ticker = !quest.ticker
        setFolders(newFolders)
      }
      function handleAddQuest(e){
        const QuestName = NameOfQuest.current.value
        if(QuestName==="") return
        console.log(QuestName)
        setFolders(prevFolders=>{
          return[...prevFolders,{key: uuidv4(),name: QuestName,ticker: true}]
        })
      }

  return (
    <div>
    <div id="first">
        <input type="text" ref={NameOfQuest}/>
        <button onClick={handleAddQuest}>Add your quest</button>
        <button onClick={logg2}>Logg</button>    
    </div>
    <div id="second">
      <form>
        <Folder Folders={Folders} handleTicker={handleTicker}/>
      </form>
    </div>
    </div>
  )
}
