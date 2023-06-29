const paintsContainer = document.querySelector('.paints');
const burgerBtn = document.getElementById('burger');
const headerMenu = document.querySelector('.header__menu');


// также дополнительно прописывается чтобы работало после загрузки стилей
document.addEventListener("DOMContentLoaded", function () {
    // alert - выводит сверху окошко "подтвердите действие и текст"
    // alert('sdfaerf');
    burgerBtn.addEventListener('click', function () {
        // toggle - если нет - добавит, если есть - уберет
        headerMenu.classList.toggle('open')
        cartContainer.classList.remove('active')
    })
})




// создана для шаблонной записи продуктов и получения необходимых данных
function createProduct (product) {
    return {
        id: product.id,
        name: product.name ? product.name : 'Unknown Name',
        price: product.price ? product.price : null,
        volume: product.volume ? product.volume : null,
        imgSrc: product.imgSrc ? product.imgSrc : 'Unknown Image',
    }
}

// бегает по массиву на основании функции-шаблона createProduct
// и выводит html структуру карточек
for (i = 0; i < GOODS.length; i++) {
    const paint = createProduct(GOODS[i]);

    let priceWithVolume = ''
    if (paint.price !== null && paint.volume !== null) {
        priceWithVolume = `
            <span class="paints__price">€${paint.price}</span>
            <span class="paints__separator">/</span>
            <span class="paints__volume">${paint.volume}L</span>
        `
    } else {
        priceWithVolume = `
            <span class="paints__sold-out">Sold out</span>
        `
    }

    const paintBlock = document.createElement('div');
    paintBlock.className = 'paints__card';
    paintBlock.innerHTML = `
        <img src="${paint.imgSrc}">
        <p class="paints__name">${paint.name}</p>
        ${priceWithVolume}
    `
    paintsContainer.append(paintBlock)
};