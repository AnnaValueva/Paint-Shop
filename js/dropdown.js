// переменная для setTimeout потому что после отработки необходимо очищать
let intervalId;


const dropdownSwitch = document.querySelectorAll('.dropdown__switch');
const dropdownMenu = document.querySelectorAll('.dropdown__menu');

// поскольку выбираю All то получаю массивоподобную структуру
// поэтому используется метод forEach
dropdownSwitch.forEach(elem => {
    // на наши кнопки навешиваем прослушку по клику
    elem.addEventListener('click', elem => {
        // получить атрибут кнопки на которую нажали
        // dataset - обращение по атрибуту data
        const menu = elem.currentTarget.dataset.path;
        // создала как переменные для упрощения чтения
        const haveMenu = document.querySelector(`[data-target=${menu}]`);
        const haveList = document.querySelector(`[data-path=${menu}]`)
        // родитель ссылок
        dropdownMenu.forEach(element => {
            // квадратные скобки для обращения к дата атрибуту
            // обращаемся так - если меню(кнопка) со значением one 
            // то и data-target будет со значением one
            // есть ли класс open(липовый)
            // вынесла в переменную для упрощения
            if (!haveMenu.classList.contains('open')) {
                // делаем чтобы при открытии одного закрывалась другое
                element.classList.remove('menu-active')
                element.classList.remove('open')

                haveMenu.classList.add('menu-active');
                // время не важно, через Timeout потому что важно чтобы это было
                // после всех остальных действий
                intervalId = setTimeout(() => {
                    haveMenu.classList.add('open');
                }, 0);
            }
            if (haveMenu.classList.contains('open')) {
                clearTimeout(intervalId);
                haveMenu.classList.remove('menu-active');
                // делается через таймаут чтобы кнопку можно было открыть и закрыть
                intervalId = setTimeout(() => {
                    haveMenu.classList.remove('open');
                }, 0);
            }
            // чтобы при нажатии в другом месте меню закрывалось
            window.onclick = elem => {
                if (elem.target == haveMenu || elem.target == haveList) {
                    // если кликнули на меню или кнопку то ничего не делаем
                    return;
                } else {
                    // иначе скрыть все
                    haveMenu.classList.remove('menu-active');
                    haveMenu.classList.remove('open');
                }
            }
        })
    })
})