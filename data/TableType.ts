export interface Table  {
    src_1: string;
    src_2: string;
    src_3: string;
    alt: string;
    seatNum: string;
    code: string;
}

export const TableTypeData: Table[] = [
    {
        src_1: '/icon/icon-main-quick-circle-white.svg',
        src_2: '/icon/icon-main-quick-circle.svg', // 클릭시
        src_3: '/icon/icon-main-quick-circle-black.svg',
        alt: 'Circle',
        seatNum: "120",
        code: "FTT01",
    },
    {
        src_1: '/icon/icon-main-quick-classroom-white.svg',
        src_2: '/icon/icon-main-quick-classroom.svg',
        src_3: '/icon/icon-main-quick-classroom-black.svg',
        alt: 'Classroom',
        seatNum: "120",
        code: "FTT02",
    },
    {
        src_1: '/icon/icon-main-quick-Ushape-white.svg',
        src_2: '/icon/icon-main-quick-Ushape.svg',
        src_3: '/icon/icon-main-quick-Ushape-black.svg',
        alt: 'U Shape',
        seatNum: "120",
        code: "FTT03",
    },
    {
        src_1: '/icon/icon-main-quick-theater-white.svg',
        src_2: '/icon/icon-main-quick-theater.svg',
        src_3: '/icon/icon-main-quick-theater-black.svg',
        alt: 'Theater',
        seatNum: "120",
        code: "FTT04",
    },
];