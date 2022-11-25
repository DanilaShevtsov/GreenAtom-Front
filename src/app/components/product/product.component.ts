import { Component, Input } from '@angular/core';
import { IProduct } from 'src/app/models/products';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: []
})
export class ProductComponent {
  @Input() product: IProduct

  details = false;
}
