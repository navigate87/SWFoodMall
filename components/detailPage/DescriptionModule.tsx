import React from "react";
import Image from "next/image";
import styled from "styled-components";
import { SWJInfoData } from "@/data/SwjInfoType";

interface DescriptionModuleProps {
    selectedItem: SWJInfoData;
}

const DescriptionModule: React.FC<DescriptionModuleProps> = ({ selectedItem }) => {
    return (
        <div>
            <Image 
                src={selectedItem.fullImgUrl}
                height={936}
                width={1920}
                alt="hall"
            />
            <DescriptionContainer>
                <DescriptionBox>
                    <FontDiv textShadow="0 0 6px rgba(0,0,0, 0.2)" fontFamily="SandollOngothic" letterSpacing={-0.96} lineHeight={50} color="#fff" fontSize={48}>
                        {selectedItem.title}
                    </FontDiv>
                    <div style={{ width:"566px", height:"96px", textAlign:"center" }}>
                        <FontDiv fontFamily="SourceHanSans" fontWeight="500" letterSpacing={-0.44} color="#fff" fontSize={22} lineHeight={28} marginTop={31} textShadow="0 0 6px rgba(0,0,0,0.2)">
                            {selectedItem.description}
                        </FontDiv>
                    </div>
                    
                </DescriptionBox>
            </DescriptionContainer>
        </div>
    );
};

export default DescriptionModule;

const DescriptionContainer = styled.div`
    position: absolute;
    width: 610px;
    top: 70%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const DescriptionBox = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const FontDiv = styled.div<{fontSize?:number, color?:string, lineHeight?:number, marginTop?:number, fontFamily?:string, letterSpacing?:number, fontWeight?:string, textShadow?:string}>`
    font-size: ${({ fontSize }) => fontSize}px;
    color: ${({ color }) => color};
    line-height: ${({ lineHeight }) => lineHeight}px;
    margin-top: ${({ marginTop })=> marginTop}px;
    font-weight: ${({ fontWeight }) => fontWeight};
    font-family: ${({ fontFamily }) => fontFamily};
    letter-spacing: ${({ letterSpacing }) => letterSpacing}px;
    text-shadow: ${({ textShadow }) => textShadow};
`;