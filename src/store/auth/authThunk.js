import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../config/axiosInstance'
import { USER_KEY, routes } from '../../utils/constants/constants'
import { login } from './authSlice'
import { notify } from '../../utils/constants/snackbar'

export const forgotPassword = createAsyncThunk(
   'authorization/forgotPassword',
   async ({ email, link, navigate }, { rejectWithValue, dispatch }) => {
      try {
         const { data } = await axiosInstance.put(
            '/api/auth/forgot-password',
            null,
            {
               params: { email, link },
            }
         )
         localStorage.setItem(USER_KEY, JSON.stringify(data))
         localStorage.setItem('EMAIL_KEY_FROM_FORGOT_PASSWORD', email)
         notify('Вам была отправлена ссылка для сброса вашего пароля')
         return dispatch(login({ data, navigate }))
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

export const changePassword = createAsyncThunk(
   'authorization/changePassword',
   async (
      { uniqueId, newPassword, navigate },
      { rejectWithValue, dispatch }
   ) => {
      try {
         const { data } = await axiosInstance.put(
            '/api/auth/replace-password',
            {
               newPassword,
               token: uniqueId,
            }
         )

         localStorage.setItem(USER_KEY, JSON.stringify(data))
         localStorage.removeItem('EMAIL_KEY_FROM_FORGOT_PASSWORD')
         notify('Пароль успешно изменён')
         navigate('/homepage')

         return dispatch(login({ data, navigate }))
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

export const signUp = createAsyncThunk(
   'authorization/signUp',
   async ({ values, navigate }, { rejectWithValue, dispatch }) => {
      try {
         const { data } = await axiosInstance.post('/api/auth/signUp', {
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            phoneNumber: values.phoneNumber,
            password: values.password,
         })
         localStorage.setItem(USER_KEY, JSON.stringify(data))
         notify('Вы успешно зарегистрированы')
         return dispatch(login({ data, navigate }))
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

export const signIn = createAsyncThunk(
   'authorization/login',
   async ({ values, navigate }, { rejectWithValue, dispatch }) => {
      try {
         const { data } = await axiosInstance.post('/api/auth/signIn', {
            email: values.email,
            password: values.password,
         })
         localStorage.setItem(USER_KEY, JSON.stringify(data))
         notify('Вход успешно выполнен')
         return dispatch(login({ data, navigate }))
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

export const authWithGoogle = createAsyncThunk(
   'authorization/google',
   async ({ token, navigate }, { rejectWithValue, dispatch }) => {
      try {
         const { data } = await axiosInstance.post('/api/auth/google', null, {
            params: { token },
         })
         localStorage.setItem(USER_KEY, JSON.stringify(data))
         notify('Вход через Google успешно выполнен')
         return dispatch(login({ data, navigate }))
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
