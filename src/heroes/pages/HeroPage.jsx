import React, { useMemo } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { getHeroById } from '../helpers/getHeroById'

const HeroPage = () => {
  const { id } = useParams()

  const hero = useMemo(() => getHeroById(id), [id])

  const navigate = useNavigate()

  const onNavigateBack = () => {
    navigate(-1, {
      replace: true
    }
    )
  }
  if (!hero) {
    return <Navigate to={'/marvel'} />
  }

  return (
    <div className='text-black'>
      <img src={`/assets/heroes/${id}.jpg`} alt="" />
      <h3>{hero.superhero}</h3>
      <ul>
        <li>{hero.alter_ego}</li>
        <li>{hero.publisher}</li>
        <li>{hero.first_appearance}</li>
      </ul>

      <h5>{hero.characters}</h5>

      <button onClick={() => onNavigateBack()}>Regresar</button>
    </div>
  )
}

export default HeroPage
