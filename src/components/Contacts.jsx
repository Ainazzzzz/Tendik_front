import { Stack } from '@mui/system'
import styled from '@emotion/styled'
import React from 'react'
import { Breadcrumbs } from '@mui/material'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Map from './Map'

const Contacts = () => {
   window.scrollTo({ top: 0 })

   const { i18n } = useTranslation()
   return (
      <div>
         <Wrapper>
            <Stack spacing={2}>
               <Container separator="›" aria-label="breadcrumb">
                  <StyledNavLink to="/">
                     <p>{i18n.t('main.main')}</p>
                  </StyledNavLink>
                  <p>{i18n.t('header.contacts')}</p>
               </Container>
            </Stack>
            <Titl>
               {i18n.t('main.our')}{' '}
               <span style={{ color: '#048741' }}>
                  {i18n.t('main.contacts')}
               </span>
            </Titl>
            <Title>{i18n.t('main.ourContactsDescription')}</Title>
            <ContainerInfo>
               <ContactInfo>{i18n.t('main.contactNumbers')}</ContactInfo>
               <ContactInfoP>+996(770) 503 284; +996(707) 503 284</ContactInfoP>
            </ContainerInfo>
            <ContainerInfo>
               <ContactInfo>{i18n.t('main.ourAddress')}</ContactInfo>
               <ContactInfoP>Кыргызстан, г. Бишкек, Тендик 4/1</ContactInfoP>
            </ContainerInfo>
            <ContainerInfo>
               <ContactInfo>{i18n.t('main.clinicWorkingHours')}</ContactInfo>
               <ContactInfoP>
                  Понедельник - суббота с 09:00 до 16:00.
               </ContactInfoP>
            </ContainerInfo>
            <ContainerInfo>
               <ContactInfo>{i18n.t('main.email')}</ContactInfo>
               <ContactInfoP> tendik.kg</ContactInfoP>
            </ContainerInfo>
         </Wrapper>
         <Map />
      </div>
   )
}

export default Contacts

const Wrapper = styled('div')(() => ({
   '&': {
      paddingLeft: '100px',
      paddingBottom: '120px',
   },
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

const Title = styled('p')(() => ({
   '&': {
      fontFamily: 'Manrope',
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '18px',
      color: '#4D4E51',
      width: '681px',
      paddingTop: '34px',
      paddingBottom: '40px',
   },
}))

const ContactInfo = styled('p')(() => ({
   '&': {
      fontFamily: 'Manrope',
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '18px',
      color: '#222222',
   },
}))

const ContactInfoP = styled('p')(() => ({
   '&': {
      fontFamily: 'Manrope',
      fontStyle: 'normal',
      fontWeight: 500,
      fontSize: '18px',
      color: '#048741',
   },
}))

const ContainerInfo = styled('div')(() => ({
   '&': {
      paddingTop: '20px',
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
