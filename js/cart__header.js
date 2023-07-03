const menuRight = document.querySelector('.menu__right');
const cartContainer = document.querySelector('.cart-body');


class Header {
    
    handleOpenCartPage() {
        cartContainer.classList.toggle('active')
        cartPage.render();
    }

    render(count) {
        const menuItems = `
        <li class="cart-btn">
            <a onclick="headerPage.handleOpenCartPage();">Cart (${count})</a>
        </li>`;

        menuRight.innerHTML += menuItems;
    }; 
};

const headerPage = new Header();
const productsStore = localStorageUtil.getProducts();
headerPage.render(productsStore.length);