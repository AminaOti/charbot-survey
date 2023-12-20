// import './App.css'
import Header from './components/Header';
import RatingScaleQuestion from './components/RatingScaleQuestion';
import OpenEndedQuestion from './components/OpenEndedQuestion';




function App() {

  return (
    <body>
     <Header title="Survey"></Header>
        <div id="survey-questions">
          <RatingScaleQuestion ></RatingScaleQuestion>
          <OpenEndedQuestion></OpenEndedQuestion>
        </div>
    </body>
  )
}

export default App
