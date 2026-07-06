import './chatmessage.css'
import userProfile from '../assets/user.png'
import robotProfile from '../assets/robot.png'
export function ChatMessage(props) {
     
      const { message } = props;
      const { sender } = props;
     


      return (
        <div 
        className={sender == 'user' ? "user-chat" : "robot-chat"}>
          {sender == "robot" 
          && 
          <img 
           className="chat-message-profile"
           src={robotProfile}  />}
        <div className="chat-messages">
           {message}
        </div>
          {sender == "user" && 
          <img 
          src={userProfile} 
          className="chat-message-profile" />}
        </div>
      )
    };