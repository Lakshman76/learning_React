import Person from "./components/Person";
import Button from "./components/Button";
import Header from "./components/Header";
import List from "./components/List";

App = () =>{
    return(
        <>
            <Person name="Lakshman" age="19" />

            <Button text="click me" onClick={()=>console.log('clicked')} />

            <Header title="This is Header"/>

            <List items={['Iron-man', 'Thor', 'Wanda']} />
        </>
    )
}
export default App;