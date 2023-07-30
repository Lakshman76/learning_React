// this component used inside App.js

Person = (props) => {
  return (
    <>
       <p>Person's Name is {props.name}</p>
       <p>Person's age is {props.age}</p>
    </>
  )
}
export default Person