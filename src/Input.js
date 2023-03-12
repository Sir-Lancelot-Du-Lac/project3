import React from 'react'
import uuidv4 from '../node_modules/uuid/dist/v4'
import { useRef, useState, useEffect } from 'react';
import Writer from './Writer'
import Folder from './Folder'
import Logg from './Logg';

export default function Input(logg2) {
    const [Folders,setFolders] = useState([])
    const [currentQuest,setCurrentQuest] = useState({key: "default",name: "defaultName",content:"defaultContent"})
    const NameOfQuest = useRef()
    const LOCAL_STORAGE_KEY = "questsavingkey"

    // Adding quest and deleting selected //
    const handleAddQuest = (e) =>{
      const QuestName = NameOfQuest.current.value
      if(QuestName==="") return
      console.log(QuestName)
      setFolders(prevFolders=>{
        return[...prevFolders,{key: uuidv4(),name: QuestName,ticker: false,content: "Placeholdering"}]
      })
    }

    const handleDeleteSelected = () =>{
      const newFolders = Folders.filter(e=> !e.ticker)
      setFolders(newFolders)
    }
    // ------------------ //



    // Modifing Quests //
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
    }
    const saveQuest = (name,content,id) =>{
      const newFolders = [...Folders]
      const quest = newFolders.find(quest => quest.key===id)
      quest.name = name
      quest.content = content
      setFolders(newFolders)
    }
    // ------------------ //

    //JSON saving, loading and deleting quests in local storage //
    useEffect(()=>{
      console.log(localStorage.getItem(LOCAL_STORAGE_KEY))
      const loadFolders = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
      if(loadFolders) setFolders((prevFolders)=>[...prevFolders,...loadFolders])
    },[])
    useEffect(()=>{
      localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(Folders))
    },[Folders])
    const deletingLocalStorage = () =>{
      localStorage.clear()
      setFolders([])
    }
    // ------------------ //
  return (
    <div id="Columns">
      <div id="left">
        <Writer deletingLocalStorage={deletingLocalStorage} currentQuest={currentQuest} saveQuest={saveQuest}/>
      </div>
      <div id="right">
        <div id="first">
            <input type="text" ref={NameOfQuest}/>
            <button onClick={handleAddQuest}>Add your quest</button><br/>
            <Logg elToLog={Folders}/>
            <button onClick={handleDeleteSelected}>Delete Selected</button>  
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
