import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import styled from "styled-components";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
// 이미지 데이터 타입
interface ImageData {
    img_src: string;
    alt: string;
    path: string;
  }
  
  // 슬라이더 프롭스 타입
  interface SliderProps {
    images: ImageData[];
  }
const  SlideShow: React.FC<SliderProps> = ({ images }) => {

    const [slideIndex, setSlideIndex] = useState(0);
    const settings = {
        infinite: true,
        dots: true,
        speed: 500,
        // autoplay: true,
        // autoplaySpeed: 2000,
        slidesToShow: 7,
        className: "center",
        dotsClass: "dots_custom",
        centerMode: true,
        centerPadding: "110px",
        beforeChange: (current:number, next:number) => {
            return setSlideIndex(current)
        },
        draggable: false,
        arrows:false,
        slideToScroll: 1,
    }

    return (
        <SlideContainer>
            <StyledSlider {...settings}>
                {
                    images.map((image, index) => (
                        <div style={{ display: "flex", justifyContent:"center", alignItems: "center"}}>
                            <Link href={image.path}>
                                <Image style={{ cursor:"pointer" }} src={image.img_src} alt={image.alt} width={180} height={180} />
                            </Link>
                        </div>
                    ))
                }
            </StyledSlider>    
        </SlideContainer>
    )
}

export default SlideShow;

const StyledSlider = styled(Slider)`
    width: 100%;
    position: relative;
    margin: 0 auto;
    box-sizing: border-box;
`;

const SlideContainer = styled.div`
    .slick-slider {
        width: 100%;
    }

    .center .slick-center {
        color: #e67e22;
        opacity: 1;
        transform: scale(1.2);
        text-align: center;
        transition: all 300ms ease;
        padding: 20px;
        margin-left: 20px;
        margin-right: 48px;
        //margin-bottom: 30px;
    }

    .slick-list {
        object-fit: cover;
        display: flex;
        align-items: center;
    }

    .slick-track {
        display: flex;
        align-items: center;
        left: 0;
        right: 0;
        bottom: 20;
    }
    
    .dots_custom {
        display: block;
        margin: auto auto;
        padding: 30px;
    }

    .dots_custom li {
        list-style: none;
        cursor: pointer;
        display: inline-block;
        margin: 10px 0px;
    }

    .dots_custom li button {
        border: none;
        position: relative ;
        background: #d1d1d1;
        color: transparent;
        cursor: pointer;
        display: block;
        height: 3px;
        width: 140px;
    }

    .dots_custom li.slick-active button {
        background-color: red;
    }
`;