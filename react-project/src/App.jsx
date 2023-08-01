import { useState } from 'react';
// import Card from './components/Card';
// import MyComponent from './components/myComponent';

// function App() {

// let [details, setDetails] = useState("submit test");
// const handleClick = () =>{
//   details = setDetails('Test submitted');
  
// }
//   return (
//     <>
//       <h1 style={{backgroundColor:"red", color:"yellowgreen"}}>Test1</h1>
//       <h2>{details}</h2>
//       <button onClick={handleClick}>click me</button>
//       <MyComponent />
//       <Card name="Laksh" email="l@pw.live"/>
//       <Card name="Lakshman" email="la@pw.live"/>
//     </>
//   )
// }

// Counter App

const App = () =>{
  // using normal variable
  let count = 0;
  function increment(){
    count += 1;
    console.log(`inc clicked ${count}`);
  }
  function decrement(){
    count -= 1;
    console.log(`dec clicked ${count}`);
  }

  // useState hook

  let [counter, setCounter] = useState(0);

  function incCounter() {
    counter += 1;
    setCounter(counter);
  }
  function decCounter() {
    counter -= 1;
    setCounter(counter);
  }
  
  return(
    <div>
    <h1>value of count is : {count}</h1>
    <button onClick={increment}>Inc</button>
    <button onClick={decrement}>Dec</button>

    <h1>value of counter is : {counter}</h1>
    <button onClick={incCounter}>Inc</button>
    <button onClick={decCounter}>Dec</button>
    </div>
  )
}

export default App;
