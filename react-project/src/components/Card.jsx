import React from 'react'

function Card({name, email}) {
  return (
    <div className='card'>
        <h2>Name : {name}</h2>
        <h2>email : {email}</h2>
    </div>
  )
}

export default Card