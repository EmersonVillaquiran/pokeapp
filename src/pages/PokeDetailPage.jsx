import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import { useEffect, useState } from "react"
import './style/PokeDetailPage.css'

const PokeDetailPage = () => {

  const {name} = useParams()

  const url = `https://pokeapi.co/api/v2/pokemon/${name}`
  const [pokemon, getPokemon] = useFetch(url)
  const [statsPercentage, setStatsPercentage] = useState({});

  useEffect(() => {
    getPokemon()
  }, [name])

  useEffect(() => {
    if (pokemon) {
      const maxStatValue = 150; // Valor máximo para las estadísticas
      const stats = pokemon.stats.map(stat => stat.base_stat);
      const percentage = stats.map(stat => (stat / maxStatValue) * 100);
      const statsPercentageObj = {};
      percentage.forEach((percent, index) => {
        statsPercentageObj[`progress-${index + 1}`] = percent;
      });
      setStatsPercentage(statsPercentageObj);
    }
  }, [pokemon]);

  console.log(pokemon);


  return (
    <div className="pokemon">
      <div className="header__div">
        <img className="header__title" src="/imagetitle.png" alt="" />
      </div>
    <div className={`pokemon__card card border-${pokemon?.types[0].type.name}`} >
        <header className={`pokemon__header card__header color-animation bg-${pokemon?.types[0].type.name}`}>
            <img className="header__img" src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
        </header>
        <section className={`pokemon__name`}>
        <h1 className={`header__number color-${pokemon?.types[0].type.name}`}>#{pokemon?.order}</h1>
            <h2 className={`header__tittle color-${pokemon?.types[0].type.name}`}>{pokemon?.name}</h2>
            <div className="pokemon__characteristics">
              <p  className="characteristics">Weight <span className="characteristics__value">{pokemon?.weight}</span></p >
              <p  className="characteristics">Height <span className="characteristics__value">{pokemon?.height}</span></p > 
            </div>
        </section>
        <article className="pokemon__abilities">
            <div className="abilities__container">
              <ul className="abilities__li">
                <span className="abilities__title">Type</span>
                <span className="abilities__container">
                  <li className={`abilities__value bg-${pokemon?.types[0]?.type.name}`}>{pokemon?.types[0]?.type.name} </li>
                  {pokemon?.types[1] && (
                  <li className={`abilities__value bg-${pokemon.types[1].type.name}`}>{pokemon.types[1].type.name}</li>
                  )}
                </span> 
                  
              </ul>
              <ul className="abilities__li">
                <span className="abilities__title">Abilities</span>
                <span className="abilities__container">
                      {pokemon?.abilities[0] && (
                        <li className="abilities__value value-abilities">
                          {pokemon.abilities[0].ability.name}
                        </li>
                      )}
                      {pokemon?.abilities[1] && (
                        <li className="abilities__value value-abilities">
                          {pokemon.abilities[1].ability.name}
                        </li>
                      )}
                    </span>                
              </ul>
            </div>
            <h1 className="stats__title">Stats</h1>
                        
              <ul className="stats">
             {pokemon && pokemon.stats.map((stat, index) => (
          <div key={index}>
              <li className="stats__value">{stat.stat.name}: <span className="stats__label">{stat.base_stat}/150</span></li>
              <div className="progress-bar">
                <div className={`progress-${index + 1}`} style={{ width: `${statsPercentage[`progress-${index + 1}`]}%` }}></div>
              </div>
          </div>
        ))}
              </ul>
        </article>
      </div>
      <footer className="movements">
          <h1 className="movements__title">Movements</h1>
          <div className="movements__container">
          {
          pokemon?.moves.map((move, index) => (
            <p key={index} className="movements__value">{move.move.name}</p>
          ))}
          </div>
      </footer>
    </div>
  )
}

export default PokeDetailPage
