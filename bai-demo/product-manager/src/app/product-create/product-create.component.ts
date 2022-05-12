import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ProductService} from '../service/product.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  private subscription: Subscription;
  products :FormGroup;

  constructor(
    private _service: ProductService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.products= new FormGroup(
      {
        id: new FormControl('',[Validators.required]),
        name: new FormControl('',[Validators.required]),
        price: new FormControl('',[Validators.required]),
        description: new FormControl('',[Validators.required]),
        category: new FormControl('',[Validators.required])

      }
    )
  }
  save(){
    this._service.save(this.products.value).subscribe(()=>{
      this._router.navigateByUrl('/product');
    })
  }

}
