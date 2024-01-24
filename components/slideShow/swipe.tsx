import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
// 여기에 커스텀 스타일시트를 추가하세요


// Swiper 모듈을 사용하도록 설정합니다.
SwiperCore.use([Navigation, Scrollbar, Autoplay]);

// 이미지 데이터 타입 정의
interface ImageData {
    img_src: string;
    alt: string;
    path?: string;
}

// 슬라이더 프롭스 타입 정의
interface SliderProps {
    images: ImageData[];
}

const SlideShow2: React.FC<SliderProps> = ({ images }) => {
    return (
        <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30} // 슬라이드 사이 간격
            slidesPerView={7} // 한 번에 보여줄 슬라이드 수
            centeredSlides={true} // 중앙 슬라이드가 중심에 오도록 설정
            loop={true} // 무한 반복
            autoplay={{
                delay: 2000, // 자동 재생 속도
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true, // 클릭 가능한 페이지네이션
                el: '.dots_custom', // 페이지네이션 클래스명
            }}
        >
            {images.map((image, index) => (
                <SwiperSlide key={index}>
                    <img src={image.img_src} alt={image.alt} style={{ width: '100%', height: 'auto' }} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default SlideShow2;
