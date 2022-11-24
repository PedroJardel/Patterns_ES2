import { Carrinho } from "./carrinho";
import { DefaultDiscount } from "./default-discount";
import { NewDiscount } from "./new-discount";

const shoppingCart = new Carrinho();
shoppingCart.discount = new DefaultDiscount();
shoppingCart.discount = new NewDiscount();
shoppingCart.addProduct({ name: 'Produto 1', price: 50 });
shoppingCart.addProduct({ name: 'Produto 2', price: 50 });
shoppingCart.addProduct({ name: 'Produto 2', price: 50 });
console.log(shoppingCart.getTotal());
console.log(shoppingCart.getTotalComDesconto());
