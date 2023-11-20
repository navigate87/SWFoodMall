import { atom, RecoilEnv } from "recoil";

RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;

export const modalShowState = atom<boolean>({
    key: "reservationModal",
    default: false,
});

export const recoilSelectedStore = atom<string>({
    key: "selectedStore",
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

export const recoilDateSelectState = atom<boolean>({
    key: "selectedDateState",
    default: false
})