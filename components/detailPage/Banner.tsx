import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

interface BannerProps {
  title: string;
  description: string;
  imageUrl: string;
}

const Banner: React.FC<BannerProps> = ({ title, description, imageUrl }) => {
  return (
    <>
        <Image src={imageUrl} alt="Banner Image" width={1920} height={936}/>
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