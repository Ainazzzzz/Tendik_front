import React, { useState } from 'react'
import dayjs from 'dayjs'
import { styled } from '@mui/material'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar'
import { fr } from 'date-fns/locale'
import { useSelector } from 'react-redux'
import { DAYS_OF_A_WEEK, months } from '../../utils/constants/commons'

const currentDate = new Date()
const year = currentDate.getFullYear()
const month = currentDate.getMonth() + 1
const day = currentDate.getDate()
const formattedDate = `${year}-${month}-${day}`

const ChooseDate = ({ dateChangeHandler }) => {
   const [value, setValue] = useState(dayjs(formattedDate))

   const { doctorTimesheets } = useSelector((state) => state.appointment)

   const chooseDateHandler = (time) => {
      const data = value.$d

      const day = data.getDate()
      const month = months[data.getMonth()]
      const dayOfAWeek = DAYS_OF_A_WEEK[data.getDay()]

      const obj = { day, month, dayOfAWeek, time }
      dateChangeHandler(obj)
   }

   // const doctors = [
   //    {
   //       id: 1,
   //       name: 'Манак Елена',
   //       freeTimesheets: [
   //          { id: 1, timeFrom: '9:00' },
   //          { id: 2, timeFrom: '10:00' },
   //       ],
   //    },
   //    {
   //       id: 2,
   //       name: 'Манак Елена',
   //       freeTimesheets: [
   //          { id: 3, timeFrom: '2:00' },
   //          { id: 4, timeFrom: '3:00' },
   //       ],
   //    },
   // ]

   const mappedFreeTimesheets = doctorTimesheets[0].freeTimesheets.map(
      (time, index) => {
         return { timeFrom: time, index }
      }
   )

   return (
      <>
         <Container>
            <LocalizationProvider dateAdapter={AdapterDayjs} localeText={fr}>
               <DateCalendar
                  value={value}
                  onChange={(newValue) => setValue(newValue)}
                  // slotProps={{
                  //    // desktopPaper: {
                  //    sx: {
                  //       '& .MuiButtonBase-root-MuiPickersDay-root.Mui-selected':
                  //          {
                  //             background: '#048741',
                  //          },
                  //    },
                  //    // },
                  // }}
               />
            </LocalizationProvider>
         </Container>
         <TimeContainer>
            {mappedFreeTimesheets.map((time) => (
               <Time
                  key={time.id}
                  onClick={() => chooseDateHandler(time.timeFrom)}
               >
                  {time.timeFrom}
               </Time>
            ))}
         </TimeContainer>
      </>
   )
}

export default ChooseDate

const Time = styled('div')(() => ({
   width: '98px',
   marginBottom: '6px',
   marginRight: '6px',
   padding: '8px 0',
   border: '1px solid #D9D9D9',
   borderRadius: '16px',
   fontFamily: 'Manrope',
   fontStyle: 'normal',
   fontWeight: 500,
   fontSize: '12px',
   lineHeight: '16px',
   color: '#4D4E51',
   display: 'flex',
   justifyContent: 'center',
   cursor: 'pointer',
   '&:hover': {
      backgroundColor: '#048741',
      color: '#ffffff',
      border: '1px solid #048741',
   },
}))

const Container = styled('div')(() => ({
   margin: '1px 0 6px',
   backgroundColor: '#fff',
}))

const TimeContainer = styled('div')(() => ({
   padding: '20px',
   width: '367px',
   display: 'flex',
   flexWrap: 'wrap',
   backgroundColor: '#fff',
   borderRadius: '16px',
   marginLeft: '6px',
}))
