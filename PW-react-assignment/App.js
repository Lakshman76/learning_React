import Person from "./components/Person";
import Button from "./components/Button";
import Header from "./components/Header";

App = () =>{
    return(
        <>
            <Person name="Lakshman" age="19" />
            <Button text="click me" onClick={()=>console.log('clicked')} />
            <Header title="This is Header"/>
        </>
    )
}
export default App;