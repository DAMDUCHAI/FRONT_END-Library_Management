import { baseServices } from "./baseServices";

export class acountServices extends baseServices {

    // eslint-disable-next-line no-useless-constructor
    constructor(){
        super();
    }

    getAllAcount = () => {
        return this.get(`/acount/get-list-acount`);
    }
    getAcount = (id) => {
        return this.get(`/acount/${id}`);
    }    
    deleteAcount = (id) => {
        return this.delete(`/acount/${id}`);
    }    
    updateAcount = (id,acountUpdate) => {
        return this.put(`/acount/${id}`,acountUpdate);
    }
  
    createAcount = (acountCreate) => {
        return this.post(`/acount/create`,acountCreate);
    }
    
   
}


export const AcountServices = new acountServices();
