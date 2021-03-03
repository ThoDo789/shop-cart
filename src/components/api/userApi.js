import axiosClient from "./axiosClient";

const userApi ={
    get:()=>{
        const url = '/user';
        return axiosClient.get(url)
    },
    post:(data)=>{
        const url = '/user';
        return axiosClient.post(url,data)
    },

}
export default userApi