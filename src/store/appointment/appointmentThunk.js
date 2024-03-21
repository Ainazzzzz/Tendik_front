import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../config/axiosInstance'
import { notify } from '../../utils/constants/snackbar'

export const getAllDoctors = createAsyncThunk(
   'appointment/doctors',
   async ({ departmentId }, { rejectWithValue }) => {
      try {
         const { data } = await axiosInstance.get(
            'api/appointments/getDoctorsByDepartment',
            {
               params: { departmentId },
            }
         )
         return data
      } catch (error) {
         const errorMessage = error.response.data.message.replace(
            /^\[|\]$/g,
            ''
         )
         notify(errorMessage, 'error')
         return rejectWithValue(error)
      }
   }
)

export const getDoctorsTimesheets = createAsyncThunk(
   'appointment/timesheets',
   async ({ doctorId }, { rejectWithValue }) => {
      try {
         const { data } = await axiosInstance.get(
            'api/appointments/getDoctorWithFreeTimesheets',
            {
               params: { doctorId },
            }
         )
         return data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

export const createAppointments = createAsyncThunk(
   'appoinement/createAppoinement',
   async ({ obj }, { rejectWithValue }) => {
      try {
         const { data } = await axiosInstance.post(
            'api/appointments/createOnlineAppointments',
            {
               departmentName: obj.department,
               doctorId: obj.doctorId,
               dateOfVisiting: obj.date,
               timeOfVisiting: obj.time,
               firstName: obj.firstName,
               lastName: obj.lastName,
               middleName: obj.middleName,
               phoneNumber: obj.phone,
            }
         )
         return data
      } catch (error) {
         const errorMessage = error.response.data.message
            .replace(/^\[|\]$/g, '')
            .substring(0, 48)
         notify(errorMessage, 'error')
         return rejectWithValue(error)
      }
   }
)

export const cancelAppointment = createAsyncThunk(
   'appointment/cancalAppointment',
   async ({ appointmentId }, { rejectWithValue }) => {
      try {
         const { data } = await axiosInstance.post(
            'api/appointments/canceled',
            null,
            {
               params: { appointmentId },
            }
         )
         return data
      } catch (error) {
         const errorMessage = error.response.data.message.replace(
            /^\[|\]$/g,
            ''
         )
         notify(errorMessage, 'error')
         return rejectWithValue(error)
      }
   }
)
