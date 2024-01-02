
export interface HallInfoDataProps {
    title: string;
    description: string;
    imageUrl: string;
    location: string;
    peopleCount: string;
    floor:string;
    popupDescription:string;
}

export const HallInfoProps: HallInfoDataProps[] = [
    {
        title: "중규모 연회장",
        description: "스테이락 호텔 12층에 위치한 중규모 연회장으로 120명 규모의 파티, 세미나, 리셉션 등 목적에 따라 다양한 스타일의 행사가 가능합니다.",
        imageUrl:"/image/sub-fullbanner-img_hall.webp",
        location:"스테이락 호텔 12층",
        peopleCount:"120",
        floor:"12F",
        popupDescription:"120명 규모의 파티, 세미나, 리셉션 등 목적에 따라 다양한 스타일의 행사가 가능합니다. 또한 다양한 면적으로 공간 가변이 가능하고 원활한 행사 진행을 위한 대형스크린 및 각종 최신 장비가 구비되어 있습니다."
    },
    {
        title: "소규모 연회장",
        description: "스테이락 호텔 11층에 위치한 소규모 연회장으로 120명 규모의 파티, 세미나, 리셉션 등 목적에 따라 다양한 스타일의 행사가 가능합니다.",
        imageUrl:"/image/sub-fullbanner-img_small.webp",
        location:"스테이락 호텔 11층",
        peopleCount:"120",
        floor:"11F",
        popupDescription:"120명 규모의 파티, 세미나, 리셉션 등 목적에 따라 다양한 스타일의 행사가 가능합니다. 또한 다양한 면적으로 공간 가변이 가능하고 원활한 행사 진행을 위한 대형스크린 및 각종 최신 장비가 구비되어 있습니다."
    },
    {
        title: "소규모 연회장",
        description: "스테이락 호텔 3층에 위치한 소규모 연회장으로 120명 규모의 파티, 세미나, 리셉션 등 목적에 따라 다양한 스타일의 행사가 가능합니다.",
        imageUrl:"/image/sub-fullbanner-img_swjung.webp",
        location:"스테이락 호텔 3층",
        peopleCount:"120",
        floor:"3F",
        popupDescription:"120명 규모의 파티, 세미나, 리셉션 등 목적에 따라 다양한 스타일의 행사가 가능합니다. 또한 다양한 면적으로 공간 가변이 가능하고 원활한 행사 진행을 위한 대형스크린 및 각종 최신 장비가 구비되어 있습니다."
    }
]