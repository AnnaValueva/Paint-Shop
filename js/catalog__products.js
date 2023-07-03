class Products {

    constructor() {
        this.classNameActive = 'products-element__btn_active';
        this.labelAdd = 'Add to cart';
        this.labelRemove = 'Remove from cart';
    }

    handleSetLocationStorage(element, id) {
        const { pushProduct, products } = localStorageUtil.putProducts(id);
        if (pushProduct) {
            element.classList.add(this.classNameActive);
            element.innerHTML = this.labelRemove;
        } else {
            element.classList.remove(this.classNameActive);
            element.innerHTML = this.labelAdd;
        }

        headerPage.render(products.length);
    }

    render () {
        const productsStore = localStorageUtil.getProducts();
        let htmlCatalog = '';
        GOODS.forEach(({ id, name, price, volume, imgSrc }) => {
            const nameCorrect = name ? name : 'Unknown Name';
            const priceCorrect = price ? price : null;
            const volumeCorrect = volume ? volume : null;
            const imgSrcCorrect = imgSrc ? imgSrc : 'Unknown Image';
            let activeClass = '';
            let activeText = '';

            if (productsStore.indexOf(id) === -1) {
                activeText = this.labelAdd;
            } else {
                activeClass = ' '+this.classNameActive;
                activeText = this.labelRemove;
            }

            let priceWithVolume = ''
            if (priceCorrect !== null && volumeCorrect !== null) {
                priceWithVolume = `
                    <span class="products-element__price">€${priceCorrect}</span>
                    <span class="products-element__volume">${volumeCorrect}L</span>
                    <button class="products-element__btn${activeClass}" onclick = "productsPage.handleSetLocationStorage(this, '${id}')">
                        ${activeText}
                    </button>
                `
            } else {
                priceWithVolume = `
                    <span class="products-element__sold-out">Sold out</span>
                `
            }

            htmlCatalog += `
                <li class="products-element">
                    <img class="products-element__img" src="${imgSrcCorrect}" />
                    <span class="products-element__name">${nameCorrect}</span>
                    ${priceWithVolume}
                </li>
            `;
        });

        const html = `
            <ul class="products-container">
                ${htmlCatalog}
            </ul>
        `;

        ROOT__PRODUCTS.innerHTML = html;
    };
};


const productsPage = new Products();
productsPage.render();