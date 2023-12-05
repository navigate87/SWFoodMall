export interface GuideData {
    overlay_src: string;
    alt: string;
    floor: string;
    box_bottom: number;
    box_left: number;
    bottom: number;
    left: number;
    height: number;
    width: number;
    z_value:number;
}

export const GuideDataProps: GuideData[] = [
    {
        overlay_src: '/image/overlay-foodmall-1.svg',
        alt: '카페',
        floor: '1F',
        box_bottom: 260,
        box_left: 520,
        bottom: 103,
        left: 579,
        height: 250,
        width: 369,
        z_value: 200
    },
    {
        overlay_src: '/image/overlay-foodmall-2.svg',
        alt: '일식',
        floor: '2F',
        box_bottom: 360,
        box_left: 520,
        bottom: 225,
        left: 579,
        height: 218,
        width: 350,
        z_value: 200
    },
    {
        overlay_src: '/image/overlay-foodmall-3-4.svg',
        alt: '한식∙정육',
        floor: '3F~4F',
        box_bottom: 460,
        box_left: 520,
        bottom: 316,
        left: 579,
        height: 305,
        width: 374,
        z_value: 200
    },
    {
        overlay_src: '/image/overlay-foodmall-5.svg',
        alt: '루프가든',
        floor: '5F',
        box_bottom: 620,
        box_left: 520,
        bottom: 493,
        left: 579,
        height: 243,
        width: 373,
        z_value: 200
    },
    {
        overlay_src: '/image/overlay-hotel-2.svg',
        alt: '레스토랑',
        floor: '2F',
        box_bottom: 225,
        box_left: 1350,
        bottom: 118,
        left: 929,
        height: 200,
        width: 448,
        z_value: 200
    },
    {
        overlay_src: '/image/overlay-hotel-3.svg',
        alt: '뷔페',
        floor: '3F',
        box_bottom: 335,
        box_left: 1350,
        bottom: 206,
        left: 929,
        height: 205,
        width: 448,
        z_value: 200
    },
    {
        overlay_src: '/image/overlay-hotel-3.svg',
        alt: '객실',
        floor: '4F~10F',
        box_bottom: 460,
        box_left: 1350,
        bottom: 286,
        left: 959,
        height: 340,
        width: 419,
        z_value: 200
    },
    {
        overlay_src: '/image/overlay-hotel-3.svg',
        alt: '연회장',
        floor: '11F~12F',
        box_bottom: 610,
        box_left: 1350,
        bottom: 502,
        left: 959,
        height: 222,
        width: 419,
        z_value: 200
    },
] 