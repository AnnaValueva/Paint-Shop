const CART = document.getElementById('cart')

class Cart {

    handleClear() {
        CART.innerHTML = '';
    }

    render() {
        const productsStore = localStorageUtil.getProducts();
        let htmlCatalog = '';
        let sumCatalog = 0;
        let volumeCatalog = 0;

        GOODS.forEach(({ id, name, price, volume, imgSrc }) => {
            // Дополнительная проверка, поскольку нужны товары в корзине, а не все
            if (productsStore.indexOf(id) !== -1) {
                htmlCatalog += `
                    <tr>
                        <td class="cart-element__img"><img src="${imgSrc}"></td>
                        <td class="cart-element__name">${name}</td>
                        <td class="cart-element__price">€${price}</td>
                        <td class="cart-element__separator">/</td>
                        <td class="cart-element__volume">${volume} L</td>
                    </tr>
                `;
                sumCatalog += price;
                volumeCatalog += volume;
            }
        });

        const html = `
            <div class="cart-container">
            <div class="cart__close" onclick="cartPage.handleClear()">

            </div>
                <table>
                    ${htmlCatalog}
                    
                    <tr>
                        <td class="cart-element__name">TOTAL :</td>
                        <td class="cart-element__sum">€${sumCatalog}</td>
                        <td class="cart-element__volume">${volumeCatalog} L</td>
                    </tr>
                </table>
            </div>
        `;

        CART.innerHTML += html;
    }
}

const cartPage = new Cart();

cartPage.render();