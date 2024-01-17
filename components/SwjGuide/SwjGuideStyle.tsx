import { formatNumberWithCommas } from "@/common/func/function"
import { FlexDiv, HallPriceBox } from "@/common/style/FlexBox"
import Image from "next/image"
import { useState } from "react"
import styled from "styled-components"

type MenuItemType = '메뉴 전체' | '한식' | '정육';

const infoGuideItems = [
    { icon: '/icon/icon-sub-quick-day.svg', label: '휴무일', value: '정기휴점 (매주 일요일)'},
    { icon: '/icon/icon-sub-quick-call.svg', label: '연락처', value: '02-1811-1811'},
    { icon: '/icon/icon-sub-quick-map_small.svg', label: '위치', value: '성원푸드몰 3층, 4층'},
    { icon: '/icon/icon-sub-quick-day.svg', label: '수용인원', value: '최대 120명'}
]

export default function SwjGuideNotice() {
    const [selectedMenu, setSelectedMenu] = useState<MenuItemType>('메뉴 전체'); 
    
    const menuItems: MenuItemType[] = ['메뉴 전체', '한식', '정육'];

    const handleMenuClick = (menu:MenuItemType) => {
        setSelectedMenu(menu);
    }

    return (
        <>
            <SalesGuideBox>
                <FlexDiv width={408} justifyContent="flex-start">
                    <FontDiv color="#cc4c42" fontSize={14}>영업시간 안내</FontDiv>
                </FlexDiv> 
                <FlexDiv justifyContent="flex-start" width={408} marginTop={8}>
                    <FontDiv color="#242424" fontSize={30}>11:00 - 21:00</FontDiv>
                </FlexDiv> 

                {
                    infoGuideItems.map((item, index) => (
                        <FlexDiv key={index} justifyContent="flex-start" width={408} marginTop={15} alignItems="center">
                            <div style={{ marginRight: "6px" }}>
                                <Image src={item.icon} alt={item.label} width={18} height={18} />
                            </div>
                            <div style={{ width: "74px" }}>
                                <FontDiv fontSize={16} marginRight={18} color="#474747">{item.label}</FontDiv>
                            </div>
                            <FontDiv fontSize={16} width={160} fontWeight="bold" color="#474747">{item.value}</FontDiv>
                        </FlexDiv>
                    ))
                }
            </SalesGuideBox> 

            <SelectMenuBox>
                <FlexDiv width={408} justifyContent="flex-start">
                {
                    menuItems.map((menuItem) => (
                        <MenuBoxMargin>
                            <MenuItem
                                key={menuItem}
                                selected={selectedMenu === menuItem}
                                onClick={() => handleMenuClick(menuItem)}
                            >
                                <FontDiv fontSize={14} fontWeight="500" color={selectedMenu === menuItem ? '#f84040' : '#22201f'}>
                                    {menuItem}
                                </FontDiv>
                            </MenuItem>
                        </MenuBoxMargin>
                    ))
                }
                </FlexDiv>
            </SelectMenuBox>
            <ScrollBox>
                <FlexDiv alignItems="center" justifyContent="center">
                    <FlexDiv width={408} justifyContent="space-between" flexWrap="wrap">
                        <SelectedMenuBox>
                            <SelectedMenuItem>
                                <Image src={"/image/menu-img_1.webp"} alt="menu_1" width={190} height={190} />
                                <div style={{ position:"absolute" }}>
                                    <Image src={"/icon/icon-badge-new.svg"} width={44} height={44} alt="new" />
                                </div>
                            </SelectedMenuItem>
                            <FontDiv fontSize={16} fontWeight="bold" color="22201f" marginTop={10}>한우-갈비살 1+</FontDiv>
                            <FontDiv fontSize={16} color="#22201f" fontWeight="200" marginTop={4}>{ formatNumberWithCommas(30000) }원</FontDiv>
                        </SelectedMenuBox>
                        <SelectedMenuBox>
                            <SelectedMenuItem>
                                <Image src={"/image/menu-img_2.webp"} alt="menu_1" width={190} height={190} />
                                <div style={{ position:"absolute" }}>
                                    <Image src={"/icon/icon-badge-hot.svg"} width={44} height={44} alt="new" />
                                </div>
                            </SelectedMenuItem>
                            <FontDiv fontSize={16} fontWeight="bold" color="22201f" marginTop={10}>한우-갈비살 1+</FontDiv>
                            <FontDiv fontSize={16} color="#22201f" fontWeight="200" marginTop={4}>{ formatNumberWithCommas(20000) }원</FontDiv>
                        </SelectedMenuBox>
                        <SelectedMenuBox>
                            <SelectedMenuItem>
                                <Image src={"/image/menu-img_1.webp"} alt="menu_1" width={190} height={190} />
                                <div style={{ position:"absolute" }}>
                                    <Image src={"/icon/icon-badge-new.svg"} width={44} height={44} alt="new" />
                                </div>
                            </SelectedMenuItem>
                            <FontDiv fontSize={16} fontWeight="bold" color="22201f" marginTop={10}>한우-갈비살 1+</FontDiv>
                            <FontDiv fontSize={16} color="#22201f" fontWeight="200" marginTop={4}>{ formatNumberWithCommas(50000) }원</FontDiv>
                        </SelectedMenuBox>
                        <SelectedMenuBox>
                            <SelectedMenuItem>
                                <Image src={"/image/menu-img_2.webp"} alt="menu_1" width={190} height={190} />
                                <div style={{ position:"absolute" }}>
                                    <Image src={"/icon/icon-badge-hot.svg"} width={44} height={44} alt="new" />
                                </div>
                            </SelectedMenuItem>
                            <FontDiv fontSize={16} fontWeight="bold" color="22201f" marginTop={10}>한우-갈비살 1+</FontDiv>
                            <FontDiv fontSize={16} color="#22201f" fontWeight="200" marginTop={4}>{ formatNumberWithCommas(50000) }원</FontDiv>
                        </SelectedMenuBox>
                        <SelectedMenuBox>
                            <SelectedMenuItem>
                                <Image src={"/image/menu-img_1.webp"} alt="menu_1" width={190} height={190} />
                                <div style={{ position:"absolute" }}>
                                    <Image src={"/icon/icon-badge-new.svg"} width={44} height={44} alt="new" />
                                </div>
                            </SelectedMenuItem>
                            <FontDiv fontSize={16} fontWeight="bold" color="22201f" marginTop={10}>한우-갈비살 1+</FontDiv>
                            <FontDiv fontSize={16} color="#22201f" fontWeight="200" marginTop={4}>{ formatNumberWithCommas(580000) }원</FontDiv>
                        </SelectedMenuBox>
                        <SelectedMenuBox>
                            <SelectedMenuItem>
                                <Image src={"/image/menu-img_2.webp"} alt="menu_1" width={190} height={190} />
                                <div style={{ position:"absolute" }}>
                                    <Image src={"/icon/icon-badge-hot.svg"} width={44} height={44} alt="new" />
                                </div>
                            </SelectedMenuItem>
                            <FontDiv fontSize={16} fontWeight="bold" color="22201f" marginTop={10}>한우-갈비살 1+</FontDiv>
                            <FontDiv fontSize={16} color="#22201f" fontWeight="200" marginTop={4}>{ formatNumberWithCommas(120000) }원</FontDiv>
                        </SelectedMenuBox>
                        
                    </FlexDiv>
                </FlexDiv>
            </ScrollBox>
            
        </>
        
    )
}

