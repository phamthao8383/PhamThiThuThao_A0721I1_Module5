import {IProduct} from '../product/IProduct';
export class ProductDao {
  static products: IProduct[]=[
    {
      id: 1,
      name: "oppo",
      price: 1000,
      description: "dep"
    },{
      id: 2,
      name: "iphone",
      price: 1000,
      description: "ben"
    }

  ]

}
