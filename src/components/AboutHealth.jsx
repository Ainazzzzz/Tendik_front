import React from 'react'
import styled from '@emotion/styled'
import { NavLink } from 'react-router-dom'
import { Box } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { DoctorImg, Rectange, Signature } from '../assets'
import AboutClinicLayout from './AboutClinicLayout'

const AboutHealth = () => {
   const { i18n } = useTranslation()

   window.scrollTo({ top: 0 })
   return (
      <StyledBox>
         <Container>
            <div>
               <NavigatePathTitle>
                  <p>
                     <NavLinkStyle to="/">
                        {i18n.t('main.main')} {' > '}
                     </NavLinkStyle>
                     <span>{i18n.t('header.aboutClinic')}</span>
                  </p>
               </NavigatePathTitle>
               <StyledTitleSubject>
                  {i18n.t('main.healthIst')}
                  <span style={{ color: '#048741' }}>
                     {' '}
                     {i18n.t('main.valueableInLive')}
                  </span>
               </StyledTitleSubject>
               <StyledMainContainer>
                  <StyledAboutText>
                     <p>{i18n.t('main.firstAboutDirector')}</p>
                     <br />
                     <br />
                     <br />
                     <p>{i18n.t('main.secondAboutDirector')}</p>
                     <StyledSignatureImG>
                        <img src={Signature} alt="main doctor" />
                     </StyledSignatureImG>
                  </StyledAboutText>
                  <div>
                     <StyledImageContainer>
                        <Rectange />
                        <StyledDoctorImG src={DoctorImg} alt="" />
                        <h3>Руководитель клиники Tendik</h3>
                        <h2>Рори Гвин</h2>
                     </StyledImageContainer>
                  </div>
               </StyledMainContainer>
            </div>
         </Container>
         <AboutClinicLayout />
      </StyledBox>
   )
}

export default AboutHealth

const StyledBox = styled(Box)(() => ({
   paddingBottom: '10rem',
   display: 'flex',
   flexDirection: 'column',
   gap: '6rem',
}))

const NavigatePathTitle = styled('div')(() => ({
   fontSize: '0.875rem',
   fontWeight: 400,
   padding: '1.625rem 0',
   span: {
      color: '#048741',
      cursor: 'pointer',
   },
}))

const NavLinkStyle = styled(NavLink)(() => ({
   textDecoration: 'none',
   color: '#959595',
}))
const StyledAboutText = styled.div`
   width: 38.71rem;
   p {
      font-size: 1.1rem;
      font-weight: 400;
      line-height: 1.625rem;
      color: #4d4e51;
   }
`

const StyledMainContainer = styled.div`
   display: flex;
   gap: 14rem;
`
const StyledImageContainer = styled.div`
   position: relative;
   text-align: center;
   margin-top: 2rem;
   h3 {
      font-size: 1.13rem;
      font-weight: 400;
      line-height: 1.563rem;
      color: #048741;
      margin-right: 10rem;
      margin-top: 3rem;
   }

   h2 {
      font-size: 1.4rem;
      font-weight: 400;
      line-height: 1.875rem;
      color: #222222;
      margin-right: 10rem;
   }
`

const Container = styled.div`
   display: flex;
   justify-content: center;
   margin-left: 10rem;
`
const StyledTitleSubject = styled.h1`
   font-size: 2.25rem;
   font-weight: 600;
   line-height: 3.074rem;
   margin-bottom: 3.5rem;
`
const StyledDoctorImG = styled('img')(() => ({
   width: '59%',
   height: '27.375rem',
   position: 'absolute',
   top: '-1.5rem',
   left: '2.5rem',
}))

const StyledSignatureImG = styled('div')(() => ({
   display: ' flex',
   justifyContent: 'end',
   img: {
      marginTop: '1.25rem ',
   },
}))
