import React, { useState, useEffect } from "react";
import {sendChatToLlm} from "../../../apiService"

export default function BotMessage({ userInput, isLoading }) {



  return (
    <div className="message-container">
       <div className={`bot-message`}>
       <div >{userInput}</div>
        </div> 
    </div>
  );
}
