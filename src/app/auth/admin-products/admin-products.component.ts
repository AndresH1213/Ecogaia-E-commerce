import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/interfaces/product.interface';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {
  products: Product[] = [];
  selectedCity: number = 1;

  productForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    price: ['', [Validators.required,  Validators.min(1)]],
    imgUrl: ['', Validators.required],
  })

  constructor(private fb: FormBuilder,
              private productService: ProductsService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((products) => {
      this.products = products
    })
  }

  edit() {
    console.log(this.productForm.value)
  }

}
