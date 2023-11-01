import { atom } from "recoil";

export const modalShowState = atom<boolean>({
    key: "reservationModal",
    default: false,
});