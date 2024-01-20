import React from 'react'
import HeroCard from '../components/HeroCard'
import { useForm } from '../../hooks/useForm'
import { useLocation, useNavigate } from 'react-router-dom'

import queryString from 'query-string'
import { getHeroesByName } from '../helpers/getHeroesByName'

const SearchPage = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const { q = '' } = queryString.parse(location.search)

  const heroes = getHeroesByName(q)

  const { searchText, onInputChange } = useForm({
    searchText: q
  })

  const onSearchSubmit = (event) => {
    event.preventDefault()
    if (searchText.trim().length <= 1) return

    navigate(`?q=${searchText}`)
  }

  return (
    <>
      <h1>Search</h1>

      <div>
        <h4>Searching</h4>

        <form className='text-black' onSubmit={onSearchSubmit} >
          <input value={searchText} onChange={onInputChange} type="text" placeholder='Search a Hero' name='searchText' autoComplete='off' />

          <button>Search</button>
        </form>

        <div>
          <h4>Result</h4>
          <hr />

          {
            (q === '')
              ? <div>
            Search a Hero
              </div>
              : (heroes.length === 0) && <div className='text-red-400'>
          No hero with <b>{q}</b>
              </div>

          }

          {
            heroes.map(hero => (

              <HeroCard key={hero.id} {...hero} />
            ))
          }
        </div>
      </div>
    </>
  )
}

export default SearchPage
