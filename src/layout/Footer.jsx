import React from 'react'
import styled from '@emotion/styled'
import { NavLink } from 'react-router-dom'
import {
   Email,
   HealthCheckIcon,
   InstagramWhite,
   LocationIcon,
   PhoneIcon,
   TelegramWhite,
   TimeIcon,
   WhatsAppWhite,
} from '../assets'

const Footer = () => {
   return (
      <FooterContainer>
         <InfoContainer>
            <InfoBlock>
               <LogoContainer>
                  <NavLink to="/homepage">
                     <HealthCheckIcon />
                  </NavLink>
               </LogoContainer>
               <span>Медицинская клиника «Tendik»</span>
               <p>
                  Международная Медицинская клиника <br /> «Tendik»— это
                  клиника, в которой применяются <br />
                  новейшие диагностические и лечебные технологии и<br /> ведут
                  прием лучшие специалисты.
               </p>
            </InfoBlock>
            <InfoBlock>
               <span>Контактная информация</span>
               <li>
                  <LocationIcon />
                  <p>106452, г. Бишкек, Тендик 4/1</p>
               </li>
               <li>
                  <TimeIcon />
                  <p>пн-сб 09:00 до 16:00</p>
               </li>
               <li>
                  <PhoneIcon />
                  <p>
                     +996(770) 503 284
                     <br /> +996(707) 503 284
                  </p>
               </li>
               <li>
                  <Email />
                  <p>tendik.kg</p>
               </li>
            </InfoBlock>
            <InfoBlock>
               <span>Мы в социальных сетях:</span>
               <SocialLinks>
                  <a
                     href="https://www.instagram.com/tendikproject?igsh=MTBkaDA3MXltcHJsMA=="
                     target="_blank"
                     rel="noreferrer"
                  >
                     <InstagramWhite />
                  </a>
                  <a
                     href="https://telegram.org/"
                     target="_blank"
                     rel="noreferrer"
                  >
                     <TelegramWhite />
                  </a>
                  <a
                     href="https://whatsapp.com/"
                     target="_blank"
                     rel="noreferrer"
                  >
                     <WhatsAppWhite />
                  </a>
               </SocialLinks>
            </InfoBlock>
         </InfoContainer>
         <Navigations>
            <NavLink to="/about-clinic">О клинике</NavLink>
            <NavLink to="/doctors">Врачи</NavLink>
            <NavLink to="/prices">Прайс</NavLink>
            <NavLink to="/contacts">Контакты</NavLink>
         </Navigations>
         <div className="line" />
         <p>© Peaksoft House 2023 | Tendik | Все права защищены</p>
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
