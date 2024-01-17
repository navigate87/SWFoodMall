import { ReservationRequest, ReservationResponse, ReservationGroupRequest,FnbReservedDateRequest,FnbReservedDateResponse } from "@/type/Reservation";
import axios from "axios";
import { GET_CODE_INFO, RESERVATION_REQUEST_DINING, RESERVATION_REQUEST_FB,RESERVATION_FB_DATE_CHECK } from "./pathlist";
import { useQuery } from "react-query";
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

interface CodeCategory {
  code: string;
  name: string;
  name_en: string;
  print_index: string;
}

interface FbSelectCode {
  code: string;
  code_name: string;
}

interface CodeInfoResponse {
  state: boolean;
  code_categories: CodeCategory[];
  fb_select_code: FbSelectCode[];
}

const fetchCodeInfo = async (): Promise<CodeInfoResponse> => {
  const response = await axios.get('/sr_system_api/common/init.php?action=getCodeInfo');
  return response.data;
};

export const useCodeInfo = () => {
  return useQuery<CodeInfoResponse, Error>('codeInfo', fetchCodeInfo);
};


export const reserveDining = async ( data: ReservationRequest ) : Promise<ReservationResponse> => {
    const response = await axios.post<ReservationResponse>(`${API_SERVER_BASE_URL}${RESERVATION_REQUEST_DINING}`, data, {
        withCredentials: true,
    });

    return response.data;
}

export const reserveFnb = async ( data: ReservationGroupRequest ) : Promise<ReservationResponse> => {
  const response = await axios.post<ReservationResponse>(`${API_SERVER_BASE_URL}${RESERVATION_REQUEST_FB}`, data, {
      withCredentials: true,
  });
  return response.data;
}

export const reservedDate = async ( data: FnbReservedDateRequest ) : Promise<FnbReservedDateResponse> => {
  const response = await axios.post<FnbReservedDateResponse>(`${API_SERVER_BASE_URL}${RESERVATION_FB_DATE_CHECK}`, data, {
      withCredentials: true,
  });
  return response.data;
}

