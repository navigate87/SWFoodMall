import { GuideData, GuideDataProps } from "@/data/GuideType";

import Image from "next/image";
import { useEffect, useState } from "react";
import styled, { keyframes, css } from "styled-components";

type StoreSelectPopupProps = {
    storeName: string[];
};


export default function StoreSelectPopup({storeName}:StoreSelectPopupProps) {
    const [isFoodMall, setIsFoodMall] = useState<boolean>();
    
    useEffect(() => {
        // StoreName이 FOODMALL 섹션에 해당하는지 확인
        const isFoodMallSection = storeName.some(name => 
            ['루프가든', '성원정', '스시노칸도', '카페아뜰리에'].includes(name)
        );
        setIsFoodMall(isFoodMallSection);
    }, [storeName]);

    const handleMainSelectClick = () => {
        setIsFoodMall(!isFoodMall)
    }
    const renderGuideData = (data: GuideData[]) => {
        return [...data].reverse().map((guide) => {
            let altText = guide.alt === '일식' ? '스시노칸도' : 
                         guide.alt === '한식∙정육' ? '성원정' : guide.alt;
            const isSelected = storeName.includes(altText);

            return (
                <StoreSubBox key={`${guide.floor}-${altText}`} isSelected={isSelected}>
                    <StoreFloorFont isSelected={isSelected}>{guide.floor}</StoreFloorFont>
                    <StoreSubSelectFont isSelected={isSelected}>{altText}</StoreSubSelectFont>
                </StoreSubBox>
            );
        });
    };
    // const renderGuideData = (data: GuideData[]) => {
    //     return [...data].reverse().map((guide) => {
    //         let altText = guide.alt;
    //         if (guide.floor === '2F' && guide.alt === '일식') {
    //             altText = '스시노칸도';
    //         } else if(guide.alt === '한식∙정육') {
    //             altText = '성원정';
    //         }

    //         const isSelected = storeName.includes(altText);

    //         return (
    //             <StoreSubBox key={`${guide.floor}-${altText}`} isSelected={isSelected}>
    //                 <StoreFloorFont>{guide.floor}</StoreFloorFont>
    //                 <StoreSubSelectFont>{altText}</StoreSubSelectFont>
    //             </StoreSubBox>
    //         );
    //     });
    // };

    const foodMallData = GuideDataProps.filter(
        guide => ['1F','3F~4F', '5F'].includes(guide.floor) || ((guide.floor === '2F' && guide.alt === '일식'))
    );

    const stayRakData = GuideDataProps.filter(
        guide => ['3F', '4F~10F', '11F~12F'].includes(guide.floor) || ((guide.floor === '2F' && guide.alt !== '일식'))
    );

    return (
        <ModalBackground>
            <Container>
                <StoreNameSelectBox>
                    <FlexBox flex={1}>
                        <StoreFoodMallBox isSelected={isFoodMall} onClick={handleMainSelectClick}>
                            <StoreSelectFont>FOODMALL</StoreSelectFont>
                        </StoreFoodMallBox>
                    </FlexBox>
                    <FlexBox flex={1}>
                        <StoreStayRakBox isSelected={isFoodMall} onClick={handleMainSelectClick}>
                            <StoreSelectFont>STAYRAK</StoreSelectFont>
                        </StoreStayRakBox>
                    </FlexBox>
                </StoreNameSelectBox>
                <StoreSubContainer>
                    {isFoodMall ? renderGuideData(foodMallData) : renderGuideData(stayRakData)}    
                </StoreSubContainer>

                <BuildingBox>
                    <Image src={"/image/category-tab-img-03.webp"} alt="swfood" width={277} height={220} />
                    <BuildingOverlay disabled={isFoodMall}>
                        <Image src={"/image/category-tab-img-02.webp"} alt="swfood" width={277} height={220} />
                    </BuildingOverlay >
                    <BuildingOverlay disabled={!isFoodMall}>
                        <Image src={"/image/category-tab-img-01.webp"} alt="swfood" width={277} height={220} />
                    </BuildingOverlay>
                </BuildingBox>
                
            </Container>
        </ModalBackground>
    )
}

const ModalBackground = styled.div`
    position: fixed;
    top: 0; left: 0; bottom: 0; right: 0;
    background: rgba(0, 0, 0, 0.7);
    z-index: 2;
    overflow: hidden;
`;

const Container = styled.div`
    position: absolute;
    top: calc(50vh - 390px);
    left: calc(50vw - 156px);
    background-color: white;
    border-radius: 25px;
    width: 312px;
    height: 546px;
    z-index: 100;
`;

const StoreNameSelectBox = styled.div`
    display:flex;
    justify-content:center; 
    align-items:center; 
    width:312px;
    height:68px;
    border-bottom:1px solid #dcdcdc
`;

const FlexBox = styled.div<{flex:number}>`
    flex: ${({flex}) => flex};
`;

const borderBottomChange = keyframes`
    from {
        width: 0%;
    }
    to {
        width: 100%;
    }
`;

const hoverAnimation = css`
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #f84040;
    animation: ${borderBottomChange} 0.2s linear forwards;
`;

const StoreFoodMallBox = styled.div<{isSelected?:boolean}>`
    display:flex; 
    justify-content:center;
    align-items:center;
    height:68px;
    border-bottom: ${({isSelected}) => (isSelected ? "2px solid #f84040" : "0" )};
    cursor: pointer;
    position: relative;
    overflow: hidden;

    &:hover::after {
        ${({ isSelected }) => isSelected ? '' : hoverAnimation};
    }
`;

const StoreStayRakBox = styled.div<{isSelected?:boolean}>`
    display:flex; 
    justify-content:center;
    align-items:center;
    height:68px;
    border-bottom: ${({isSelected}) => (!isSelected ? "2px solid #f84040" : "0" )};
    cursor: pointer;
    position: relative;
    overflow: hidden;
    &:hover::after {
        ${({ isSelected }) => !isSelected ? '' : hoverAnimation};
    }
`;

const StoreSelectFont = styled.div`
    color:#a2a2a2;
    font-size:20px;
`;

const StoreSubContainer = styled.div`
    display:flex;
    justify-content:center;
    margin:20px;
    flex-direction:column;
`;

const StoreSubBox = styled.div<{isSelected:boolean}>`
    display:flex;
    align-items:center;
    width:270px; 
    height:52px; 
    cursor: pointer;
    border-radius: ${({ isSelected }) => isSelected ? '25px' : '0'};
    background: ${({ isSelected }) => isSelected ? '#f6f5f5' : 'transparent'};
    &:hover {
        border-radius:25px;
        border:1px solid #f6f5f5;
        background: #f6f5f5;
    }
`;

const StoreFloorFont = styled.div<{isSelected?:boolean}>`
    margin:30px;
    font-size:18px;
    width:30px;
    font-weight: ${({isSelected}) => isSelected ? "bold" : "none"};
`;

const StoreSubSelectFont = styled.div<{isSelected?:boolean}>`
    margin:34px;
    font-size:18px;
    font-weight: ${({isSelected}) => isSelected ? "bold" : "none"};
`;

const BuildingBox = styled.div`
    display:flex;
    justify-content:center;
    margin-top:30px;
`;

const BuildingOverlay = styled.div<{disabled?:boolean}>`
    position:absolute; 
    display: ${({disabled}) => (disabled ? "block" : "none") };
`;






