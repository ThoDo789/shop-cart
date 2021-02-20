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