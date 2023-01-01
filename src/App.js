
import './App.css';
import { Boost } from './boost';
import { Footer } from './footer';
import { Form } from './form';
import { Header } from './header';
import { Statistics } from './statistics';
import {useState} from "react"

function App() {
const [input, setinput] = useState("");
console.log(input)

  return (
    <div className="App">
      <Header/>
      <Form setinput={setinput} input={input}/>
      <Statistics/>
      <Boost/>
      <Footer/>
    </div>
  );
}

export default App;
