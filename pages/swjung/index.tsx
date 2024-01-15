import Layout from "@/components/Layout2";
import styled from "styled-components";
import { SWJInfoData, SWJInfoProps } from "@/data/SwjInfoType";
import SwjGuideItem from "@/components/detailPage/SwjGuideItem";
import { useEffect, useState } from "react";
import DescriptionModule from "@/components/detailPage/DescriptionModule";
import { recoilShowGroupModal } from "@/store/stores/modalState";
import { useRecoilState } from "recoil";
import Image from "next/image";
import SwjInfoPopup from "@/modal/swjInfo";
import { CSSTransition } from "react-transition-group";
import HallGuidePopup from "@/modal/HallGuide";
/* eslint-disable prettier/prettier */
export default function List() { 
    const [selectedItem, setSelectedItem] = useState<SWJInfoData>(SWJInfoProps[0]);
    const [selectedItemIndex, setSelectedItemIndex] = useState(0);
    const [showGroupModal, setShowGroupModal] = useRecoilState<boolean>(recoilShowGroupModal);
    const [selectedMenu, setSelectedMenu] = useState<string>('');
    const [swjGuidePopupOpen, setSwjGuidePopupOpen] = useState<boolean>(false);
    
    
    const handleSelect = (index:number) => {
        setSelectedItemIndex(index);
        
    };
    const handleMenuItemClick = (item:string) => {
        if(item === "바로예약") {
            setShowGroupModal(true);
            return;
        }
        setSwjGuidePopupOpen(true); 
        setSelectedMenu(item);
    };

    const closeSwjPopup = () => {
        setSwjGuidePopupOpen(false);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            const nextIndex = (selectedItemIndex + 1) % SWJInfoProps.length;
            setSelectedItemIndex(nextIndex);
        }, 5000);

        return () => clearInterval(interval); 
    },[selectedItemIndex]);

    useEffect(() => {
        setSelectedItem(SWJInfoProps[selectedItemIndex]);
    }, [selectedItemIndex]);
    
    return (
        <Layout>
            <MainContainer>
                <RightFixed>
                    <MenuBox>
                        <MenuItem marginTop={20} onClick={() =>handleMenuItemClick('매장 안내')}>
                            <Image src={"/icon/icon-sub-quick-info.svg"} alt="info" width={32} height={32} />
                            <MenuText>매장 안내</MenuText>
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
                <DescriptionModule 
                    selectedItem={selectedItem} 
                />
                <SelectGuideBox>
                    <IntervalBox>
                        {
                            SWJInfoProps.map((item, index) => (
                                <SwjGuideItem 
                                    key={index} 
                                    item={item} 
                                    onSelect={()=>handleSelect(index)}
                                    index={index}
                                    isActive={selectedItemIndex === index}
                                />
                            ))
                        }
                    </IntervalBox>
                </SelectGuideBox>
                <CSSTransition 
                    in={swjGuidePopupOpen} 
                    timeout={200} 
                    classNames="reverse-slide-fade" 
                    unmountOnExit
                >
                    <SwjInfoPopup selected={selectedMenu} closePopup={closeSwjPopup} />
                </CSSTransition> 
            </MainContainer>
            
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

const SelectGuideBox = styled.div`
    position: absolute;
    width:1500px;
`;

const IntervalBox = styled.div`
    margin-top: 750px;
    text-align: center;
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