import { useState } from 'react'
import { ChatMessages } from './compoenents/chatmessages'
import { MessageInput } from './compoenents/message-input'
import './App.css'


  function App() {
      const array = useState([
        {
          message: 'hello',
          sender: "user",
          id: "id1"
        },
        {
          message: "Hello! How can I help you?",
          sender: "robot",
          id: "id2"
        },
        {
          message: "can you tell today date?",
          sender: "user",
          id: "id3"
        },
        {
          message: "Today is June 24",
          sender: "robot",
          id: "id4"
        },
        {
          message: "can you flip the coin",
          sender: "user",
          id: "id5"
        },
        {
          message: "Sure! You got heads",
          sender: "robot",
          id: "id6"
        },
        {
          message: "thank you",
          sender: "user",
          id: "id7"
        }, {
          message: "No problem! Let me know if you need help with anything else!",
          sender: "robot",
          id: "id8"
        }
      ])
     
      const chatMessages = array[0]
      const setChatMessages = array[1]


      return (
        <div className="app-container">
          
          {/*MessageInput()*/}
          <ChatMessages
            chatMessages={chatMessages}
            setChatMessages={setChatMessages}
          />
          <MessageInput
            chatMessages={chatMessages}
            setChatMessages={setChatMessages}
          />
      
        </div>
      );

    }

export default App
