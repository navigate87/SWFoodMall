import { HallInfoDataProps } from "@/data/hallInfo";
import { atom, RecoilEnv } from "recoil";

RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;

export const modalShowState = atom<boolean>({
    key: "reservationModal",
    default: false,
});

export const modalConfirmShowState = atom<boolean>({
    key: "reservationConfirmModal",
    default: false,
});

export const recoilShowConfirmGroupModal = atom<boolean>({
    key: "reservationConfirmGroupModal",
    default: false,
})

export const recoilSelectedStore = atom<string>({
    key: "selectedStore",
    default: "",
})

export const recoilStoreCode = atom<string>({
    key: "selectedStoreCode",
    default: "",
})

export const recoilStoreState = atom<boolean>({
    key: "selectedStoreState",
    default: false
})

export const recoilSelectedDate = atom<Date>({
    key: "selectedDate",
    default: new Date()
})

export const recoilSelectedTime = atom<string>({
    key: "selectedTime",
    default: "",
})

export const recoilDateSelectState = atom<boolean>({
    key: "selectedDateState",
    default: false
})

export const recoilTimeState = atom<boolean>({
    key: 'selectedTimeState',
    default: false,
})

export const recoilAdultCnt = atom<string>({
    key: 'adultCount',
    default: "0",
})

export const recoilChildCnt = atom<string>({
    key: 'childCount',
    default: "0",
})

export const recoilReservationName = atom<string>({
    key: 'mem_name',
    default: "",
})

export const recoilReservationContact = atom<string>({
    key: 'mem_mobile',
    default: "",
})

export const recoilReservationEmail = atom<string>({
    key: 'mem_email',
    default: ""
})

export const recoilReserveOption = atom<string>({
    key: 'Option',
    default: ""
})

export const recoilShowGroupModal = atom<boolean>({
    key: 'group_modal',
    default: false
})

export const recoilTimeRange = atom<string>({
    key: 'TimeRange',
    default: ''
})

export const recoilSecondStoreOption = atom<string>({
    key: 'SecondStoreOption',
    default: ''
})

export const recoilSecondStoreState = atom<boolean>({
    key: 'SecondStoreState',
    default: false
})

export const recoilSecondStoreCode = atom<string>({
    key: 'SecondStoreCode',
    default: ''
})

export const recoilTableTypeCode = atom<string>({
    key: 'TableTypeCode',
    default: ''
})

export const recoilTableTypeSelect = atom<boolean>({
    key: 'TableTypeCode',
    default: false
})

export const recoilTableTypeName = atom<string>({
    key: 'TableTypeName',
    default: ''
})

export const recoilEventName = atom<string>({
    key: 'EventName',
    default: ''
})

export const recoilPeriod = atom<string>({
    key: 'Period',
    default: ''
})

interface Facility {
    code: string;
    name: string;
}

export const recoilFacilitiesThree = atom<Facility[]>({
    key: 'facilitiesThree',
    default: [],
})

export const recoilFacilitiesTwo = atom<Facility[]>({
    key: 'facilitiesTwo',
    default: [],
})

export const recoilFacilitiesOne = atom<Facility[]>({
    key: 'facilitiesOne',
    default: [],
})

export const recoilHallInfoState = atom<boolean>({
    key: 'hallInfosState',
    default: false
})

export const recoilHallInfoData = atom<HallInfoDataProps | null>({
    key: 'selectedHallDetailData',
    default: null,
})
