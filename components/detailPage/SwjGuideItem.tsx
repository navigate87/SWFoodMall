import React from 'react';
import { SWJInfoData } from "@/data/SwjInfoType";
import styled, { keyframes, css } from 'styled-components';
import Image from 'next/image';

interface GuideItemProps {
    item: SWJInfoData;
    onSelect: (index:number) => void;
    index: number;
    isActive: boolean;
}

const SwjGuideItem: React.FC<GuideItemProps> = ({ item, onSelect, index, isActive }) => {
    const handleClick = () => {
        onSelect(index);
    }

    return (
        <MarginSpan margin={30} onClick={handleClick} animate={isActive}>
            <MarginSpan2>
                <GuideImage 
                    opacity={isActive ? 0.7 : 0.4} 
                    // background={isActive ? "rgba(0, 0, 0, 0.2)" :"rgba(0, 0, 0, 0.6)"} 
                    borderRadius={10} 
                    src={item.guideImgUrl} 
                    width={204} 
                    height={isActive ? 66 : 56} 
                    animate={isActive}
                    alt="middle" 
                />
                <GuideFontBox_2>
                    <FlexDiv>
                        <FontDiv fontSize={20} color="#fff" marginTop={isActive ? -10 : 0} >
                            {item.guidePhrases}
                        </FontDiv>
                    </FlexDiv>
                </GuideFontBox_2>
            </MarginSpan2>
        </MarginSpan>
    )
}
    
export default SwjGuideItem

const borderBottomChange = keyframes`
    from {
        width: 0%;
    }
    to {
        width: 90%;
    }
`;

const MarginSpan = styled.span<{margin?:number, width?:number, animate?:boolean}>`
    margin: ${({ margin }) => margin}px;
    width: ${({ width }) => width}px;
    position: relative;
    
    ${({ animate }) => animate && css`
        &:after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 0%;
            height: 2px;
            background-color: red;
            border-radius: 15px;
            margin-bottom: 2px;
            margin-left: 9px;
            animation: ${borderBottomChange} 5s linear forwards;
        } 
    `}
`;

const MarginSpan2 = styled.span<{margin?:number, width?:number}>`
    margin: ${({ margin }) => margin}px;
    width: ${({ width }) => width}px;
`;

const GuideImage = styled(Image)<{opacity?:number, background?:string, borderRadius?:number, animate?:boolean}>`
    opacity: ${({ opacity }) => opacity};
    background:${({ background }) => background };
    border-radius: ${({ borderRadius }) => borderRadius}px;
    border: ${({animate}) => (animate ? "2px solid #fff" : "none")};
    cursor:pointer;
`;

const GuideFontBox = styled.div<{left:number}>`
    position:absolute;
    bottom:-42px; 
    left: ${({ left }) => left}px;
    width:360px;
    height:80px;
    cursor:pointer;
`;

const GuideFontBox_2 = styled.div<{animate?:boolean}>`
    position: absolute;
    top: 50%; // 상단에서 50% 위치에 배치
    left: 50%; // 왼쪽에서 50% 위치에 배치
    transform : translate(-50%, -77%);
    width: 360px;
    height: 80px;
    cursor: pointer;
    display: flex;
    justify-content: center;
`;

const FlexDiv = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
`;

const FontDiv = styled.div<{fontSize?:number, color?:string, lineHeight?:number, marginTop?:number}>`
    font-size: ${({ fontSize }) => fontSize}px;
    color: ${({ color }) => color};
    line-height: ${({ lineHeight }) => lineHeight}px;
    margin-top: ${({ marginTop })=> marginTop}px;
`;