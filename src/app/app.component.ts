import { Component, OnInit } from '@angular/core';
import { IProduct } from './models/products';
import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
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
}
