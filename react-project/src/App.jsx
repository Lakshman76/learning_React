import { useState } from 'react';
import Card from './components/Card';
import MyComponent from './components/myComponent';
function App() {
let [details, setDetails] = useState("submit test");
const handleClick = () =>{
  details = setDetails('Test submitted');
}
  return (
    <>
      <h1 style={{backgroundColor:"red", color:"yellowgreen"}}>Test1</h1>
      <h2>{details}</h2>
      <button onClick={handleClick}>click me</button>
      <MyComponent />
      <Card name="Laksh" email="l@pw.live"/>
      <Card name="Lakshman" email="la@pw.live"/>
    </>
  )
}

export default App
