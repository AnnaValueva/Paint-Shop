const cartActivePage = document.getElementById('cart')


class Header {

    handleOpenCartPage() {
        cartActivePage.classList.add('active')
        cartPage.render();
    }

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
const productsStore = localStorageUtil.getProducts();
headerPage.render(productsStore.length);