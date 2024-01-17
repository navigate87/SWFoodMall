import SwjGuideNotice from "@/components/SwjGuide/SwjGuideStyle";
import EventNotice from "@/components/hallGuide/EventStyle";
import { SelectMenu, SwjSelectMenu } from "@/data/MenuType";
import { recoilShowGroupModal } from "@/store/stores/modalState";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import styled, { css, keyframes } from "styled-components"

export default function SwjInfoPopup({selected, closePopup} : {selected: string, closePopup: () => void}) {
    const [selectedMenu, setSelectedMenu] = useState<string>(selected); 
    const [showGroupModal, setShowGroupModal] = useRecoilState<boolean>(recoilShowGroupModal);

    const handleMenuClick = ( menu:string ) => {
        setSelectedMenu(menu);

        if(menu === '바로예약') {
            setShowGroupModal(true);
            closePopup();
        }
    }

    return (
        <Container width={selectedMenu === '매장 안내' ? 468 : 420} isVisible={true}>
            <MenuBox>
            {
                SwjSelectMenu.map((menu, index) => (
                    <MenuItem 
                        key={index} 
                        onClick={() => handleMenuClick(menu.label)} 
                        isSelected={selectedMenu === menu.label}
                    >
                        <Image src={menu.icon} alt="info" width={32} height={32} />
                        <MenuItemFont>{menu.label}</MenuItemFont>
                    </MenuItem>
                ))
            }
                <CloseBox isSelected={selectedMenu === '매장 안내'}>
                    <CloseBtn onClick={closePopup}>
                        <Image src={"/icon/icon-popup-close.svg"} alt="close" width={18} height={18} /> 
                    </CloseBtn>
                </CloseBox>
            </MenuBox>

            {
                selectedMenu === '매장 안내' 
                    ? 
                        <SwjGuideNotice />
                    :
                        <EventNotice />
            }
        </Container>
    )
}

const fadeInAnimation = keyframes`
    from {
        opacity: 0;
    } to {
        opacity: 1;
    }
`;

const fadeOutAnimation = keyframes`
    from {
        opacity: 1;
    } to {
        opacity: 0;
    }
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

const Container = styled.div<{width?:number, isVisible?:boolean}>`
    position: fixed;
    right: 0;
    width: ${({ width }) => width}px;
    height: 936px;
    z-index: 200;
    background:#fff;
    border-bottom-left-radius: 15px;
    border-top-left-radius: 15px;
    animation: ${({ isVisible }) => isVisible ? fadeInAnimation : fadeOutAnimation} 0.5s ease-in-out;
`;

const MenuBox = styled.div`
    height:80px;
    width:470px;
    display:flex;
    align-items:center;
    margin-top:10px;
    border-bottom:1px solid #dfdfdf;
`;

const MenuItem = styled.div<{isSelected?:boolean}>`
    height: 80px;
    width: 110px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    border-bottom: ${({isSelected}) => (isSelected ? "2px solid #f84040" : "0" )};

    &:hover::after {
        ${({ isSelected }) => isSelected ? '' : hoverAnimation};
    }
`;

const MenuItemFont = styled.div`
    font-size: 14px;
    margin-top: 7px;
`;

const CloseBox = styled.div<{isSelected?:boolean}>`
    height: 80px;
    width:110px;
    display:flex;
    align-items:center;
    justify-content:${({ isSelected }) => (isSelected ? "flex-end" : "center") }
`;

const CloseBtn = styled.div`
    display:flex;
    align-items:center; 
    justify-content:center;
    width:48px;
    height:48px;
    border-radius:50%; 
    
    cursor:pointer;

    &:hover {
        background:#ededed; 
    }
`;

