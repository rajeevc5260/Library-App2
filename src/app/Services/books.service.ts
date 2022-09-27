import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  constructor(private http: HttpClient) {}

  // Get Books
  getBooks() {
    return this.http.get('http://localhost:3000/books');
  }

  // add books data
  addBooks(booksData: any) {
    return this.http.post<any>('http://localhost:3000/addBooks', booksData);
  }

  getLib(id: any) {
    return this.http.get('http://localhost:3000/books/' + id);
  }

  // update Book
  updateBooks(book: any) {
    console.log('update');
    return this.http
      .put('http://localhost:3000/update/', book)
      .subscribe((data) => {
        console.log(data);
      });
  }

  // Delete Book
  deleteBooks(id: any) {
    return this.http.delete('http://localhost:3000/remove/' + id);
  }
}
