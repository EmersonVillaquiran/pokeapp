import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import { useNavigate } from 'react-router-dom'
import './style/PokemonCard.css'

const PokemonCard = ({pokeInfo}) => {

  const [ pokemon, getPokemon ] = useFetch(pokeInfo.url)
  
  useEffect(() => {
    getPokemon()
  }, [])

  const navigate = useNavigate()

  const handlePokemonDetail = () => {
    navigate(`/pokedex/${pokeInfo.name}`)
  }

  return (
    <article className={`card color-animation border-${pokemon?.types[0].type.name}`} onClick={handlePokemonDetail}>
        <header className={`card__header color-animation bg-${pokemon?.types[0].type.name}`}>
            <img className='card__img' src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
        </header>
        <section className='card__principal'>
            <h3 className={`card__name color-${pokemon?.types[0].type.name}`}>{pokemon?.name}</h3>
            <ul className='card__types'>
               {
                pokemon?.types.map(typeInfo => (
                    
                    <li className='card__type' key={typeInfo.type.url}>
                        {typeInfo.type.name}  
                    </li>                    
                ))
               } 
            </ul>
        </section>
        <hr className='card__hr' />
        <section className='card__stats'>
            <ul className='card__list'>
                {
                    pokemon?.stats.map(statsInfo => (
                        <li className='card__stat' key={statsInfo.stat.url}>
                            <span className='card__stat-label'>{statsInfo.stat.name} </span>
                            <span className={`card__stat-value color-${pokemon?.types[0].type.name}`}>{statsInfo.base_stat}</span>
                        </li>
                    ))
                }
            </ul>
        </section> 
    </article>
  )
}

export default PokemonCard