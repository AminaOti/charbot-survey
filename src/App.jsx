// import './App.css'
import {useState} from 'react'
import Header from './components/Header';
import RatingScaleQuestion from './components/RatingScaleQuestion';
import OpenEndedQuestion from './components/OpenEndedQuestion';

const NUMBER_OF_QUESTIONS = 2;
const FIRST_QUESTION_NUMBER = 1;


function App() {
  const [currentQuestion, setCurrentQuestion] = useState(FIRST_QUESTION_NUMBER);
  const finishedSurvey = currentQuestion>FIRST_QUESTION_NUMBER+1
  const secondQuestion  = currentQuestion==FIRST_QUESTION_NUMBER+1

  function handleNextQuestion(){
    let nextQuestion = currentQuestion +1;
    setCurrentQuestion(nextQuestion);
  }


  let quizQuestion = (<RatingScaleQuestion onNext={handleNextQuestion}></RatingScaleQuestion>)

  if(secondQuestion)
  {
    quizQuestion= (<OpenEndedQuestion onSubmit={handleNextQuestion}></OpenEndedQuestion>)
  }

  if(finishedSurvey)
  {
    quizQuestion= (<h1> Survey submitted, thank you!</h1>)
  }

  return (
    <body>
     <Header title="Survey"></Header>
        <div id="survey-questions">
          {!finishedSurvey &&<p>Question {currentQuestion}/{NUMBER_OF_QUESTIONS}</p>}
          {quizQuestion}
        </div>
    </body>
  )
}

export default App
