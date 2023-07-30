// this component is used inside App.js

List = (props) => {
    const listItem = () =>{
        props.items.map((item) =>{
            <li>{item}</li>
        })
    }
  return (
    <ul>
        {listItem}
    </ul>
  )
}

export default List