const SalesGuideBox = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column; 
    height:262px; 
    border-bottom:1px solid #e5e5e5;
`;

const SelectMenuBox = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    margin-top:30px;
`;

const MenuBoxMargin = styled.div`
    margin-right: 12px;
`;

const MenuItem = styled.div<{selected?:boolean}>`
    display:flex;
    width:96px;
    height:34px;
    justify-content:center;
    align-items:center;
    border:1px solid ${props => props.selected ? '#f84040' : '#c8c8c8'};
    background-color: ${props => props.selected ? '#ffebeb' : 'transparent'};
    border-radius:17px;
    cursor: pointer;
`;

const FontDiv = styled.div<{fontSize?:number, width?:number, marginRight?:number, color?:string, fontWeight?:string, marginTop?:number}>`
    font-size: ${({ fontSize })=> fontSize}px;
    width: ${({ width }) => width}px;
    margin-right: ${({ marginRight }) => marginRight}px;
    color: ${({ color }) => color};
    font-weight: ${({ fontWeight }) => fontWeight};
    margin-top: ${({ marginTop }) => marginTop}px;
`;

const ScrollBox = styled.div`
    overflow-y: auto; 
    max-height: 530px;
    margin-top: 20px;
`;

const SelectedMenuBox = styled.div`
    width:190px; 
    height:252px;
    margin-bottom:24px;
`;

const SelectedMenuItem = styled.div`
    position:relative;
    display:flex;
    width:190px;
    height:190px;
    object-fit:contain;
    background:#f7f7f7;
    border-radius:10px;
`;



