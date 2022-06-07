import { baseServices } from "./baseServices";

export class bookshelfServices extends baseServices {

    // eslint-disable-next-line no-useless-constructor
    constructor(){
        super();
    }

    getAllBookshelf = () => {
        return this.get(`/bookshelf/get-list-bookshelft`);
    }
    getBookshelf = (id) => {
        return this.get(`/bookshelf/${id}`);
    }    
    deleteBookshelf = (id) => {
        return this.delete(`/bookshelf/${id}`);
    }    
    updateBookshelf = (id) => {
        return this.put(`/bookshelf/${id}`);
    }
    createBookshelf = () => {
        return this.put(`/bookshelf/create`);
    }
   
}


export const BookshelfServices = new bookshelfServices();
