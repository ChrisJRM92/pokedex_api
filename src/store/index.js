import { configureStore } from '@reduxjs/toolkit'
import trainer from './slices/trainerSlice'

export default configureStore({
  reducer:{
    trainer
  }
})