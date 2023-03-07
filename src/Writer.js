import React from 'react'
import { useState, useEffect } from 'react'

export default function Writer({currentQuest,saveQuest, deletingLocalStorage}) {
  const [name, setName] = useState(currentQuest.name)
  const [content, setContent] = useState(currentQuest.content)
  var errorInfo = ""

  useEffect(() =>{
    setName(currentQuest.name)
    setContent(currentQuest.content)
  },[currentQuest])

  const handleName = (e) =>{
    setName(e.target.value)

  }

  const handleContent = (e) =>{
    setContent(e.target.value)
    
  };

  const handleSavingQuest = () =>{
    console.log(currentQuest.key)
    if(currentQuest.key==="default"){
      errorInfo = "You have to add and choose quest first!"
    }else{
      saveQuest(name,content,currentQuest.key)
    }
  }


  return (

    <div>
        <p>Write your notes here:</p>
        <input type="text" className='EditOfQuestName' onChange={handleName} value={name} placeholder="title"/><br/>
        <textarea rows='15' className='EditOfQuestContent' onChange={handleContent} value={content} placeholder="content"/><br/>
        <button onClick={handleSavingQuest}>Save</button>
        <button onClick={deletingLocalStorage}>Clear</button>
        <p>{errorInfo}</p>
    </div>
  )
}