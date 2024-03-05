import React, { useState } from 'react'
import { styled } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { Controller, useForm } from 'react-hook-form'
import dayjs from 'dayjs'
import { format } from 'date-fns'
import Modal from '../../components/UI/Modal'
import { SelectUI } from '../../components/UI/Select'
import DatePicker from '../../components/UI/DatePicker'
import {
   DEPARTMENTS,
   INTERVAL_IN_MINUTES,
   MED_SERVICE,
   TRANSLATED_MED_SERVICES_ENG,
} from '../../utils/services/med_service'
import {
   getAllDoctors,
   postNewAppointmentsThunk,
} from '../../store/appointments/adminAppointmentsThunk'
import Button from '../../components/UI/Button'
import { notify } from '../../utils/constants/snackbar'
import { axiosInstance } from '../../config/axiosInstance'
import { Input } from '../../components/UI/input/Input'

export const ModalAppointents = ({ open, onClose, setIsModalOpen }) => {
   const { doctors } = useSelector((state) => state.appointmentsAdmin)
   const dispatch = useDispatch()
   const [times, setTimes] = useState([])

   const { register, getValues, setValue, control, reset, handleSubmit } =
      useForm({
         mode: 'all',
         defaultValues: {
            departmentName: '',
            doctorId: 0,
            dateOfVisiting: '00:00',
            timeOfVisiting: '00:00',
            firstName: '',
            lastName: '',
            middleName: '',
            phoneNumber: '',
         },
      })

   const getFreeSlots = async (formattedDate, doctorId) => {
      try {
         const { data } = await axiosInstance.get(
            `/api/appointments/getFreeSlotsByDate?doctorId=${doctorId}&date=${formattedDate}`
         )

         setTimes(data.freeTimes)
      } catch (error) {
         console.error(error)
      }
   }

   const dateToday = dayjs()

   const handleStartDateChange = () => {
      const value = getValues()

      const formattedDate = format(new Date(value.dateOfVisiting), 'yyyy-MM-dd')

      setValue('dateOfVisiting', formattedDate)
      getFreeSlots(formattedDate, value.doctorId)
   }

   const serviceChangeHandler = (e) => {
      const selectedService = e
      const selectedServiceObject = MED_SERVICE.find(
         (service) => service.id === selectedService
      )
      if (selectedServiceObject) {
         const departmentId = selectedServiceObject.id
         dispatch(getAllDoctors({ departmentId }))
      } else {
         notify('Выберите услугу', 'error')
      }
   }

   const timeChangeHandler = (time) => {
      setValue('timeOfVisiting', time)
   }

   const handleFormSubmit = () => {
      const values = getValues()
      const errors = []
      if (!values.departmentName) {
         errors.push('Пожалуйста, укажите название отдела!')
      }
      if (!values.doctorId) {
         errors.push('Пожалуйста, выберите врача!')
      }

      if (errors.length > 0) {
         notify(errors[0], 'error')
      } else {
         dispatch(
            postNewAppointmentsThunk({
               ...values,
               departmentName:
                  TRANSLATED_MED_SERVICES_ENG[
                     DEPARTMENTS.find(
                        (department) => department.id === values.departmentName
                     ).title
                  ],
            })
         )
         setIsModalOpen(false)
         reset()
      }
   }

   const handleKeyPress = (e) => {
      const keys = e.key
      if (!/^\d$/.test(keys) && keys !== '+') {
         e.preventDefault()
      }
   }

   return (
      <Modal open={open} onClose={onClose}>
         <form onSubmit={handleSubmit(handleFormSubmit)}>
            <StyleModalContainer>
               <h2>Добавление записей</h2>
               <div className="blockAdd-app">
                  <Controller
                     control={control}
                     name="departmentName"
                     defaultValue={null}
                     render={({ field }) => (
                        <SelectUI
                           className="custom-select"
                           label="Услуга"
                           placeholder="Выберите услугу"
                           options={DEPARTMENTS}
                           {...field}
                           selected={field.value}
                           onChange={(e) => {
                              field.onChange(e)
                              serviceChangeHandler(e)
                           }}
                        />
                     )}
                  />
                  <Controller
                     control={control}
                     name="doctorId"
                     defaultValue={null}
                     render={({ field }) => (
                        <SelectUI
                           variant="doctors"
                           className="custom-select"
                           label="Специалист"
                           placeholder="Выберите специалиста"
                           options={doctors}
                           {...field}
                           selected={field.value}
                           onChange={(date) => field.onChange(date)}
                        />
                     )}
                  />
                  <div className="block-inputs">
                     <div>
                        <label htmlFor="start-date">Дата начала</label>
                        <Controller
                           control={control}
                           name="dateOfVisiting"
                           defaultValue={null}
                           render={({ field }) => (
                              <DatePicker
                                 {...field}
                                 selected={field.value}
                                 onChange={(date) => {
                                    field.onChange(date)
                                    handleStartDateChange()
                                 }}
                                 variant="custom"
                                 minDate={dateToday}
                              />
                           )}
                        />
                     </div>
                     <div>
                        <Controller
                           control={control}
                           name="timeOfVisiting"
                           defaultValue={null}
                           render={({ field }) => (
                              <SelectUI
                                 className="custom-select"
                                 label="Время"
                                 placeholder="Выберите время"
                                 options={times}
                                 {...field}
                                 selected={field.value}
                                 onChange={(time) => {
                                    field.onChange(time)
                                    timeChangeHandler(time)
                                 }}
                                 times
                              />
                           )}
                        />
                     </div>
                  </div>
                  <div className="block-inputs">
                     <div>
                        <label htmlFor="time-from-1">Имя</label>
                        <Input
                           width="100%"
                           fullWidth
                           {...register('firstName', {
                              setValueAs: (v) => v.trim(),
                              required: 'Поле не заполнено',
                           })}
                        />
                     </div>
                     <div>
                        <label htmlFor="time-to-1">Фамилия</label>
                        <Input
                           width="100%"
                           fullWidth
                           {...register('lastName', {
                              setValueAs: (v) => v.trim(),
                              required: 'Поле не заполнено',
                           })}
                        />
                     </div>
                     <div>
                        <label htmlFor="time-to-1">Отчество</label>
                        <Input
                           width="100%"
                           fullWidth
                           {...register('middleName', {
                              setValueAs: (v) => v.trim(),
                              required: 'Поле не заполнено',
                           })}
                        />
                     </div>
                     <div>
                        <label htmlFor="time-to-1">Номер телефона</label>
                        <Input
                           width="100%"
                           fullWidth
                           placeholder="+996 (_ _ _) _ _  _ _  _ _ "
                           onKeyPress={handleKeyPress}
                           {...register('phoneNumber', {
                              setValueAs: (v) => v.trim(),
                              required: 'Поле не заполнено',
                              minLength: {
                                 value: 13,
                                 message: 'Номер телефона слишком короткий',
                              },
                              maxLength: {
                                 value: 13,
                                 message: 'Номер телефона слишком длинный',
                              },
                           })}
                        />
                     </div>
                  </div>

                  <div className="block-buttons">
                     <Button
                        className="button-result"
                        variant="normal"
                        onClick={() => setIsModalOpen(false)}
                     >
                        ОТМЕНИТЬ
                     </Button>
                     <Button className="button-result" type="submit">
                        ОПУБЛИКОВАТЬ
                     </Button>
                  </div>
               </div>
            </StyleModalContainer>
         </form>
      </Modal>
   )
}

