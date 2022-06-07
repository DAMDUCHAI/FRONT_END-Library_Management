import { baseServices } from "./baseServices";

export class publisherServices extends baseServices {

    // eslint-disable-next-line no-useless-constructor
    constructor(){
        super();
    }

    getAllPublisher = () => {
        return this.get(`/publisher/get-list-publisher`);
    }
    getPublisher = (id) => {
        return this.get(`/publisher/${id}`);
    }    
    deletePublisher = (id) => {
        return this.delete(`/publisher/${id}`);
    }    
    updatePublisher = (id,publisherUpdate) => {
        return this.put(`/publisher/${id}`,publisherUpdate);
    }


    createPublisher = (publisherCreate) => {
        return this.post(`/publisher/create`,publisherCreate);
    }
   
}


export const PublisherServices = new publisherServices();
