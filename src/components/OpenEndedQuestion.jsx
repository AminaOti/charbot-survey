import { useState } from "react";
import UserMessage from './chatbot/UserMessage'
import Input from './chatbot/Input'
import BotMessage from './chatbot/BotMessage'
import {sendChatToLlm} from "../../apiService"
const MAX_NUMBER_OF_QUESTIONS = 3;


export default function OpenEndedQuestion({onSubmit}){
   
    const [isLoading, setIsLoading] = useState(false);
    const [chatLog, setChatLog] = useState([]);
    const [displaySubmit, setdisplaySubmit] = useState(false);

    const send = async text => {
      if(chatLog.length/2 >MAX_NUMBER_OF_QUESTIONS-1 ){
        return;
      }

      // Add user chat to log
      setChatLog((prevChatLog) => [...prevChatLog, { user: true, message: text }])

      //Set isLoading
      setIsLoading(true);

      //get data from chatbot
      const botMesagge = await sendChatToLlm(text, false)
      setChatLog((prevChatLog)=>[...prevChatLog, {user:false, message: botMesagge}])
      setIsLoading(false)

      if(chatLog.length === 4 ){
        setdisplaySubmit(true);
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
                 <Input onSend={send} finishedQuestions={displaySubmit}></Input>
                {displaySubmit&&<button onClick={onSubmit}> Sumbit </button>}
            </div>
           
            </>
    )
}