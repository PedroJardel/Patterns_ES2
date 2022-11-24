import { Carrinho } from './carrinho';

export class DiscountStrategy {
  protected discount = 0;

  getDesconto(cart: Carrinho): number {
    return cart.getTotal();
  }
}
