import axios from "axios";

const API_BASE_URL = "http://localhost:3000/api/chatbot/sendMessage"; // Replace with your API base URL

const apiService = axios.create({
  baseURL: API_BASE_URL,
});

export const sendChatToLlm = async (messsage) => {
  const response = await apiService.post(API_BASE_URL, {
    message: messsage,
  });
  return response.data;
};

const callFetchSomeData = async () => {
  const response = await sendChatToLlm(
    "that is great, what is the population of the third city?"
  );
  console.log(response);
};

callFetchSomeData();
