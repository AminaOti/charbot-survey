import UserMessage from './chatbot/UserMessage'
import React, { useState } from "react";
import Input from './chatbot/Input'

export default function OpenEndedQuestion(){
    const [messages, setMessages] = useState([]);


    const send = async text => {
        const newMessages = messages.concat(
          <UserMessage key={messages.length + 1} text={text} />,
        );
        setMessages(newMessages);
      };


    return(
        <>
            <h3> What is the reason for your rating?</h3>
                <div className="chatbot">
                    <UserMessage></UserMessage>
                    <Input onSend={send} ></Input>
                 </div>
            </>
    )
}