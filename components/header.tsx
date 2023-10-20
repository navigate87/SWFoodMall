/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import styled from "styled-components";
import Image from "next/image";
import Togglebtn from "./toggleBtn/toggleBtn";

export default function Header() {
  return (
    <>
        <ImageContainer>
            <Image 
                src="/vercel.svg"
                alt="성원푸드 이미지"
                objectPosition="center"
                fill
            />
            <HeaderContainer>
                <LeftBox>
                    <div style={{flex: 1}}>
                        <Image 
                            src="/image/bi.png"
                            alt="성원푸드 아이콘"
                            width={50}
                            height={20}
                        />
                    </div>
                    <div style={{ flex: 1, flexDirection: "row" }}>
                        <Togglebtn />
                    </div>
                    <div>이거</div>
                    <div></div>
                    <div></div>
                    <div></div>
                </LeftBox>
                <RightBox>
                    
                </RightBox>
            </HeaderContainer>
        </ImageContainer>
    </>
    
  );
}

const ImageContainer = styled.div`
    position: relative !important;
    width: 100%;
    height: 800px;
`;

const HeaderContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    background-color: rgba(49,49,49,0.4);
`;

const LeftBox = styled.div`
    flex: 1;
    display: flex;
    justify-content: right;
    position: relative !important;
    z-index: 2;
`;

const RightBox = styled.div`
    flex: 1;
    z-index: 2;
    justify-content: right;
    position: relative !important;
`;















