//Font name
import {Platform} from 'react-native';
// export const FONT_FAMILY_BOLD = 'Kastelov - Axiforma Bold';
export const FONT_FAMILY_BOLD = Platform.OS === 'ios' ? 'Axiforma-Bold' : 'Kastelov - Axiforma Bold'
export const FONT_FAMILY_REGULAR =
Platform.OS === 'ios'? "Axiforma-Medium":'Kastelov - Axiforma Medium';
export const FONT_FAMILY_THIN = 'Kastelov - Axiforma Thin';
export const FONT_FAMILY_BLACK = 'Kastelov - Axiforma bLACK';
export const FONT_FAMILY_LIGHT = 'Kastelov - Axiforma Light';

//Color
export const COMMONTXTCOLOR = '#e6e6e6';
export const UPPERTXTCOLOR = '#888888';
export const COMMONTHEMECOLOR = '#11bfbe';
export const COMMONBTNCOLOR = '#11bfbe';
export const TEXTINPTCOLOR = '#363636';
export const COMMONBLACKTXTCOLOR = '#858585';
export const PLAN_ACTIVE_COLOR_CODE = '#11bfbe';
export const PLAN_DEACTIVE_COLOR_CODE = '#caf2f2';
export const WHITE_COLOR_CODE = '#ffffff';
export const BLACK_COLOR_CODE = '#000000';
export const COMMON_BACKGROUND_COLOR = "#1a1a1a";
export const GREY_COLOR_CODE = "#9a9a81";
export const LIGHT_GREY_COLOR_CODE = "#7b7b7b";
export const LIGHT_WHITE_COLOR_CODE = '#d4d4d4';
//export const PAYS_STACK_KEY = "pk_test_d0cdc5815eadbaa257a866dd4f9478722c3d9f05";

export const PAYS_STACK_KEY = "pk_live_46b7ccf8af71c7bde0c74e8b788d5499b3706020";
export const PAYPAL_CLINT_ID ='AT4EfS2dlIaPC4mHIBWoZHIWg8fqaKJ0pyb63vVqz3PX33n3_fQQQWbXvcbDZfvaMnU-5WIJ4O7-QJbN';
//export const PAYPAL_CLINT_ID = 'Acsuy_NdIA6-zoQrBAIpTTgrAf8D5VVyc3l2kSdKsuza8fwwL7dE-w4FOY1zeon0FifliBwZqG88kWEF';

//Base URL
export const BASEURL = 'https://nokelstv.com:3000';
//export const BASEURL = 'http://192.168.1.31:3000';