/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import React from 'react'
import { Link } from 'react-router-dom'

const CharactersByHero = ({ alter_ego, characters }) => {
  if (alter_ego === characters) return (<></>)

  return <p>{characters}</p>
}

const HeroCard = ({ id, superhero, publisher, alter_ego, first_appearance, characters }) => {
  const heroImageUrl = `/heroes/${id}.jpg`
  return (

    <div className=" bg-red-300 border  border-green-600 ">
      <div className=" bg max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" src={heroImageUrl} alt="Sunset in the mountains"/>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{superhero}</div>
          <p>{alter_ego}</p>

          <CharactersByHero alter_ego characters/>
          <p>
            <small>{first_appearance}</small>
          </p>

          <Link to={`/hero/${id}`} >
          More Information
          </Link>

        </div>
      </div>
    </div>

  )
}

export default HeroCard
