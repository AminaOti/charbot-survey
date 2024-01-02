import { useState } from "react";
import UserMessage from './chatbot/UserMessage'
import Input from './chatbot/Input'
import BotMessage from './chatbot/BotMessage'
import {sendChatToLlm} from "../../apiService"
const MAX_NUMBER_OF_QUESTIONS = 3;


export default function OpenEndedQuestion({onSubmit, rating}){
   
    const [isLoading, setIsLoading] = useState(false);
    const [chatLog, setChatLog] = useState([]);
    const [chatFinsihed, setChatFinsihed] = useState(false);
    const isFinalQuestion = chatLog.length === MAX_NUMBER_OF_QUESTIONS +1; 


    const send = async text => {
      if(chatFinsihed ){
        return;
      }

      // Add user chat to log
      setChatLog((prevChatLog) => [...prevChatLog, { user: true, message: text }])

      //Set isLoading
      setIsLoading(true);

      //get data from chatbot
      const questionNumber = chatLog.length/2;
      const botMesagge =  await sendChatToLlm(text, rating, isFinalQuestion, questionNumber)
      setChatLog((prevChatLog)=>[...prevChatLog, {user:false, message: botMesagge}])
      setIsLoading(false)

      if(isFinalQuestion){
        setChatFinsihed(true);
        return;
      }
      };


    return(
        <>
            <h3> {`Why was your expereince a ${rating} out of 5`}?</h3>
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