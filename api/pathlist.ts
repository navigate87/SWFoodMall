// api 경로
export const GET_CODE_INFO = '/sr_system_api/common/init.php?action=getCodeInfo'                            // init code 

// 다이닝
export const RESERVATION_REQUEST_DINING = '/sr_system_api/reservation/dining.php?action=add';               // 다이닝 예약
export const RESERVATION_DINING_CHECK = '/sr_system_api/reservation/dining.php?action=findList';            // 다이닝 예약 조회
export const RESERVATION_DINING_DELETE = '/sr_system_api/reservation/dining.php?action=del'                 // 다이닝 예약 취소

// F&B
export const RESERVATION_REQUEST_FB = '/sr_system_api/reservation/fb.php?action=add';                       // FB 예약
export const RESERVATION_FB_CHECK = '/sr_system_api/reservation/fb.php?action=findList';                    // FB 예약 조회
export const RESERVATION_FB_DELETE = '/sr_system_api/reservation/fb.php?action=del';                        // FB 예약 취소
export const RESERVATION_FB_DATE_CHECK = '/sr_system_api/reservation/fb.php?action=findList';               // FB 월별 예약된 날짜 조회