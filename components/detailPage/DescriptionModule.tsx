import React from "react";
import Image from "next/image";
import styled from "styled-components";
import { SWJInfoData } from "@/data/SwjInfoType";

interface DescriptionModuleProps {
    selectedItem: SWJInfoData;
}

const DescriptionModule: React.FC<DescriptionModuleProps> = ({ selectedItem }) => {
    return (
        <>
            <Image 
                src={selectedItem.fullImgUrl}
                height={936}
                width={1920}
                alt="hall"
            />
            <DescriptionContainer>
                <DescriptionBox>
                    <FontDiv color="#fff" fontSize={40}>
                        {selectedItem.title}
                    </FontDiv>
                    <FontDiv color="#fff" fontSize={23.5} lineHeight={30} marginTop={40}>
                        {selectedItem.description}
                    </FontDiv>
                </DescriptionBox>
            </DescriptionContainer>
        </>
    );
};

export default DescriptionModule;

const DescriptionContainer = styled.div`
    position: absolute;
    width: 610px;
`;

const DescriptionBox = styled.div`
    margin-top:220px;
    text-align: center;
`;

const FontDiv = styled.div<{fontSize?:number, color?:string, lineHeight?:number, marginTop?:number}>`
    font-size: ${({ fontSize }) => fontSize}px;
    color: ${({ color }) => color};
    line-height: ${({ lineHeight }) => lineHeight}px;
    margin-top: ${({ marginTop })=> marginTop}px;
`;