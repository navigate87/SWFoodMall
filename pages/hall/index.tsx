import { useRouter } from "next/router";
// import Layout from "@/components/Layout";
import Layout from "@/components/Layout2"
import Image from "next/image";
import Banner from "@/components/detailPage/Banner";
import styled from "styled-components";
import KeyFeature from "@/components/detailPage/KeyFeature";
import { useEffect, useState } from "react";
import { HallInfoProps } from "@/data/hallInfo";
import HallInfoPopup from "@/modal/hallInfo";
import { useRecoilState } from "recoil";
import { recoilHallInfoState } from "@/store/stores/modalState";
import HallGuidePopup from "@/modal/HallGuide";
/* eslint-disable prettier/prettier */
export default function HallDetail() { 
    const router = useRouter();
    const [activeFeatureIndex, setActiveFeatureIndex] = useState<number>(0);
    const [hallInfoPopup, setHallInfoPopup] = useRecoilState<boolean>(recoilHallInfoState);
    const [isHallGuidePopupOpen, setIsHallGuidePopupOpen] = useState<boolean>(false);
    const [selectedItem, setSelectedItem] = useState<string>('');

    const totalFeatures = 3;
    const currentFeature = HallInfoProps[activeFeatureIndex];
    
    useEffect(() => {
        
        if(activeFeatureIndex < totalFeatures) {

            const timer = setInterval(() => {
                
                setActiveFeatureIndex((prevIndex) => (prevIndex + 1) % HallInfoProps.length);
                
            }, 20000);

            return () => clearTimeout(timer);
        }
    },[activeFeatureIndex]);

    const handleMenuItemClick = (item:string) => {
        setIsHallGuidePopupOpen(true); 
        setSelectedItem(item);
    };

    const handleFeatureClick = (index:number) => {
        setActiveFeatureIndex(index);
    }

    const closeHallGuidePopup = () => {
        setIsHallGuidePopupOpen(false);
    };

    return (
        <Layout>
            <MainContainer>  
                <RightFixed>
                    <MenuBox>
                        <MenuItem marginTop={20} onClick={() =>handleMenuItemClick('연회장 안내')}>
                            <Image src={"/icon/icon-sub-quick-info.svg"} alt="info" width={32} height={32} />
                            <MenuText>연회장 안내</MenuText>
                        </MenuItem>
                        <MenuSeparator />
                        <MenuItem onClick={() =>handleMenuItemClick('이벤트')}>
                            <Image src="/icon/icon-sub-quick-event_on.svg" alt="event" width={32} height={32} />
                            <MenuText>이벤트</MenuText>
                        </MenuItem>
                        <MenuSeparator />
                        <MenuItem onClick={() =>handleMenuItemClick('바로예약')}>
                            <Image src={"/icon/icon-sub-quick-reservation.svg"} alt="reservation" width={32} height={32} />
                            <MenuText>바로예약</MenuText>
                        </MenuItem>
                    </MenuBox>
                </RightFixed>  
                <Banner 
                    title={currentFeature.title}
                    description={currentFeature.description}
                    imageUrl={currentFeature.imageUrl}
                />
                <KeyFeatureContainer>
                    <KeyFeatureBox>
                        {
                            HallInfoProps.map((feature, index) => (
                                <KeyFeature 
                                    key={index} // 고유한 key 값 필요
                                    imageUrl={feature.imageUrlSmall}
                                    label={feature.title}
                                    detail={feature.floor}
                                    animate={activeFeatureIndex === index}
                                    onClick={() => handleFeatureClick(index)}    
                                />
                            ))
                        }
                    </KeyFeatureBox>
                </KeyFeatureContainer>
                { isHallGuidePopupOpen && <HallGuidePopup selected={selectedItem} closePopup={closeHallGuidePopup} /> }
            </MainContainer>
            
            {
                hallInfoPopup && 
                <HallInfoPopup />
            }
        </Layout>
    )
}

const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -60px;
    position: relative;
`;

const RightFixed = styled.div`
    position: fixed;
    right: 0;
    width: 80px;
    height: 258px;
    z-index: 1;
    background:rgba(0,0,0,0.5);
    border-bottom-left-radius: 15px;
    border-top-left-radius: 15px;
`;

const MenuBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const MenuItem = styled.div<{marginTop?:number}>`
    display: flex;
    align-items: center;
    flex-direction: column;
    cursor: pointer;
    margin-top:${({marginTop}) => marginTop}px;
`;

const MenuText = styled.div`
    color: #FFF;
    font-size: 12px;
    margin-top:7px;
`;

const MenuSeparator = styled.div`
    display: flex;
    opacity: 0.1;
    border-bottom: 2px solid #fff;
    width: 60px;
    margin: 15px;
`;



const KeyFeatureContainer = styled.div`
  position: absolute;
  width: 1500px;
`;

const KeyFeatureBox = styled.div`
  margin-top: 750px;
  text-align: center;
`;