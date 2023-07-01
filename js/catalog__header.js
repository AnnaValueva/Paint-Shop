const cartActivePage = document.getElementById('cart')


class Header {

    handleOpenCartPage() {
        cartActivePage.classList.add('active')
        cartPage.render();
    }

    // render отобразит код на странице, count для количества товаров
    render(count) {
        const html = `
            <div class="header-container">
                <div class="header-counter" onclick="headerPage.handleOpenCartPage();">
                    🛒 ${count}
                </div>
            </div>
        `;

        ROOT__HEADER.innerHTML = html
    }; 
};

const headerPage = new Header();

// вызывается локальное хранилище для отображения товаров в корзине
// переменная чтобы поместить данные которые придут
const productsStore = localStorageUtil.getProducts();
// поскольку придет массив со всеми товарами, преобразовываем в число
// productsStore.length передаем сразу в экземпляр

headerPage.render(productsStore.length);