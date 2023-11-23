import { Time } from "@/type/Time";
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


