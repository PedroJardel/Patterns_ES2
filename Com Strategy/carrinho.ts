import { Product } from './product';
import { DiscountStrategy } from './discount-strategy';

export class Carrinho {
  private products: Product[] = [];
  private _discountStrategy: DiscountStrategy = new DiscountStrategy();

  addProduct(...products: Product[]): void {
    products.forEach((product) => this.products.push(product));
  }

  getProducts(): Product[] {
    return this.products;
  }

  getTotal(): number {
    return this.products.reduce((sum, product) => sum + product.price, 0);
  }

  getTotalComDesconto(): number {
    return this._discountStrategy.getDesconto(this);
  }

  set discount(discount: DiscountStrategy) {
    this._discountStrategy = discount;
  }
}
