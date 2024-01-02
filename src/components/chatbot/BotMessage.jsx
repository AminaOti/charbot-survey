import React, { useState, useEffect } from "react";
import {sendChatToLlm} from "../../../apiService"

export default function BotMessage({ userInput, isLoading }) {
    const sanitisedUserInput = userInput.replace(/"/g, "")
    console.log(sanitisedUserInput)
 

  return (
    <div className="message-container">
       <div className={`bot-message`}>
       <div >{sanitisedUserInput}</div>
        </div> 
    </div>
  );
}
