// import './App.css'
import './globals.scss';
import {useState,useRef} from 'react'
import Header from './components/Header';
import RatingScaleQuestion from './components/RatingScaleQuestion';
import OpenEndedQuestion from './components/OpenEndedQuestion';
import { Button } from '@carbon/react';
import { Add } from '@carbon/icons-react';

const NUMBER_OF_QUESTIONS = 2;
const FIRST_QUESTION_NUMBER = 1;


function App() {
  const [currentQuestion, setCurrentQuestion] = useState(FIRST_QUESTION_NUMBER);
  const finishedSurvey = currentQuestion>FIRST_QUESTION_NUMBER+1
  const secondQuestion  = currentQuestion==FIRST_QUESTION_NUMBER+1
  const rating = useRef('')

  function handleNextQuestion(){
    let nextQuestion = currentQuestion +1;
    setCurrentQuestion(nextQuestion);
  }

  function  updatedRating(value){
    rating.current = value;
  }


  let quizQuestion = (<RatingScaleQuestion onNext={handleNextQuestion} updateRating={updatedRating}></RatingScaleQuestion>)

  if(secondQuestion)
  {
    quizQuestion= (<OpenEndedQuestion onSubmit={handleNextQuestion} rating={rating.current}></OpenEndedQuestion>)
  }

  if(finishedSurvey)
  {
    quizQuestion= (<h1> Survey submitted, thank you!</h1>)
  }

  return (
    <body>
     <Header title="Survey"></Header>
        <div id="survey-questions">
          <Button renderIcon={Add}> Hello react</Button>
          {!finishedSurvey &&<p>Question {currentQuestion}/{NUMBER_OF_QUESTIONS}</p>}
          {quizQuestion}
        </div>
    </body>
  )
}

export default App
