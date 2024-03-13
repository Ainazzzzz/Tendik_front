import React from 'react'
import styled from '@emotion/styled'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import PhoneIcon from '../assets/icons/phone-outlined1.svg'
import Email from '../assets/icons/email-outlined.svg'
import TimeIcon from '../assets/icons/time-outlined.svg'
import LocationIcon from '../assets/icons/location-outlined.svg'
import InstagramIcon from '../assets/icons/instagram-icon.svg'
import TelegramIcon from '../assets/icons/telegram-icon.svg'
import WhatsappIcon from '../assets/icons/whatsapp-icon.svg'
import { HealthCheckIcon, TendikAPK } from '../assets'

const Footer = () => {
   const { i18n } = useTranslation()
   return (
      <FooterContainer>
         <InfoContainer>
            <InfoBlock>
               <LogoContainer>
                  <NavLink to="/homepage">
                     <HealthCheckIcon />
                  </NavLink>
               </LogoContainer>
               <span>{i18n.t('main.medicalClinic')}</span>
               <p>
                  {i18n.t('main.welcomeDescription')} <br />{' '}
                  {i18n.t('main.welcomeDescription2')} <br />
                  {i18n.t('main.welcomeDescription3')}
                  <br /> {i18n.t('main.welcomeDescription4')}
               </p>
            </InfoBlock>
            <InfoBlock>
               <span>{i18n.t('main.contactInformation')}</span>
               <li>
                  <img src={LocationIcon} alt="location" />
                  <p>106452, г. Бишкек, Тендик 4/1</p>
               </li>
               <li>
                  <img src={TimeIcon} alt="time" />
                  <p>пн-сб 09:00 до 16:00</p>
               </li>
               <li>
                  <img src={PhoneIcon} alt="phone" />
                  <p>
                     +996(770) 503 284
                     <br /> +996(707) 503 284
                  </p>
               </li>
               <li>
                  <img src={Email} alt="email" />
                  <p>tendik.kg</p>
               </li>
            </InfoBlock>
            <InfoBlock>
               <span>{i18n.t('main.weAreOnSocialMedia')}</span>
               <SocialLinks>
                  <a
                     href="https://www.instagram.com/tendikproject"
                     target="_blank"
                     rel="noreferrer"
                  >
                     <img src={InstagramIcon} alt="instagram" />
                  </a>
                  <a
                     href="https://telegram.org/"
                     target="_blank"
                     rel="noreferrer"
                  >
                     <img src={TelegramIcon} alt="telegram" />
                  </a>
                  <a
                     href="https://whatsapp.com/"
                     target="_blank"
                     rel="noreferrer"
                  >
                     <img src={WhatsappIcon} alt="whatsapp" />
                  </a>
               </SocialLinks>
            </InfoBlock>
            <InfoBlock>
               <DownloadText>
                  Скачивайте наше приложение для Android
               </DownloadText>
               <TendikQR src={TendikAPK} alt="" />
            </InfoBlock>
         </InfoContainer>
         <Navigations>
            <NavLink to="/aboutClinic">{i18n.t('header.aboutClinic')}</NavLink>
            <NavLink to="/doctors">{i18n.t('header.doctors')}</NavLink>
            <NavLink to="/price">{i18n.t('header.price')}</NavLink>
            <NavLink to="/reviews">{i18n.t('main.reviews')}</NavLink>
            <NavLink to="/contacts">{i18n.t('header.contacts')}</NavLink>
         </Navigations>
         <div className="line" />
         <p>
            © Peaksoft House 2023 | Tendik | {i18n.t('main.allRightsReserved')}
         </p>
      </FooterContainer>
   )
}

export default Footer

const FooterContainer = styled('footer')`
   display: flex;
   flex-direction: column;
   align-items: center;
   background: #212529;
   padding: 4rem 0rem 1.2rem;
   .line {
      width: 90%;
      height: 0.5px;
      background-color: #ccc;
      margin-bottom: 1.2rem;
   }
   p {
      color: #959595;
   }
`
const InfoContainer = styled('div')`
   display: flex;
   align-items: flex-start;
   gap: 4rem;
   font-family: 'Manrope', sans-serif;
   color: #ccc;
   font-size: 1rem;
   font-style: normal;
   font-weight: 400;
   flex-wrap: wrap;
`
const LogoContainer = styled('div')`
   padding-bottom: 1.5rem;
`

const InfoBlock = styled('ul')`
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   span {
      padding-bottom: 0.8rem;
      font-weight: 500;
      color: #fff;
   }
   li {
      display: flex;
      color: inherit;
      list-style-type: none;
   }
   li > img {
      padding-right: 0.5rem;
   }
   p {
      color: #ccc;
      text-align: left;
   }
`
const SocialLinks = styled('div')`
   display: flex;
   flex-direction: row;
   align-items: flex-start;
   gap: 0.8rem;
`

const Navigations = styled('div')`
   display: flex;
   flex-direction: row;
   flex-wrap: wrap;
   gap: 1.5rem;
   padding: 3rem;
   a {
      text-decoration: none;
      color: #ccc;
   }
`

const TendikQR = styled('img')`
   width: 200px;
`

const DownloadText = styled('p')`
   font-weight: 500;
   color: #fff !important;
   margin-bottom: 10px;
`
