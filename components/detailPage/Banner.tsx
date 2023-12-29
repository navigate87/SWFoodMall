import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styled, { keyframes } from 'styled-components';

interface BannerProps {
  title: string;
  description: string;
  imageUrl: string;
}

const Banner: React.FC<BannerProps> = ({ title, description, imageUrl, }) => {

  const [currentImageUrl, setCurrentImageUrl] = useState(imageUrl);
  //const [isFading, setIsFading] = useState(false);
  const [fadeImage, setFadeImage] = useState('');

  useEffect(() => {
    if (imageUrl !== currentImageUrl) {
      setFadeImage(currentImageUrl); // 현재 이미지를 fadeImage로 설정
      setCurrentImageUrl(imageUrl);  // 새 이미지를 currentImageUrl로 설정
    }
  }, [imageUrl, currentImageUrl]);
  // useEffect(() => {
  //   if (imageUrl !== currentImageUrl) {
  //     setIsFading(true);
  //     setTimeout(() => {
  //       setCurrentImageUrl(imageUrl);
  //       setIsFading(false);
  //     }, 2000); // 이미지가 페이드 아웃되고 페이드 인되는 데 걸리는 시간
  //   }
  // }, [imageUrl]);

  return (
    <>
        <ImageWrapper>
            {/* <StyledImage src={currentImageUrl} alt="Banner Image" width={1920} height={936} fading={isFading}/> */}
            <StyledImage src={currentImageUrl} alt="Banner Image" width={1920} height={936} />

            {
              fadeImage && (
                <FadeImage src={fadeImage} alt="Fade Banner Image" width={1920} height={936} />
              )
            }
        </ImageWrapper>
        
        <TextOverlay>
            <BannerText>
                <LargeText>{title}</LargeText>
                <MediumText>{description}</MediumText>
            </BannerText>
        </TextOverlay>
    </>
  );
};

export default Banner;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 936px; 
`;

// const StyledImage = styled(Image)<{fading?:boolean}>`
//   transition: opacity 2s ease-in-out;
//   opacity: ${({ fading }) => fading ? 0.8 : 1};
//   position: absolute;
//   top: 0;
//   left: 0;
// `;
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const StyledImage = styled(Image)<{fading?:boolean}>`
  animation: ${fadeIn} 1s ease-in-out backwards;
  position: absolute;
  top: 0;
  left: 0;
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const FadeImage = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  animation: ${fadeOut} 1s ease-in-out forwards;
`;

const TextOverlay = styled.div`
    position: absolute;
    width: 700px;
`;

const BannerText = styled.div`
  margin-bottom: 400px;
  text-align: center;
  color: #fff;
`;

const LargeText = styled.div`
  font-size: 40px;
`;

const MediumText = styled.div`
  margin-top: 40px;
  color: #fff;
  font-size: 23.5px;
  line-height: 30px;
`;