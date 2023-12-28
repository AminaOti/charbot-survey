import { useState } from "react";
import UserMessage from './chatbot/UserMessage'
import Input from './chatbot/Input'
import BotMessage from './chatbot/BotMessage'
import {sendChatToLlm} from "../../apiService"
const MAX_NUMBER_OF_QUESTIONS = 3;


export default function OpenEndedQuestion({onSubmit}){
   
    const [isLoading, setIsLoading] = useState(false);
    const [chatLog, setChatLog] = useState([]);
    const [chatFinsihed, setChatFinsihed] = useState(false);
    const finalQuestion = chatLog.length === MAX_NUMBER_OF_QUESTIONS +1; 


    const send = async text => {
      if(chatFinsihed ){
        return;
      }

      // Add user chat to log
      setChatLog((prevChatLog) => [...prevChatLog, { user: true, message: text }])

      //Set isLoading
      setIsLoading(true);

      //get data from chatbot
      const botMesagge = 'hello'//await sendChatToLlm(text, false)
      setChatLog((prevChatLog)=>[...prevChatLog, {user:false, message: botMesagge}])
      setIsLoading(false)

      if(finalQuestion ){
        setChatFinsihed(true);
        return;
      }

      };


    return(
        <>
            <h3> What is the reason for your rating?</h3>
            <div className="chatbot">
                { chatLog.map((mes, index) => (
                  <div className="messages">
                    {mes.user && <UserMessage key={index} text={mes.message} /> }
                    {!mes.user && <BotMessage key={index} userInput={mes.message} />}
                  </div>               
                ))}
                {isLoading &&<p>...watson is thinking</p>}
                 <Input onSend={send} finishedQuestions={chatFinsihed}></Input>
                {chatFinsihed&&<button onClick={onSubmit}> Sumbit </button>}
            </div>
           
            </>
    )
}