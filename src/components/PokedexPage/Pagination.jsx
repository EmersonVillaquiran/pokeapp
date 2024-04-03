import React from "react";
import './style/Pagination.css'

const Pagination = ({pokemonPerPage, currentPage, setCurrentPage, totalCharacter}) => {

    const pageNumber = []

    //Numero de paginas
    const totalPages = Math.ceil(totalCharacter / pokemonPerPage);

    const displayPages = 5; // Número de páginas que deseas mostrar antes y después de los puntos suspensivos

    let startPage, endPage;

    if (totalPages <= displayPages) {
        // Si el total de páginas es menor o igual al número de páginas que deseas mostrar, muestra todas las páginas
        startPage = 1;
        endPage = totalPages;
    } else {
        // Calcula las páginas de inicio y fin considerando la página actual
        const halfDisplay = Math.floor(displayPages / 2);
        if (currentPage <= halfDisplay) {
            startPage = 1;
            endPage = displayPages;
        } else if (currentPage + halfDisplay >= totalPages) {
            startPage = totalPages - displayPages + 1;
            endPage = totalPages;
        } else {
            startPage = currentPage - halfDisplay;
            endPage = currentPage + halfDisplay;
        }
    }
    //Finaliza

    for (let i = startPage; i <= endPage; i++){
        pageNumber.push(i)
    }

    const onSpecificPage = (n) =>{
        setCurrentPage(n)
    }


  return (
    <nav
      className="pagination is-centered p-6"
      role="navigation"
      aria-label="pagination"
    >
      <ul className="pagination-list">
      {
                    startPage !== 1 &&
                    <>
                    <li>
                        <a className={`pagination-link`} onClick={() => onSpecificPage(1)}>1</a>
                    </li>
                    <li>
                        <span className="pagination-ellipsis">&hellip;</span>
                    </li>
                </>
                }
        {
            pageNumber.map(noPage => (
                <li key={noPage}>
                    <a className={`pagination-link ${noPage === currentPage ? 'is-current' : ''}`} 
                    onClick={() => onSpecificPage(noPage)} >{noPage}</a>
                </li>
               
            ))
        } 
         {
                   endPage !== totalPages &&
                   <>
                       <li>
                           <span className="pagination-ellipsis">&hellip;</span>
                       </li>
                       <li>
                           <a className={`pagination-link`} onClick={() => onSpecificPage(totalPages)}>{totalPages}</a>
                       </li>
                   </>
                }    
      </ul>
    </nav>
  );
};

export default Pagination;
