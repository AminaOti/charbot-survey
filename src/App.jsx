// import './App.css'
import {useState} from 'react'
import Header from './components/Header';
import RatingScaleQuestion from './components/RatingScaleQuestion';
import OpenEndedQuestion from './components/OpenEndedQuestion';

const NUMBER_OF_QUESTIONS = 2;
const FIRST_QUESTION_NUMBER = 1;



function App() {
  const [currentQuestion, setCurrentQuestion] = useState(FIRST_QUESTION_NUMBER);
  let quizQuestion = (<RatingScaleQuestion onNext={handleNextQuestion}></RatingScaleQuestion>)

  function handleNextQuestion(){
    let nextQuestion = currentQuestion +1;
    if(nextQuestion>2)(
      nextQuestion = 2
    )
    setCurrentQuestion(nextQuestion);
  }

  if(currentQuestion!=FIRST_QUESTION_NUMBER)
  {
    quizQuestion= (<OpenEndedQuestion></OpenEndedQuestion>)
  }


  return (
    <body>
     <Header title="Survey"></Header>
        <div id="survey-questions">
          <p>Question {currentQuestion}/{NUMBER_OF_QUESTIONS}</p>
          {quizQuestion}
        </div>
    </body>
  )
}

export default App
