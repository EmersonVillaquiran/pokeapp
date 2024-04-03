import { useState } from "react"
import PokemonCard from "./PokemonCard"
import './style/ListPokemons.css'
import Pagination from "./Pagination"

const ListPokemons = ({pokemons}) => {
  // Paginado
  const [pokemonPerPage, setPokemonPerPage] = useState(8)
  const [currentPage, setCurrentPage] = useState(1)
  
  const lastIndex = currentPage * pokemonPerPage
  const firstIndex = lastIndex - pokemonPerPage

  const totalCharacter = pokemons?.length
  
  return (
    <>
    <article  className="container">
      {
        pokemons?.map(pokeInfo => (
            <PokemonCard
                key={pokeInfo.url}
                pokeInfo={pokeInfo}
            />
         )).slice(firstIndex, lastIndex)
      }
    </article>
    <footer>
      <div className="footer__list">
        <Pagination
          pokemonPerPage={pokemonPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalCharacter={totalCharacter}
        />
        </div>
    </footer>
    </>
    
    
  )
}

export default ListPokemons
