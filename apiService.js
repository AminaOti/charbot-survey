import axios from "axios";

const API_BASE_URL = "http://localhost:3000/api/chatbot/sendMessage"; // Replace with your API base URL

const apiService = axios.create({
  baseURL: API_BASE_URL,
});

export const sendChatToLlm = async (messsage) => {
  console.log("qqqq");
  try {
    const response = await apiService.post(API_BASE_URL, {
      message: messsage,
    });
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
