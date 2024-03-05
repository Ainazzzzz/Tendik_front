import React from 'react'
import styled from '@emotion/styled'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import InputForm from './InputForm'
import Button from '../UI/Button'
import { departments, months } from '../../utils/constants/commons'
import { notify } from '../../utils/constants/snackbar'
import { createAppointments } from '../../store/appointment/appointmentThunk'

const AppointmentForm = ({
   date,
   service,
   selectedDoctorId,
   openRegistered,
}) => {
   const dispatch = useDispatch()

   const phoneNumberRegex = /^(\+996|0)\d{9}$/

   const {
      register,
      formState: { errors },
      getValues,
      setValue,
   } = useForm({
      mode: 'all',
      defaultValues: {
         name: '',
         phone: '',
      },
   })

   const getMonthNumber = (monthString) => {
      const monthIndex = months.findIndex(
         (m) => m && m.toLowerCase() === monthString.toLowerCase()
      )
      if (monthIndex !== -1) {
         const monthNumber = monthIndex + 1
         return monthNumber < 10 ? `0${monthNumber}` : `${monthNumber}`
      }
      notify('Месяц не найден', 'error')
      return null
   }

   const getDay = (day) => {
      if (day < 10) {
         return `0${day}`
      }
      return `${day}`
   }

   const handleKeyPress = (e) => {
      const keys = e.key
      if (!/^\d$/.test(keys) && keys !== '+') {
         e.preventDefault()
      }
   }

   // const submitEmail = async (data, e) => {
   //    e.preventDefault()
   //    if (!errors.name) {
   //       if (!errors.phone && !errors.email && getValues().email.length !== 0) {
   //          setFormSubmitted(true)
   //          dispatch(getCode({ email: data.email }))
   //       } else {
   //          notify(
   //             errors.phone
   //                ? 'Номер телефона не соответствует правилам'
   //                : 'Поле email не заполнено',
   //             'error'
   //          )
   //       }
   //    } else {
   //       notify('Напишите полное имя', 'error')
   //    }
   // }

   const submitAppointment = async (data, e) => {
      e.preventDefault()
      const department = departments[service]
      console.log(department, 'asfasf', service)
      const formatDate = `2024-${getMonthNumber(date.month)}-${getDay(
         date.day
      )}`
      const formatTime = date.time

      const obj = {
         department,
         doctorId: selectedDoctorId,
         date: formatDate,
         time: formatTime,
         ...data,
      }

      dispatch(createAppointments({ obj }))
         .unwrap()
         .then(() => openRegistered())
         .catch((error) =>
            console.log(error, 'error в AppointmentForm строка 85')
         )
   }

   return (
      <Form onSubmit={(e) => submitAppointment(getValues(), e)}>
         <div>
            <InputForm
               label="Ваше имя и фамилия"
               type="text"
               {...register('name', {
                  required: 'Поле не заполнено',
                  pattern: {
                     message: 'Введите два слова',
                  },
               })}
               onChange={(e) => setValue('name', e.target.value)}
               error={errors.name}
            />
            <InputForm
               label="Номер телефона"
               type="text"
               onKeyPress={handleKeyPress}
               {...register('phone', {
                  setValueAs: (v) => v.trim(),
                  required: 'Поле не заполнено',
                  pattern: {
                     value: phoneNumberRegex,
                     message: 'Неправильный формат номера',
                  },
                  validate: {
                     minLength: (value) =>
                        value.length >= 10 || 'Номер телефона слишком короткий',
                     maxLength: (value) =>
                        value.length <= 13 || 'Номер телефона слишком длинный',
                  },
               })}
               onChange={(e) => setValue('phone', e.target.value)}
               error={errors.phone}
            />
         </div>

         <StyledButton type="submit">Продолжить</StyledButton>
      </Form>
   )
}

export default AppointmentForm

const Form = styled('form')(() => ({
   display: 'flex',
   flexDirection: 'column',
   gap: '1.8rem',
   margin: '6px',
   padding: '30px 16px',
   backgroundColor: '#fff',
   borderRadius: '16px',
   '& .message': {
      color: 'red',
      fontSize: '0.8rem',
      position: 'absolute',
   },
   '.codeInput': {
      width: '40%',
   },
}))

const StyledButton = styled(Button)(() => ({
   width: '100%',
}))
