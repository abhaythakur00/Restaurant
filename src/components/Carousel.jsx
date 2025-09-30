
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={2}
      autoplay={{
          delay: 3000, // 3 seconds delay
          disableOnInteraction: false, // keeps autoplay after user swipes
        }}
        loop={true}
      navigation
      pagination={{ clickable: true }}
    //   scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >

      <SwiperSlide><img src="c-1.png" alt="" /></SwiperSlide>
      <SwiperSlide><img src="c-2.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="c-3.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="c-4.jpg" alt="" /></SwiperSlide>
      
    </Swiper>
  );
};

