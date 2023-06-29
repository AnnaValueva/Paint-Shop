class LocalStorageUtil {
    // свойства задаются в constructor
    constructor() {
        this.keyName = 'products';
    }
    // получает товары которые лежат в локальном хранилище
    getProducts() {
        const productsLocalStorage = localStorage.getItem(this.keyName);
        if (productsLocalStorage !== null) {
            // из строки в массив
            return JSON.parse(productsLocalStorage);
        }
        return [];
    }

    // добавить новое значение в локальное хранилище
    putProducts(id) {
        // передали все что лежит в локальном
        let products = this.getProducts();
        // проверка новый это элемент или нет
        let pushProduct = false;
        // новая переменная для проверки элементов, если совпадений нет то вернется 2
        const index = products.indexOf(id);

        if (index === -1) {
            products.push(id);
            pushProduct = true;
        } else {
            // метод для удаления элемента
            products.splice(index, 1);
        }
        // устанавливаем и указываем куда именно И что именно
        // поскольку products массив, необходимо его преобразовать обратно в строку
        localStorage.setItem(this.keyName, JSON.stringify(products));

        // возвращаем данные объектом
        return {
            pushProduct,
            products,
        }
    }
}
// теперь к localStorageUtil можно обращаться get или put Products



// делаем экземпляр класса чтобы вернуть его
const localStorageUtil = new LocalStorageUtil();

// сохраняем какую то переменную и выводим для пример
// const a = localStorageUtil.getProducts();
// console.log(a);

// будет добавляться несколько единиц и двоек. необходима проверка
// localStorageUtil.putProducts('1');
// localStorageUtil.putProducts('2');
