import { configureStore } from '@reduxjs/toolkit'
import trainer from './state/trainer.slice'

export default configureStore ({
 reducer:{
    trainer  
 }
})