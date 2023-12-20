import React, { useState } from "react";
import UserMessage from './chatbot/UserMessage'
import Input from './chatbot/Input'
import Messages from './chatbot/Messages'
import BotMessage from './chatbot/BotMessage'

export default function OpenEndedQuestion(){
    const [messages, setMessages] = useState([]);


    const send = async text => {
        console.log('on send')
        const newMessages = messages.concat(
          <UserMessage key={messages.length + 1} text={text} />,
          <BotMessage
          key={messages.length + 2}
          message={text}
        />
        );
        setMessages(newMessages);
      };


    return(
        <>
            <h3> What is the reason for your rating?</h3>
                <div className="chatbot">
                    <UserMessage></UserMessage>
                    <Messages messages={messages} />
                    <Input onSend={send} ></Input>
                 </div>
            </>
    )
}