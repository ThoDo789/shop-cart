import {DARK_MODE, PRODUCT, SEARCH_KEY, SORT_NAME_AZ, SORT_NAME_ZA, SORT_PRICE_DEC, SORT_PRICE_INC} from "../../types";

export const productList =(id)=>{
  return {
      type:PRODUCT,
      id:id
  }
}
export const searchList =(name)=>{
    return {
        type:SEARCH_KEY,
        payload:name
    }
}
export const DarkMode =(status)=>{
    return {
        type:DARK_MODE,
        payload:status
    }
}
export const sortNameAZ =()=>{
    return{
        type:SORT_NAME_AZ,

    }
}
export const sortNameZA =(value)=>{
    return{
        type:SORT_NAME_ZA,
        payload: value
    }
}
export const sortPriceInc =(value)=>{
    return{
        type:SORT_PRICE_INC,
        payload: value
    }
}
export const sortPriceDec =(value)=>{
    return{
        type:SORT_PRICE_DEC,
        payload: value
    }
}