import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function PersonCard(props) {
  const suitsData = useSelector(state => state.dataReducer)
  const people = props.people

  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/attorneys/${id}`)
  }

  return ( suitsData.loading === true ? (
    <div>loading</div>
  ) : people?.map(person => {
    return (
      <div className='person-card-container' key={person.id}>
        <div className='person-card' onClick={() => handleClick(person.id)}>
          <img className='person-image' src={person.photo} alt={person.name}/>
          <h4>{person.name}</h4>
          <p>{person.rank}</p>
        </div>
      </div> 
    )
  }
  )
  )
}
