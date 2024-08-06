export const API_URL = 'http://173.191.92.101.com/service/api/';
export const IMG_URL = 'http://173.191.92.101.com/service';

//Validation message
export const Email: string = 'Please enter email';
export const Password: string = 'Password must be 3-10 alphanumeric characters';
//Regex
export const emailRegex: RegExp =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const numberRegex: RegExp = /^[0-9]+$/;
export const priceRegex: RegExp = /^(\d{0,5})(\.\d{1,2}|)$/;
export const optionLen: number = 3;
export const phoneRegExp: string = '^\\d{10}$';
export const usernameRegex = /^[a-zA-Z0-9]{3,10}$/;
