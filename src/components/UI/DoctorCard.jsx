import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from '@emotion/styled'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import Button from './Button'
import { localStorageKeys } from '../../utils/constants/constants'
import OnlineAppointment from '../appointment/OnlineAppointment'
import { notify } from '../../utils/constants/snackbar'

export default function DoctorCard({ doctor }) {
   const [isDrawerOpen, setIsDrawerOpen] = useState(false)
   const { isAuth } = useSelector((state) => state.authorization)

   const isDrawerOpenHandler = () => {
      if (isAuth) {
         localStorage.setItem(
            localStorageKeys.DRAWER_MODAL_KEY,
            JSON.stringify(true)
         )
         setIsDrawerOpen(true)
      } else {
         notify('Вы не зарегистрированы', 'error')
         localStorage.setItem(
            localStorageKeys.SIGN_IN_MODAL_KEY,
            JSON.stringify(true)
         )
      }
   }

   const { id, image, firstName, lastName, position } = doctor
   const { i18n } = useTranslation()
   return (
      <Container>
         <OnlineAppointment open={isDrawerOpen} setOpen={setIsDrawerOpen} />
         <div key={id}>
            <Link to={`/doctors/${id}`}>
               <img src={image} alt={firstName} />
            </Link>
            <Link to={`/doctors/${id}`} className="title">
               {`${firstName} ${lastName}`}
            </Link>
            <Link to={`/doctors/${id}`} className="position">
               {position}
            </Link>
            <Button
               variant="outlined"
               type="submit"
               onClick={isDrawerOpenHandler}
            >
               {i18n.t('main.makeAnAppointment')}
            </Button>
         </div>
      </Container>
   )
}
const Container = styled('div')(() => ({
   '& div': {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem',
      width: '19rem',
      height: '26rem',
      borderRadius: '4px',
   },
   '& img': {
      width: '19rem',
      height: '20rem',
   },
   '& button': {
      padding: '10px 20px',
      borderRadius: '10px',
      marginTop: '0.5rem',
   },
   '& .title': {
      display: 'flex',
      justifyContent: 'flex-start',
      fontSize: '1.125rem',
      fontWeight: '31.25rem',
      color: 'black',
   },
   '& .position': {
      display: 'flex',
      justifyContent: 'flex-start',
      fontSize: '1rem',
      fontWeight: '31.25rem',
      color: '#959595',
   },
}))
