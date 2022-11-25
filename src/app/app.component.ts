<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { IProduct } from './models/products';
import { ProductsService } from './services/products.service';
=======
import { Component } from '@angular/core';
>>>>>>> 3fab1abc3ed425d68f4bf342da0561674ec4c44c

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
<<<<<<< HEAD
export class AppComponent implements OnInit {
  constructor(private readonly productsService: ProductsService) {}
  loading = true;

  ngOnInit(): void {
    this.productsService.getAll().subscribe((products) => {
      this.products = products;
      this.loading = false;
    });
  }

  title = 'greenatom';

  products: IProduct[] = [];
=======
export class AppComponent {
  title = 'greenatom';
>>>>>>> 3fab1abc3ed425d68f4bf342da0561674ec4c44c
}
