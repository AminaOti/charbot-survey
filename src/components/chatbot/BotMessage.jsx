import React, { useState, useEffect } from "react";
import {sendChatToLlm} from "../../../apiService"

export default function BotMessage({ userInput }) {
  const [isLoading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

//   useEffect(() => {
//     async function loadMessage() {
//       const msg = fetchMessage //await fetchMessage();
//       setLoading(false);
//       setMessage(msg);
//     }
//     loadMessage();
//   }, [fetchMessage]);

useEffect(() => {
  async function loadMessage() {
    const msg = await sendChatToLlm(userInput);
    setLoading(false);
    setMessage(msg);
  }
  loadMessage();
}, [userInput]);

  return (
    <div className="message-container">
       <div className={`bot-message ${isLoading? "" : "received"}`}>
       <div className="">{isLoading ? "watson thinking..." : message}</div>
        </div> 
    </div>
  );
}
