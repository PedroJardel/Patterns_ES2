export interface Product {
    name: string;
    price: number;
}

export class carrinho {
    private products: Product[] = [];
    private desconto = 0;

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
        const total = this.getTotal();

        if (total >= 100 && total < 200) {
            this.desconto = 10;
        } else if (total >= 100 && total < 300) {
            this.desconto = 20;
        } else if (total >= 300) {
            this.desconto = 30;
        }


        return total - (total * (this.desconto / 100))

    }

}

const descCarriho = new carrinho();
descCarriho.addProduct({name:'produto 1', price: 50}),
descCarriho.addProduct({name:'produto 2', price: 50})
console.log(descCarriho.getTotal)
console.log(descCarriho.getTotalComDesconto)