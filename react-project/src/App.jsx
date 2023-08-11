import { useState } from "react";
import AVATAR from "./components/Avatar";
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

// const App = () =>{
//   // using normal variable
//   let count = 0;
//   function increment(){
//     count += 1;
//     console.log(`inc clicked ${count}`);
//   }
//   function decrement(){
//     count -= 1;
//     console.log(`dec clicked ${count}`);
//   }

//   // useState hook

//   let [counter, setCounter] = useState(0);

//   function incCounter() {
//     counter += 1;
//     setCounter(counter);
//   }
//   function decCounter() {
//     counter -= 1;
//     setCounter(counter);
//   }

//   return(
//     <div>
//     <h1>value of count is : {count}</h1>
//     <button onClick={increment}>Inc</button>
//     <button onClick={decrement}>Dec</button>

//     <h1>value of counter is : {counter}</h1>
//     <button onClick={incCounter}>Inc</button>
//     <button onClick={decCounter}>Dec</button>
//     </div>
//   )
// }

const App = () => {
  const [todos, setTodos] = useState(["todo 1", "todo 2"]);

  return (
    <>
      <h1>Todo List</h1>
      {todos.map((value, index) => (
        <li key={index}>{value}</li>
      ))}

      <button
        onClick={() => {
          setTodos([...todos, "todo 3"]);
        }}
      >
        ADD
      </button>
      <h1>AVATAR</h1>
      <AVATAR 
        src="https://images.pexels.com/photos/17706105/pexels-photo-17706105/free-photo-of-city-road-people-woman.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        width="200px"
      />
      <AVATAR 
        src="https://images.pexels.com/photos/15133974/pexels-photo-15133974.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        width="200px"
      />
      <AVATAR 
        src="https://images.pexels.com/photos/17902464/pexels-photo-17902464/free-photo-of-man-people-woman-relaxation.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        width="200px"
      />
    </>
  );
};

export default App;
