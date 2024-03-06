import React from 'react'
import { styled } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { prices } from '../utils/constants/accordions'

const Prices = () => {
   window.scrollTo({ top: 0 })

   const { i18n } = useTranslation()
   return (
      <>
         <MainPart>
            <a href="/">
               {i18n.t('main.main')} {'>'}
            </a>
            <span className="service"> {i18n.t('header.price')}</span>
         </MainPart>
         <ServiceStyle>
            <span>{i18n.t('main.oure')}</span>
            <span className="our_service"> {i18n.t('main.lowerPrice')}</span>
         </ServiceStyle>
         <P>{i18n.t('main.aboutPrice')}</P>

         <PricesContainer>
            {prices.map((item) => (
               <div className="prices">
                  <p>{item.title}</p>
                  <p>{item.price}</p>
               </div>
            ))}
         </PricesContainer>
      </>
   )
}

export default Prices

export const StyledAccordions = styled('div')`
   display: flex;
   flex-direction: column;
   gap: 20px;
   .MuiTypography-root {
      font-family: 'Manrope';
      font-size: 20px;
   }
   .description {
      font-size: 18px;
      margin-top: 1rem;
      margin-bottom: 1rem;
   }
   h3 {
      font-size: 18px;
      font-weight: 575;
   }
   h2 {
      font-weight: 500;
      font-size: 20px;
   }
   .prices-data {
      display: flex;
      justify-content: space-between;
   }
   .prices {
      display: flex;
      justify-content: space-between;
      padding: 10px 0px;
      border-top: 1px solid #e0e2e7;
   }
`

const PricesContainer = styled('div')(() => ({
   width: '60%',
   marginLeft: '98px',
   marginBottom: '100px',

   '& .prices': {
      display: 'flex',
      backgroundColor: '#dbf0e5',
      padding: '20px 10px',
      margin: '0 0 20px 0',
      fontSize: '18px',
      fontWeight: 500,
      justifyContent: 'space-between',
      borderRadius: '12px',
      borderLeft: '10px solid #048741',
   },
}))

const MainPart = styled('p')(() => ({
   marginLeft: '95px',
   fontFamily: ' Manrope',
   fontSize: '14px',
   fontWeight: 400,
   lineHeight: '19px',
   textAlign: 'left',
   paddingTop: '25px',
   a: {
      color: '#959595',
      textDecoration: 'none',
   },
   '& .service': {
      color: '#048741',
   },
}))

const ServiceStyle = styled('div')(() => ({
   fontSize: '36px',
   fontWeight: 600,
   lineHeight: '49px',
   fontFamily: 'Manrope',
   color: '#222222',
   marginLeft: '95px',
   marginBottom: '34px',
   marginTop: '26px',
   '& .our_service': {
      color: '#048741',
   },
}))
const P = styled('p')(() => ({
   width: '691px',
   height: '100px',
   fontSize: '18px',
   fontWeight: 400,
   lineHeight: '24px',
   color: ' #4D4E51',
   fontFamily: ' Manrope',
   marginLeft: '95px',
   marginBottom: '40px',
}))
