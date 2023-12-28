import axios from "axios";

const API_BASE_URL = "http://localhost:3000/api/chatbot/sendMessage"; // Replace with your API base URL

const FIRST_MESSAGE_PROMPT_PART_1 = `You are a user researcher, ask a follow up question to findout why a customer said: I rate this`;
const FIRST_MESSAGE_PROMPT_PART_2 = `out of 5 because`;
const MESSAGE_LENGTH_RPOMT = `please respond within within 10 words`;

const LAST_MESSAGE_PROMPT = `This is my final message, finsh this conversation, refer back to what you learnt from your previous conversation, tell the user that you've taken their feedback onbaord, do not say that you will make any changes to the website and do it within 30 words`;

const generateFirstMessage = (messsage, rating) => {
  return `${FIRST_MESSAGE_PROMPT_PART_1} ${rating} ${FIRST_MESSAGE_PROMPT_PART_2} ${messsage}`;
};

export const sendChatToLlm = async (
  messsage,
  rating,
  isLastMessage,
  questionNumber
) => {
  const beginingOfMessage =
    questionNumber == 0 ? generateFirstMessage(messsage, rating) : messsage;

  const endOfMessage = isLastMessage
    ? LAST_MESSAGE_PROMPT
    : MESSAGE_LENGTH_RPOMT;

  console.log(`${beginingOfMessage}. ${endOfMessage}`);

  try {
    const response = await axios.post(
      API_BASE_URL,
      {
        message: `${beginingOfMessage}. ${endOfMessage}`,
        isLastMessage: isLastMessage,
      },
      {
        withCredentials: true,
      }
    );

    return response.data.response;
  } catch (error) {
    console.log(error);
    return "Sorry watson is unavialbe ";
  }
};

// const callFetchSomeData = async () => {
//   const response = await sendChatToLlm("Please name me 4 cities?");
//   console.log(response);
// };

// callFetchSomeData();
