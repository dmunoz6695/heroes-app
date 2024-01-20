/* eslint-disable react/prop-types */
import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../helpers/getHeroesByPublisher'
import HeroCard from './HeroCard'

const HeroList = ({ publisher }) => {
  const heroes = useMemo(() => getHeroesByPublisher(publisher)
    , [publisher])

  return (
    <ul>
      {heroes.map(hero => (
        <HeroCard key={hero.id} {...hero} />
      ))}
    </ul>
  )
}

export default HeroList
