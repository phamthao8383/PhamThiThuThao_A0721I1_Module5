import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {IProduct} from '../model/IProduct';
import {ProductService} from '../service/product.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  private subscription: Subscription |undefined;
  product: IProduct;
  product1:FormGroup;
  constructor(
    private _service: ProductService,
    private _activated: ActivatedRoute,
    private _router: Router
  ) {
  }
  ngOnInit(): void {
    let id = this._activated.snapshot.params['id'];
    this.subscription=this._service.findById(id).subscribe(data =>{
      this.product=data;
    })
    this.product1 = new FormGroup(
      {
        id: new FormControl('',[Validators.required]),
        name: new FormControl('',[Validators.required]),
        price: new FormControl('',[Validators.required, Validators.min(0)] ),
        description: new FormControl('', [Validators.required]),
        category: new FormControl('',[Validators.required])
      }
    )
  }
  update(){
    this._service.update(this.product1.value.id,this.product1.value).subscribe(()=>{
      this._router.navigateByUrl('/product');
    })
  }

}
