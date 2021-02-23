export const productList =(id)=>{
  return {
      type:'PRODUCT',
      id:id
  }
}
export const searchList =(name)=>{
    return {
        type:'SEARCH_KEY',
        payload:name
    }
}
export const DarkMode =(status)=>{
    return {
        type:'DARK_MODE',
        payload:status
    }
}