import { Image, useMediaQuery } from '@chakra-ui/react'
import { Autoplay, Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'

const desktopSlides = ['first', 'second', 'third', 'fourth', 'fifth']
const smallScreenSlides = [
  'first_small',
  'second_small',
  'third_small',
  'fourth_small',
  'fifth_small',
]

const Slider = () => {
  const [isLessThan768] = useMediaQuery('(max-width: 768px)')
  return (
    <>
      {isLessThan768 ? (
        <Swiper
          slidesPerView="auto"
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          loop={true}
        >
          {smallScreenSlides.map((slide, index) => (
            <SwiperSlide key={index}>
              <Image
                src={`./assets/images/header-slider/${slide}.svg`}
                alt={`Slide ${slide}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <Swiper
          slidesPerView={1.5}
          spaceBetween="47px"
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          loop={true}
        >
          {desktopSlides.map((slide, index) => (
            <SwiperSlide key={index}>
              <Image
                src={`./assets/images/header-slider/${slide}.svg`}
                alt={`Slide ${slide}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  )
}

export default Slider
