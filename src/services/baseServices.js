import Axios from "axios"
import { DOMAIN_LIBRARY } from "../util/constants/settingSystem"

export class baseServices {
    put = (url,model) => {
        return  Axios({
            url:`${DOMAIN_LIBRARY}/${url}`,
            method:'PUT',
            data:model,
            // headers: {'Authorization': 'Bearer ' + localStorage.getItem(TOKEN)} //JWT
        }) 
    }

    post = (url,model) => {
        return Axios({
            url:`${DOMAIN_LIBRARY}/${url}`,
            method:'POST',
            data:model,
            // headers: {'Authorization': 'Bearer ' + localStorage.getItem(TOKEN)} //JWT
        }) 
    }


    get = (url) => {
        return Axios({
            url:`${DOMAIN_LIBRARY}/${url}`,
            method:'GET',
            // headers: {'Authorization': 'Bearer ' + localStorage.getItem(TOKEN)} //token yêu cầu từ backend 
        })
    }

    delete = (url) => {
        return Axios({
            url:`${DOMAIN_LIBRARY}/${url}`,
            method:'DELETE',
            // headers: {'Authorization': 'Bearer ' + localStorage.getItem(TOKEN)} //token yêu cầu từ backend 
        })
    }
}