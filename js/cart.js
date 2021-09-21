//Корзина

class ProductsListInCart {
    constructor(containerGoods = '.products-in-cart', containerSum = '.totalSum') {
        this.containerInCart = containerGoods;
        this.containerSum = containerSum;
        this._goodsInCart = [];
        this._goodsObjectsInCart = [];

        this._fetchGoodsInCart();
        this._renderInCart();
        /* this._renderSum(); */
    }

    _fetchGoodsInCart() {
        this._goodsInCart = [
            { id: 1, title: 'Notebook', price: 20000, count: 1 },
            { id: 2, title: 'Mouse', price: 1500, count: 2 },
            { id: 3, title: 'Keyboard', price: 5000, count: 5 },
            { id: 4, title: 'Gamepad', price: 4500, count: 7 },
        ];
    }

    _renderInCart() {
        const block = document.querySelector(this.containerInCart);
        const blockSum = document.querySelector(this.containerSum);
        let cartSum = 0;

        for (const product of this._goodsInCart) {
            const productObject = new ProductItemInCart(product);
            this._goodsObjectsInCart.push(productObject);

            block.insertAdjacentHTML('beforeend', productObject.getHTMLString());

            cartSum = product.count * product.price;
            cartSum += cartSum;
        }

        blockSum.insertAdjacentHTML('afterbegin', cartSum);
    }
}

class ProductItemInCart {
    constructor(item, img = 'https://via.placeholder.com/200x150') {
        this.id = item.id;
        this.title = item.title;
        this.price = item.price;
        this.img = img;
        this.count = item.count;
    }

    getHTMLString() {
        return `<div class="product-item-in-cart" data-id="${this.id}">
                <img src="${this.img}" alt="Some img">
                <div class="desc-in-cart">
                    <h3>${this.title}</h3>
                    <p>${this.price} \u20bd</p>
                    <p>${this.count} шт.</p>
                </div>
            </div>`;
    }
}

const catalogInCart = new ProductsListInCart();