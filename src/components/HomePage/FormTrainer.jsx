import React, { useRef } from 'react'
import { setTrainer } from '../../store/state/trainer.slice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import './styles/FormTrainer.css'

const FormTrainer = () => {    

    const trainerInput = useRef()

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(setTrainer(trainerInput.current.value.trim()))
        navigate('/pokedex') 
    }

  return (
 
    <form className='container__form' onSubmit={handleSubmit} action="">
          <input className='container__input' ref={trainerInput} type="text" placeholder='Tu nombre..' />
          <button className='container__btn'>Lets Start</button>
    </form>  
  )
}

export default FormTrainer
