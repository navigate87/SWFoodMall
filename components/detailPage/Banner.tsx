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
  const [fadeImage, setFadeImage] = useState('');
  
  useEffect(() => {
    if (imageUrl !== currentImageUrl) {
      setFadeImage(currentImageUrl); 
      setCurrentImageUrl(imageUrl);  
    } 
  }, [imageUrl, currentImageUrl]);


  return (
    <>
        <ImageWrapper>
            <StyledImage src={currentImageUrl} alt="Banner Image" width={1920} height={936} />

            {
              fadeImage && (
                <FadeImage key={fadeImage} src={fadeImage} alt="Fade Banner Image" width={1920} height={936} />
              )
            }
        </ImageWrapper>
        
        <TextOverlay key={currentImageUrl}>
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

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const StyledImage = styled(Image)`
  animation: ${fadeIn} 2s linear forwards;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 1;
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
  opacity: 1;
  animation: ${fadeOut} 2s linear forwards;
`;

const TextOverlay = styled.div`
  position: absolute;
  width: 700px;
  animation: ${fadeIn} 3s ease-in-out;
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