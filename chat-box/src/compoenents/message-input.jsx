import {chatbot} from 'supersimpledev'
import { useState } from 'react'
import './message-input.css'



 export function MessageInput({ chatMessages, setChatMessages }) {
      const [inputText, setInputText] = useState('');

      function saveInputText(event) {
        setInputText(event.target.value);
        // console.log(inputText)
      }
      function sendMessage() {
        console.log(inputText)
        const newChatmessages = [
          ...chatMessages,
          {
            message: inputText,
            sender: 'user',
            id: crypto.randomUUID()
          }
        ]
        console.log(newChatmessages);
        setChatMessages(newChatmessages);
        const response = chatbot.getResponse(inputText)
        console.log(response)
        setChatMessages([
          ...newChatmessages, {
            message: response,
            sender: 'robot',
            id: crypto.randomUUID()
          }
        ])
        setInputText('')
      }
      return (
        <div className="input-container">
          <input
            placeholder="send a mesage to chatbox"
            onChange={saveInputText}
            value={inputText}
            className="chat-input"
          />
          <button
            onClick={sendMessage}
            className="send-button"
          >
            send
          </button>
        </div>
      )
    };
