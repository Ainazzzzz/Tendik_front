import React from 'react'
import styled from '@emotion/styled'
import { NavLink } from 'react-router-dom'
import { t } from 'i18next'
import Logo from '../assets/icons/logo.svg'
import PhoneIcon from '../assets/icons/phone-outlined1.svg'
import Email from '../assets/icons/email-outlined.svg'
import TimeIcon from '../assets/icons/time-outlined.svg'
import LocationIcon from '../assets/icons/location-outlined.svg'
import InstagramIcon from '../assets/icons/instagram-icon.svg'
import TelegramIcon from '../assets/icons/telegram-icon.svg'
import WhatsappIcon from '../assets/icons/whatsapp-icon.svg'

const Footer = () => {
   return (
      <FooterContainer>
         <InfoContainer>
            <InfoBlock>
               <LogoContainer>
                  <NavLink to="/homepage">
                     <img src={Logo} alt="tendik" />
                  </NavLink>
               </LogoContainer>
               <span>{t('main.medicalClinic')}</span>
               <p>
                  {t('main.welcomeDescription')} <br />{' '}
                  {t('main.welcomeDescription2')} <br />
                  {t('main.welcomeDescription3')}
                  <br /> {t('main.welcomeDescription4')}
               </p>
            </InfoBlock>
            <InfoBlock>
               <span>{t('main.contactInformation')}</span>
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
               <span>{t('main.weAreOnSocialMedia')}</span>
               <SocialLinks>
                  <a
                     href="https://www.instagram.com/tendikproject?igsh=MTBkaDA3MXltcHJsMA=="
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
         </InfoContainer>
         <Navigations>
            <NavLink to="/aboutClinic">{t('header.aboutClinic')}</NavLink>
            <NavLink to="/doctors">{t('header.doctors')}</NavLink>
            <NavLink to="/price">{t('header.price')}</NavLink>
            <NavLink to="/reviews">{t('header.reviews')}</NavLink>
            <NavLink to="/contacts">{t('header.contacts')}</NavLink>
         </Navigations>
         <div className="line" />
         <p>© Peaksoft House 2023 | Tendik | {t('main.allRightsReserved')}</p>
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
   gap: 8.5rem;
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
