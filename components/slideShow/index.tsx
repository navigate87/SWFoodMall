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

    const [centerSlideIndex, setCenterSlideIndex] = useState(0);
    const settings = {
        dots: true,
        dotsClass: "dots_custom",
        infinite: true,
        centerMode: true,
        // swipe: true,
        // swipeToSlide:true,
        slidesToScroll: 1,
        accessibility: true,
        centerPadding: '90px', // Adjust the padding as needed
        slidesToShow: 7, // Adjust the number of slides to show
        speed: 500,
        focusOnSelect: true,
        arrows:false,
        autoplay: true,
        autoplaySpeed: 2000,
        
        // variableWidth:true,
        beforeChange:(current:number, next:number) => {
            return setCenterSlideIndex(next);
        }
    };
    
    return (
        // <SlideContainer>
            <StyledSlider {...settings}>
                {images.map((image, index) => (
                <div key={index}>
                    {centerSlideIndex === index ? (
                        // 가운데 슬라이드에만 Link 적용
                        <Link href={image.path}>
                            
                                <ImageWrapper isCenter={centerSlideIndex === index}>
                                    <Image 
                                        
                                        src={image.img_src} 
                                        alt={image.alt} 
                                        width={348} 
                                        height={348}
                                        layout="intrinsic"
                                    />
                                </ImageWrapper>
                            
                        </Link>
                    ) : (
                        // 다른 슬라이드에는 Link 없음
                        <ImageWrapper isCenter={centerSlideIndex === index}>
                            <Image 

                                src={image.img_src} 
                                alt={image.alt} 
                                width={200} 
                                height={200} 
                                layout="intrinsic"
                            />
                        </ImageWrapper>
                    )}
                </div>
            ))}
            </StyledSlider>    
        
    )
}

export default SlideShow;

const ImageWrapper = styled.div<{isCenter?:boolean}>`
  display: block;
  cursor: ${({ isCenter }) => (isCenter ? "pointer" : "")};
  opacity: ${({ isCenter }) => (isCenter ? 1 : 0.5)};
  img {
    display: inline-block; // 이미지가 block 요소로 표시되도록 설정
  }
`;


const StyledSlider = styled(Slider)`
    max-width: 1920px;
    
    .slick-slide {
        box-sizing: border-box;
        height: 300px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 20px;
    }
    
    .slick-center {
        margin-bottom: 35px;
        transform: scale(1.1);
    } 
    
    .slick-list {
        object-fit: contain;
        display: flex;
        align-items: center;
        
    }


    .slick-track {
        display: flex;
        justify-content: center;
        align-items: center;
        
    }

    .dots_custom {
        display: block;
        text-align: center;
        margin-top: -20px;
    }

    .dots_custom li {
        list-style: none;
        cursor: pointer;
        display: inline-block;
        
    }

    .dots_custom li button {
        border: none;
        position: relative ;
        background: #dcdcdc;
        color: transparent;
        cursor: pointer;
        display: block;
        height: 2px;
        width: 155px;
    }

    .dots_custom li.slick-active button {
        background-color: red;
    }
`;

