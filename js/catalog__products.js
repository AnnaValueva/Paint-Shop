class Products {

    // поскольку некоторые значения повторяются, то выносятся в переменную
    constructor() {
        this.classNameActive = 'products-element__btn_active';
        this.labelAdd = 'Add to cart';
        this.labelRemove = 'Remove from cart';
    }

    handleSetLocationStorage(element, id) {
        // состоит из двух объектов, поэтому деструктуризация 
        const { pushProduct, products } = localStorageUtil.putProducts(id);
        
        // добавляется значения удаления из корзины
        if (pushProduct) {
            element.classList.add(this.classNameActive);
            element.innerHTML = this.labelRemove;
        } else {
            element.classList.remove(this.classNameActive);
            element.innerHTML = this.labelAdd;
        }

        // чтобы количество товаров корзины отображалось сразу, а не после обновления стр
        headerPage.render(products.length);
    }

    render () {
        // добавляются данные с локального хранилища
        const productsStore = localStorageUtil.getProducts();
        // создается переменная
        let htmlCatalog = '';
        // делаем сразу деструктуризацию куда просто передавали значения element
        // пишем названия наших значений
        GOODS.forEach(({ id, name, price, volume, imgSrc }) => {
            const nameCorrect = name ? name : 'Unknown Name';
            const priceCorrect = price ? price : null;
            const volumeCorrect = volume ? volume : null;
            const imgSrcCorrect = imgSrc ? imgSrc : 'Unknown Image';
            // данные для активной кнопки и стилей
            let activeClass = '';
            let activeText = '';

            if (productsStore.indexOf(id) === -1) {
                // если продукта нет то на кнопку добавляется текст "добавить в корзину"
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

            // console.log(id, name, price, volume, imgSrc)
            // добавляем новый контент в htmlCatalog
            // к методу onclick добавлен экземпляр для отработки 
            htmlCatalog += `
                <li class="products-element">
                    <img class="products-element__img" src="${imgSrcCorrect}" />
                    <span class="products-element__name">${nameCorrect}</span>
                    ${priceWithVolume}
                </li>
            `;
        });

        // делаем нашу обертку ul для списка и после рендерим htmlCatalog
        const html = `
            <ul class="products-container">
                ${htmlCatalog}
            </ul>
        `;

        ROOT__PRODUCTS.innerHTML = html;
    };
};


// чтобы отработал console log делаем экземпляр
const productsPage = new Products();
// после вызываем метод и теперь в консоли выводятся объекты
productsPage.render();

