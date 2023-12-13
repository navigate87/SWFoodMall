import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import styled from "styled-components";
import { useState } from "react";

export default function SlideShow() {

    const [slideIndex, setSlideIndex] = useState(0);
    const settings = {
        infinite: true,
        dots: true,
        speed: 500,
        // autoplay: true,
        // autoplaySpeed: 2000,
        slidesToShow: 5,
        className: "center",
        dotsClass: "dots_custom",
        centerMode: true,
        centerPadding: "50px",
        beforeChange: (current:number, next:number) => {
            return setSlideIndex(current)
        },
        draggable: false,
        arrows:false,
        slideToScroll: 5,
        respansive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 5
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5
                }
            },
            {
                breakpoint: 720,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    }

    return (
        <SlideContainer>
            <StyledSlider {...settings}>
                <div>
                    <h3>1</h3>
                </div>
                <div>
                    <h3>2</h3>
                </div>
                <div>
                    <h3>3</h3>
                </div>
                <div>
                    <h3>4</h3>
                </div>
                <div>
                    <h3>5</h3>
                </div>
                <div>
                    <h3>6</h3>
                </div>
                <div>
                    <h3>7</h3>
                </div>
                <div>
                    <h3>8</h3>
                </div>
                <div>
                    <h3>9</h3>
                </div>
                <div>
                    <h3>10</h3>
                </div>
            </StyledSlider>    
        </SlideContainer>
    )
}

const StyledSlider = styled(Slider)`
    width: 100%;
    position: absolute;
    margin: 0 auto;
`;

const SlideContainer = styled.div`
    .center .slick-center h3{
        color: #e67e22;
        opacity: 1;
        font-size: 80px;
        transform: scale(1.06);
        transition: all 300ms ease;
        line-height: 100px;
        margin: 10px;
        padding: 10%;
        text-align: center;
    }
    .center h3 {
        background: #00558b;
        color: #fff;
        font-size: 36px;
        line-height: 100px;
        margin: 10px;
        padding: 5%;
        position: relative;
        text-align: center;
        opacity: 0.8;
        transition: all 300ms ease;
        transform: scale(0.99);
    }

    .dots_custom {
        display: inline-block;
        vertical-align: middle;
        margin: auto 0;
        padding: 0;
    }

    .dots_custom li {
        list-style: none;
        cursor: pointer;
        display: inline-block;
        margin: 30px 0px;
        padding: 0;
    }

    .dots_custom li button {
        border: none;
        background: #d1d1d1;
        color: transparent;
        cursor: pointer;
        display: block;
        height: 3px;
        width: 110px;
        /* border-radius: 100%; */
        padding: 0;
    }

    .dots_custom li.slick-active button {
        background-color: red;
    }
`;