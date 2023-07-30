import Person from "./components/Person";
import Button from "./components/Button";

App = () =>{
    return(
        <>
            <Person name="Lakshman" age="19" />
            <Button text="click me" onClick={()=>console.log('clicked')} />
        </>
    )
}
export default App;