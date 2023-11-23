export interface ReservationRequest {
    order_path: string;
    mem_name: string;
    mem_mobile: string;
    mem_email: string;
    order_date: string;
    order_time: string;
    adult_cnt: string;
    child_cnt: string;
    memo: string;
    mem_id: string;
}

export interface ReservationResponse {
    state: boolean;
    order_no?: string;
}