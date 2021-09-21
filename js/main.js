class ProductsList {
  constructor(container = '.products') {
    this.container = container;
    this._goods = [];
    this._goodsObjects = [];

    this._fetchGoods();
    this._render();
  }

  _fetchGoods() {
    this._goods = [
      { id: 1, title: 'Notebook', price: 20000 },
      { id: 2, title: 'Mouse', price: 1500 },
      { id: 3, title: 'Keyboard', price: 5000 },
      { id: 4, title: 'Gamepad', price: 4500 },
    ];
  }

  _render() {
    const block = document.querySelector(this.container);

    for (const product of this._goods) {
      const productObject = new ProductItem(product);
      this._goodsObjects.push(productObject);

      block.insertAdjacentHTML('beforeend', productObject.getHTMLString())
    }
  }
}

class ProductItem {
  constructor(item, img = 'https://via.placeholder.com/200x150') {
    this.id = item.id;
    this.title = item.title;
    this.price = item.price;
    this.img = img;
  }

  getHTMLString() {
    return `<div class="product-item" data-id="${this.id}">
              <img src="${this.img}" alt="Some img">
              <div class="desc">
                  <h3>${this.title}</h3>
                  <p>${this.price} \u20bd</p>
                  <button class="buy-btn">Купить</button>
              </div>
          </div>`;
  }
}

const catalog = new ProductsList();


// class ProductsList {
//   #goods;
//   #goodsObjects;
//
//   constructor(container = '.products') {
//     this.container = container;
//     this.#goods = [];
//     this.#goodsObjects = [];
//
//     this.#fetchGoods();
//     this.#render();
//   }
//
//   #fetchGoods() {
//     this.#goods = [
//       {id: 1, title: 'Notebook', price: 20000},
//       {id: 2, title: 'Mouse', price: 1500},
//       {id: 3, title: 'Keyboard', price: 5000},
//       {id: 4, title: 'Gamepad', price: 4500},
//     ];
//   }
//
//   #render() {
//     const block = document.querySelector(this.container);
//
//     for (const product of this.#goods) {
//       const productObject = new ProductItem(product);
//       this.#goodsObjects.push(productObject);
//
//       block.insertAdjacentHTML('beforeend', productObject.getHTMLString())
//     }
//   }
// }
//
// class ProductItem {
//   constructor(item, img='https://via.placeholder.com/200x150') {
//     this.id = item.id;
//     this.title = item.title;
//     this.price = item.price;
//     this.img = img;
//   }
//
//   getHTMLString() {
//     return `<div class="product-item" data-id="${this.id}">
//               <img src="${this.img}" alt="Some img">
//               <div class="desc">
//                   <h3>${this.title}</h3>
//                   <p>${this.price} \u20bd</p>
//                   <button class="buy-btn">Купить</button>
//               </div>
//           </div>`;
//   }
// }

// const catalog = new ProductsList();

// const products = [
//   {id: 1, title: 'Notebook', price: 20000},
//   {id: 2, title: 'Mouse', price: 1500},
//   {id: 3, title: 'Keyboard', price: 5000},
//   {id: 4, title: 'Gamepad', price: 4500},
// ];
//
// const renderProduct = (item, img='https://via.placeholder.com/200x150') => `<div class="product-item" data-id="${item.id}">
//               <img src="${img}" alt="Some img">
//               <div class="desc">
//                   <h3>${item.title}</h3>
//                   <p>${item.price} \u20bd</p>
//                   <button class="buy-btn">Купить</button>
//               </div>
//           </div>`;
//
// const renderProducts = list => {
// document.querySelector('.products')
//     .insertAdjacentHTML('beforeend', list.map(item => renderProduct(item)).join(''));
// };
//
// renderProducts(products);
