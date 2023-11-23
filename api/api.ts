import { ReservationRequest, ReservationResponse } from "@/type/Reservation";
import axios from "axios";
import { RESERVATION_REQUEST_DINING } from "./pathlist";
axios.defaults.withCredentials = false;
axios.defaults.timeout = 5000;
const API_SERVER_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://new-dev-erp.swadpia.co.kr'

axios.interceptors.request.use(
    function (config) {
      config.baseURL = API_SERVER_BASE_URL;
      config.withCredentials = true;
      return config;
    },
    function (error) {
      return Promise.reject(error);
    },
);

export const reserveDining = async ( data: ReservationRequest ) : Promise<ReservationResponse> => {
    const response = await axios.post<ReservationResponse>(`${API_SERVER_BASE_URL}${RESERVATION_REQUEST_DINING}`, data, {
        withCredentials: true,
    });

    console.log("데이터 뭐가 날라옴?",response.data);
    return response.data;
}

