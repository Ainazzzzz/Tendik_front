import { Rating, styled } from '@mui/material'
import Slider from 'react-slick'
import { useTranslation } from 'react-i18next'
import ImgSlider from '../../../assets/images/imgSlider.png'
import { Pagination, NextImg, PreviousImg } from '../../../assets'

const infoSlide = [
   {
      id: 1,
      name: 'Ben Widerski',
      img: ImgSlider,
      rating: 5,
      review: 'Great people, good place',
   },
   {
      id: 2,
      name: 'Gulnura Meimanbekova',
      img: null,
      rating: 5,
      review:
         'Very nice staff! Exellent doctors who know their stuff. I contact and get treatment from them more than once',
   },
   {
      id: 3,
      name: 'Ben Widerski',
      img: ImgSlider,
      rating: 5,
      review: 'Great people, good place',
   },
   {
      id: 4,
      name: 'Gulnura Meimanbekova',
      img: ImgSlider,
      rating: 5,
      review:
         'Very nice staff! Exellent doctors who know their stuff. I contact and get treatment from them more than once',
   },
   {
      id: 5,
      name: 'Ben Widerski',
      img: null,
      rating: 5,
      review: 'Great people, good place',
   },
   {
      id: 6,
      name: 'Gulnura Meimanbekova',
      img: ImgSlider,
      rating: 5,
      review:
         'Very nice staff! Exellent doctors who know their stuff. I contact and get treatment from them more than once',
   },
]

const customDots = (dots) => <div>{dots}</div>
const customPaging = () => <Pagination />

export const FeedbackSlider = () => {
   const { i18n } = useTranslation()
   const settings = {
      autoplay: true,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      appendDots: (dots) => customDots(dots),
      customPaging: () => customPaging(),
      nextArrow: <NextImg />,
      prevArrow: <PreviousImg />,
   }
   return (
      <>
         <StyledInfo>
            {i18n.t('main.feedbackOur')}
            <span> {i18n.t('main.ourPatients')}</span>
         </StyledInfo>
         <MainContainer>
            <StyledSlider {...settings}>
               {infoSlide.map((item) => {
                  return (
                     <Container key={item.id}>
                        <Div>
                           {item.img ? (
                              <img src={item.img} alt="" />
                           ) : (
                              <div className="no-avatar">{item.name[0]}</div>
                           )}
                           <Wrapper>
                              <Username>{item.name}</Username>
                              <Rating value={item.rating} readOnly />
                           </Wrapper>
                        </Div>
                        <TitleStyled>{item.review}</TitleStyled>
                     </Container>
                  )
               })}
            </StyledSlider>
         </MainContainer>
      </>
   )
}

const MainContainer = styled('div')({
   display: 'flex',
   justifyContent: 'center',
   overflow: 'hidden',
   fontFamily: 'Manrope',

   '.no-avatar': {
      width: '50px',
      height: '50px',
      backgroundColor: '#e4e7ee',
      borderRadius: '50%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '30px',
      fontWeight: 500,
   },
})

const StyledInfo = styled('h2')({
   fontFamily: 'Manrope',
   fontWeight: 600,
   fontSize: '36px',
   lineHeight: '49px',
   color: '#222222',
   zIndex: 6,
   paddingLeft: '7rem',
   textAlign: 'start',
   span: {
      color: '#048741',
   },
})

const Container = styled('div')({
   boxSizing: 'border-box',
   textAlign: 'left',
   padding: '40px',
   width: '782px',
})

const Wrapper = styled('div')({
   display: 'flex',
   flexDirection: 'column',
   padding: 0,
})

const Username = styled('h3')({
   margin: 0,
})

const Div = styled('div')({
   display: 'flex',
   gap: '14px',
   paddingBottom: '20px',
})

const TitleStyled = styled('p')({
   weight: 300,
   size: '16px',
   lineHeight: '21.86px',
})

const StyledSlider = styled(Slider)({
   position: 'relative',

   '& .slick-track': {
      display: 'flex',
      gap: '36px',
      marginTop: '60px',
   },
   '& .slick-list': {
      width: '782px',
   },
   '& .slick-slide': {
      backgroundColor: '#F3F1F1',
      borderRadius: '20px',
   },

   '& .slick-dots': {
      listStyle: 'none',
      display: 'flex',
      justifyContent: 'center',
      gap: '14px',
      paddingTop: '54px',
      paddingBottom: '12px',
      '& .slick-active': {
         background: 'none',
         ellipse: {
            fill: '#048741',
         },
      },
   },
   '& .slick-active': {
      backgroundColor: '#DBF0E5',

      ellipse: {
         fill: '#048741',
      },
   },
   '& .slick-arrow': {
      cursor: 'pointer',
   },
   '& .slick-next': {
      position: 'absolute',
      top: '388px',
      zIndex: '8',
      left: '470px',
   },
   '& .slick-prev': {
      position: 'absolute',
      top: '388px',
      zIndex: '8',
      left: '273px',
   },
   '& .slick-next:hover, .slick-prev:hover': {
      circle: {
         fill: 'url(#paint0_linear_92_5157)',
      },
      path: {
         fill: '#fff',
      },
   },
})
