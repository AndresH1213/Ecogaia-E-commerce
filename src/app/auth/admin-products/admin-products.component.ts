import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/models/Product';
import Swal from 'sweetalert2';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {
  products: Product[] = [];
  selectedProductID: string = "";
  selectedProduct: Product | undefined;

  addCombo: Product | undefined;
  newCombo: Product[] = [];

  productForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    price: ['', [Validators.required,  Validators.min(1)]],
    image: [null],
    characteristicName: [''],
    characteristicValue: ['']
  })

  public characteristic: any = {};
  public characteristicKeys: string[] = [];
  public showCharacteristics: boolean = false;

  public inputFileImage: boolean = false;
  public inputImageStateText = 'Subir';

  constructor(private fb: FormBuilder,
              private productService: ProductsService) { }

  ngOnInit(): void {
    this.loadProducts();
  }
  
  loadProducts() {
    this.productService.getProducts().subscribe((products) => {
      console.log(products)
      this.products = products.map(({_id ,name, price, imageUrl, characteristics }) => {
        return new Product(_id, name, price, imageUrl, characteristics)
      })
    })
  }

  loadProductData(prodId: string) {
    // reset previuos product data
    this.characteristicKeys = [];
    this.characteristic = {};
    this.showCharacteristics = false;

    if (!prodId) {
      this.selectedProduct = undefined;
      return this.productForm.reset();
    }

    this.productService.getSingleProduct(prodId!).subscribe((product) => {
      const { name, price, imageUrl, characteristics } = product;
      this.selectedProduct = product;
      let characteristicKey = ''
      let characteristicValue = [];
      console.log(characteristics)
      // if the product has characteristcis, load with the first one for UX
      if (characteristics) {
        characteristicKey = Object.keys(characteristics!)[0];
        characteristicValue = characteristics[characteristicKey];
        if (!Array.isArray(characteristicValue)) {
          characteristicValue = [characteristicValue]
        } 
        this.characteristic = {
          [characteristicKey] : characteristicValue
        }
      }
      this.productForm.setValue({
        name, 
        price, 
        image: imageUrl![0] || 'no-image', 
        characteristicName: characteristicKey, 
        characteristicValue: characteristicValue
      });
    })
  }

  addCharacteristic() {
    if (!this.productForm.get('characteristicName')?.value || !this.productForm.get('characteristicValue')?.value) {
      return 
    }
    this.showCharacteristics = true;
    const characteristicKey = this.productForm.get('characteristicName')?.value;
    const characteristicValue = this.productForm.get('characteristicValue')?.value;

    // if characteristic >1 the values must be provided separate by comas
    let characteristicSet = characteristicValue;

    if (typeof(characteristicValue) === typeof('string') ) {
      characteristicSet = characteristicValue.split(',');
    }
    // add this new characteristics to the characteristic object
    this.characteristic = {
      ...this.characteristic,
      [characteristicKey]: characteristicSet
    };
    this.characteristicKeys = Object.keys(this.characteristic);
    console.log(this.productForm.value)
  }

  pushCombo() {
    if (!this.addCombo) {
      console.log('No hay producto');
      return 
    }
    this.newCombo.push(this.addCombo!);
  }

  removeCombo(prodId: string) {
    const indexProduct = this.newCombo.findIndex(product => product._id === prodId);
    this.newCombo.splice(indexProduct, 1);
  }

  createProduct() {
    const productData = this.productForm.value;
    // if theres a characteristic in the characteristicObject add to the productData
    // this because in the producform we store just charcName and charcValue
    if (this.characteristic) {
      productData.characteristics = JSON.stringify(this.characteristic)
    }
    this.productService.addProduct(productData).subscribe((resp : any) => {
      if (resp.ok) {
        Swal.fire('New product added!', `New Product ${productData.name}`, 'success')
        this.productForm.reset()
        this.loadProducts();
      } else {
        Swal.fire('Opps', 'A error ocurrs', 'error');
      }
    }, (err) => {
      Swal.fire('err', err.error.msg, 'error')
    })
  }

  edit() {
    const prodId = this.selectedProductID;
    const {name, price, image} = this.productForm.value;

    let data: any = {
      name, 
      price, 
      image
    }

    if (this.characteristic) {
      data.characteristics = {...this.characteristic};
    } else {
      data.characteristics = {}
    }

    this.productService.updateProduct(prodId!, data ).subscribe(resp => {
      if (resp.ok) {
        Swal.fire('Updated!', resp.msg, 'success')
      }
    }, (err) => {
      Swal.fire('Error', `Ups something happend`, 'error')
    })
  }

  deleteProduct() {

    Swal.fire({
      title: 'Delete User?',
      text: `You are going to delete the product with name: ${this.selectedProduct?.name}`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.productService.deleteProduct(this.selectedProductID!).subscribe((resp) => {
          Swal.fire(
            'Deleted!',
            `${resp.msg}`,
            'success'
          );
          this.loadProducts();
          this.selectedProduct = undefined;
        });
      }
    });
  }

  showIputFileImage() {
    this.inputFileImage = this.inputFileImage ? false : true;
    this.inputImageStateText = this.inputImageStateText === 'URL' ? 'Subir' : 'URL';

    // reset the previuos input value
    this.productForm.get('image')?.reset();
  }

  onImageChange(target: any) {

    const [ file ] = target.files;
    if (file) {
      this.productForm.patchValue({image: file})
    }

  }

}
