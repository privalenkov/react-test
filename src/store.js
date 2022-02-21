import { configureStore } from '@reduxjs/toolkit'
import alertReducer from '@reducers/alert/alertSlice'
import formReducer from '@reducers/form/formSlice'


export default configureStore({
  reducer: {
      alert: alertReducer,
      form: formReducer,
  },
})