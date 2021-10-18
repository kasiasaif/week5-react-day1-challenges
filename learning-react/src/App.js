import logo from './logo.svg';
import './App.css';
import sea from './images/sea.jpeg'
import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import Footer from './components/Footer';
import Carousel from './components/Carousel';
import Content from './components/Content';




const App = () =>{
  return(
  <div>
    <h1>hello</h1>
    <Person name ="Kasia" age="34"/>
    <Job role="junior developer"/>
    <img src={sea}/>
    <Navbar/>
    <Jumbotron/>
    <Footer/>
    <Carousel/>
    <Content/>
    
    </div>)
}

const Person=(props)=>{
  return <p>Hi I'm {props.name} and I'm {props.age} years old.</p>
}
const Job =(props)=>{
  return <p>I'm a {props.role}.</p>
}





export default App;
