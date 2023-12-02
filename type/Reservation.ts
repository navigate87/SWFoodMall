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

export interface ReservationGroupRequest {
    order_path: string;
    mem_name: string;
    mem_mobile: string;
    mem_email: string;
    order_date: string;
    start_order_time: string;
    end_order_time: string;
    adult_cnt: string;
    child_cnt: string;
    host_com_name: string;
    event_name: string;
    fb_type: string;
    fb_table_type: string;
    fb_sub_facilities_af: string[];
    fb_sub_facilities_ie: string[];
    fb_sub_facilities_add: string[];
    memo: string;
    mem_id: string;
}

export interface ReservationGroupResponse {
    state: boolean;
    order_no?: string;
}