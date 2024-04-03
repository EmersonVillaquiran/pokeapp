import { useSelector } from "react-redux"
import useFetch from "../hooks/useFetch"
import { useEffect, useRef, useState } from "react"
import ListPokemons from "../components/PokedexPage/ListPokemons"
import SelectType from "../components/PokedexPage/SelectType"
import './style/PokedexPage.css'


const PokedexPage = () => {

  const [pokeSearch, getPokeSearch ] = useState('')
  const [typeSelected, setTypeSelected] = useState('allPokemons')

  const inputSearch = useRef()

  const trainer = useSelector(states => states.trainer)

  const url = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0'
  const [ pokemons, getPokemons, getPokeByType ] = useFetch(url)


  useEffect(() => {
    if(typeSelected === 'allPokemons') {
      getPokemons()
    } else {
      getPokeByType(typeSelected)
    }
    
  }, [typeSelected])



  const handleSubmit = (e) => {
    e.preventDefault()
    getPokeSearch(inputSearch.current.value.trim().toLowerCase());
  }

  const pokemonsFiltered = pokemons?.results.filter(poke => {
    return poke.name.includes(pokeSearch)
  })

  

  return (
    <div className="header">
      <div className="header__div">
        <img className="header__title" src="/imagetitle.png" alt="" />
      </div>
      <p className="header__p">Welcome <span className="header__name">{trainer}</span>, here you can find your favorite Pokémon</p>
      <div className="header__form">
        <form className='container__form' onSubmit={handleSubmit} action="">
          <input className='container__input' ref={inputSearch} type="text" />
          <button className='container__btn'>Search</button>
        </form>
        <SelectType
        setTypeSelected={setTypeSelected}
        />
      </div>
      <ListPokemons 
        pokemons={pokemonsFiltered}
      />
    </div>
  )
}

export default PokedexPage
