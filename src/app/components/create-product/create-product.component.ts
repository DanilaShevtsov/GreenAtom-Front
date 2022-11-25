import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  form = new FormGroup({
    fio: new FormControl<string>(''),
    email: new FormControl<string>(''),
    phoneNumber: new FormControl<string>('')
  })

  constructor(private readonly productService: ProductsService) { }

  ngOnInit(): void {}

  submit() {
    const fio = this.form.value.fio;
    const email = this.form.value.email;
    const phone = this.form.value.phoneNumber;
    
    this.productService.setContactInfo({
      fio: fio as string,
      email: email as string,
      phone: phone as string
    }).subscribe((res) => {
      console.log(res);
    });
  }
}
