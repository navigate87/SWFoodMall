export interface MenuGuideData {
    type:string;
    price:number;
}

export interface SelectMenu {
    mainIcon:string;
    icon:string;
    label:string;
}

export const SelectMenu:SelectMenu[] = [
    {
        mainIcon:"/icon/icon-sub-quick-info.svg",
        icon: "/icon/icon-sub-quick-info_on_black.svg",
        label: "연회장 안내"
    },
    {
        mainIcon:"/icon/icon-sub-quick-event_on.svg",
        icon: "/icon/icon-sub-quick-event_on_black.svg",
        label: "이벤트"
    },
    {
        mainIcon:"/icon/icon-sub-quick-reservation.svg",
        icon: "/icon/icon-sub-quick-reservation_on_black.svg",
        label: "바로예약"
    }
]

export const SwjSelectMenu:SelectMenu[] = [
    {
        mainIcon:"/icon/icon-sub-quick-info.svg",
        icon: "/icon/icon-sub-quick-info_on_black.svg",
        label: "매장 안내"
    },
    {
        mainIcon:"/icon/icon-sub-quick-event_on.svg",
        icon: "/icon/icon-sub-quick-event_on_black.svg",
        label: "이벤트"
    },
    {
        mainIcon:"/icon/icon-sub-quick-reservation.svg",
        icon: "/icon/icon-sub-quick-reservation_on_black.svg",
        label: "바로예약"
    }
]

export const MenuTypeProps: MenuGuideData[] = [
    {
        type:"A",
        price:40000
    },
    {
        type:"B",
        price:50000
    },
    {
        type:"C",
        price:60000
    },
]
