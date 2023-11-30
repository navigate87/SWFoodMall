export interface Table  {
    src_1: string;
    src_2: string;
    alt: string;
    code: number;
}

export const TableTypeData: Table[] = [
    {
        src_1: '/icon/icon-main-quick-circle-white.svg',
        src_2: '/icon/icon-main-quick-circle.svg', // 클릭시
        alt: 'Circle',
        code: 0,
    },
    {
        src_1: '/icon/icon-main-quick-classroom-white.svg',
        src_2: '/icon/icon-main-quick-classroom.svg',
        alt: 'Classroom',
        code: 1,
    },
    {
        src_1: '/icon/icon-main-quick-Ushape-white.svg',
        src_2: '/icon/icon-main-quick-Ushape.svg',
        alt: 'U Shape',
        code: 2,
    },
    {
        src_1: '/icon/icon-main-quick-theater-white.svg',
        src_2: '/icon/icon-main-quick-theater.svg',
        alt: 'Theater',
        code: 3,
    },
];