import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function PersonCard(props) {
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/attorneys/${id}`)
  }

  return ( props.people.loading === true ? (
    <div>loading</div>
  ) : props.people.people.map(person => {
    return (
      <div className='person-card-container' key={person.id}>
        <div className='person-card' onClick={() => handleClick(person.id)}>
          <img className='person-image' src={person.photo} alt={person.name}/>
          <h4>{person.name}</h4>
          <p>{person.rank}</p>
        </div>
      </div>
        
      
    )
  })
  )
}
