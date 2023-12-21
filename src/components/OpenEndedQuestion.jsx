import React, { useState } from "react";
import UserMessage from './chatbot/UserMessage'
import Input from './chatbot/Input'
import Messages from './chatbot/Messages'
import BotMessage from './chatbot/BotMessage'
const MAX_NUMBER_OF_QUESTIONS = 3;

export default function OpenEndedQuestion(){
    const [messages, setMessages] = useState([]);


    const send = async text => {
        if(messages.length/2 <= MAX_NUMBER_OF_QUESTIONS-1){
          console.log(messages.length)
          const newMessages = messages.concat(
            <UserMessage key={messages.length + 1} text={text} />,
            <BotMessage
            key={messages.length + 2}
            message={text}
          />
          );
          setMessages(newMessages);
        } 
      };


    return(
        <>
            <h3> What is the reason for your rating?</h3>
            <div className="chatbot">
              <Messages messages={messages} />
              <Input onSend={send} ></Input>
            </div>
           
            </>
    )
}