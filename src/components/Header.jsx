
import logoImg from '../assets/quiz-logo.png';

export default function Header({title}){


   return( 
    <header className="header">
        <img src={logoImg} alt="header-logo"></img>
        <h1>{title} </h1>
    </header>
    
   )
}