const StyleModalContainer = styled('div')`
   padding: 0% 3vh;
   .blockAdd-app {
      display: flex;
      flex-direction: column;
      justify-content: start;
      gap: 15px;
      margin-top: 20px;
   }
   h2 {
      text-align: center;
      font-size: 24px;
      font-weight: 500;
      color: #222;
   }
   label {
      display: block;
   }
   .custom-select {
      border-radius: 6px !important;
      height: 5.2vh;
      border: 0px solid #d4d4d4;
   }
   .block-inputs {
      display: flex;
      flex-direction: column;
      gap: 10px;
      width: 100%;
      span,
      p {
         margin-top: 1rem;
      }
   }
   .day-buttons {
      display: flex;
      gap: 15px;
      margin-bottom: 10px;
      button {
         background-color: #fff;
         padding: 10px 17px 10px 16px;
         justify-content: center;
         align-items: center;
         border-radius: 10px;
         border: 1px solid #d9d9d9;
         font-size: 16px;
         font-weight: 600;
         color: #959595;
         cursor: pointer;
      }
      button.active {
         background-color: #3977c0;
         color: #ffffff;
         border: 0.3px solid #3977c0;
      }
   }
   .block-buttons {
      display: flex;
      justify-content: space-between;
      gap: 15px;
      width: 100%;
      max-width: 100%;
   }
   .button-result {
      width: 17rem;
   }
`
