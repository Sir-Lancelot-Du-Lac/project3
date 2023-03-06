import React from 'react'
import { useRef, useState, useEffect } from 'react'

export default function Writer({currentQuest}) {
  const [name, setName] = useState(currentQuest.name)
  const [content, setContent] = useState(currentQuest.content)

  useEffect(() =>{
    setName(currentQuest.name)
    setContent(currentQuest.content)
  },[currentQuest])


  const handleName = (e) =>{
    setName(e.target.value)

  }
  const handleContent = (e) =>{
    setContent(e.target.value)
    
  }


  return (

    <div>
        <p>Write your notes here:</p>
        <input type="text" className='EditOfQuestName' onChange={handleName} value={name} placeholder="title"/><br/>
        <textarea rows='15' className='EditOfQuestContent' onChange={handleContent} value={content} placeholder="content"/><br/>
        <button>Save</button>

    </div>
  )
}