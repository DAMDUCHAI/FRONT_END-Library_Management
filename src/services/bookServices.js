import { baseServices } from "./baseServices";
export class bookServices extends baseServices {

    // eslint-disable-next-line no-useless-constructor
    constructor(){
        super();
    }

    getAllBook = () => {
        return this.get(`/book/get-list-book`);
    }
    getBook = (id) => {
        return this.get(`/book/${id}`);
    }    
    deleteBook = (id) => {
        return this.delete(`/book/${id}`);
    }    
    updateBook = (id,bookUpdate) => {
        return this.put(`/book/${id}`,bookUpdate);
        
    }

    createBook = (bookCreate) => {
        return this.post(`/book/create`,bookCreate);

   
}

createBookCard= (bookCardCreate) =>{
    return this.post(`/book/create-borrow-books`,bookCardCreate);


}

createBorowbook= (bookBorrowCreate) =>{
    return this.post(`/book/create-borrow-detaild`,bookBorrowCreate);


}}




export const BookServices = new bookServices();
