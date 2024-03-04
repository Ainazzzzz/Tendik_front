import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from '@emotion/styled'
import { Breadcrumbs, Stack } from '@mui/material'
import { NavLink } from 'react-router-dom'
import { t } from 'i18next'
import DoctorCard from '../../components/UI/DoctorCard'
import { fetchDoctors } from '../../store/doctors/doctorsThunk'

const Doctors = () => {
   const { doctors } = useSelector((state) => state.doctors)
   const [showAllDepartments, setShowAllDepartments] = useState(false)

   const dispatch = useDispatch()
   useEffect(() => {
      dispatch(fetchDoctors())
   }, [dispatch])

   const handleShowMoreClick = () => {
      setShowAllDepartments(true)
   }
   const handleShowLessClick = () => {
      setShowAllDepartments(false)
   }

   const groupedDoctors = doctors.reduce((acc, doctor) => {
      const { departmentName } = doctor

      if (!acc[departmentName]) {
         acc[departmentName] = []
      }

      acc[departmentName].push(doctor)

      return acc
   }, {})

   const visibleDepartments = showAllDepartments
      ? Object.keys(groupedDoctors)
      : Object.keys(groupedDoctors).slice(0, 4)

   console.log(visibleDepartments, 'psjsp')

   return (
      <StyledDoctorsContainer>
         <Stack spacing={2}>
            <Container separator="›" aria-label="breadcrumb">
               <StyledNavLink to="/">
                  <p>Главная</p>
               </StyledNavLink>
               <p>Врачи</p>
            </Container>
         </Stack>
         <Titl>
            {t('main.our')}
            <span style={{ color: '#048741' }}> {t('main.doctors')}</span>
         </Titl>
         <p className="text">{t('main.ourDoctorsFirstDescription')}</p>
         <p className="text">
            {t('main.ourDoctorsSecondDscription')} <br />
            {t('main.ourDoctorsSecond')}
         </p>

         <StyledDoctorsInnerContainer>
            {visibleDepartments.map((department) => (
               <div key={department}>
                  <StyledText>{department}</StyledText>
                  <StyledDoctorCard>
                     {groupedDoctors[department].slice(0, 3).map((doctor) => (
                        <DoctorCard doctor={doctor} />
                     ))}
                  </StyledDoctorCard>
               </div>
            ))}
            <StyledSpan>
               {t('main.ourClinicDoctors')} <b>{t('moreDoctors')}</b>
               {!showAllDepartments ? (
                  <StyledButton onClick={handleShowMoreClick}>
                     {t('main.readMore')}
                  </StyledButton>
               ) : (
                  <StyledButton onClick={handleShowLessClick}>
                     {t('main.showLess')}
                  </StyledButton>
               )}
            </StyledSpan>
         </StyledDoctorsInnerContainer>
      </StyledDoctorsContainer>
   )
}

export default Doctors

const StyledDoctorsContainer = styled('div')(() => ({
   maxWidth: '100%',
   display: 'flex',
   flexDirection: 'column',
   justifyContent: 'center',
   marginTop: '30px',
   paddingLeft: '100px',
   paddingBottom: '120px',
   fontFamily: 'Manrope',
   '.text': {
      paddingTop: '2rem',
   },
}))

const StyledDoctorsInnerContainer = styled('div')(() => ({
   maxWidth: '100%',
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'flex-start',
}))

const StyledDoctorCard = styled('div')(() => ({
   display: 'flex',
   flexDirection: 'row',
   alignItems: 'center',
   gap: '3rem',
}))

const StyledButton = styled('button')(() => ({
   color: '#048741',
   background: 'none',
   border: 'none',
   paddingLeft: '0.5rem',
   cursor: 'pointer',
}))

const StyledText = styled('p')(() => ({
   marginTop: '4rem',
   fontSize: '24px',
   width: '600',
   padding: '20px 0',
}))

const StyledSpan = styled('span')(() => ({
   margin: '7rem auto',
}))

const Titl = styled('h2')(() => ({
   '&': {
      fontFamily: 'Manrope',
      fontStyle: 'normal',
      fontWeight: 600,
      fontSize: '36px',
      lineHeight: '49px',
      color: '#222222',
      marginTop: '2rem',
   },
}))

const Container = styled(Breadcrumbs)({
   fontWeight: 400,
   fontSize: '14px',
   lineHeight: '19px',
   paddingTop: '25px',
   marginBottom: '26px',
   fontFamily: 'Manrope',
   fontStyle: 'normal',
   '& .css-1bifq5f-MuiTypography-root-MuiBreadcrumbs-root': {
      fontFamily: 'Manrope',
   },
   ':last-child': {
      color: '#048741',
   },
})

const StyledNavLink = styled(NavLink)({
   textDecoration: 'none',
   color: ' #959595',
   fontFamily: 'Manrope',
   fontStyle: 'normal',
})
