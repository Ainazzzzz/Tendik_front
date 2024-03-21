import { createSlice } from '@reduxjs/toolkit'
import {
   createAppointments,
   getAllDoctors,
   getDoctorsTimesheets,
} from './appointmentThunk'

const initialState = {
   doctors: [],
   doctorTimesheets: [],
   error: null,
   appointmentData: [],
}

export const appointmentSlice = createSlice({
   name: 'appointment',
   initialState,
   reducers: {
      clearError: (state) => {
         state.error = null
      },
   },
   extraReducers: (builder) => {
      builder.addCase(getAllDoctors.fulfilled, (state, action) => {
         state.doctors = action.payload
      })
      builder
         .addCase(getDoctorsTimesheets.fulfilled, (state, action) => {
            state.doctorTimesheets = action.payload
         })
         .addCase(getDoctorsTimesheets.rejected, (state, action) => {
            state.error = action.payload
         })
         .addCase(createAppointments.fulfilled, (state, action) => {
            state.appointmentData = action.payload
         })
   },
})

export const { getDoctors, clearError } = appointmentSlice.actions
