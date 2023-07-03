let intervalId;


const dropdownSwitch = document.querySelectorAll('.dropdown__switch');
const dropdownMenu = document.querySelectorAll('.dropdown__menu');

dropdownSwitch.forEach(elem => {
    elem.addEventListener('click', elem => {
        const menu = elem.currentTarget.dataset.path;
        const haveMenu = document.querySelector(`[data-target=${menu}]`);
        const haveList = document.querySelector(`[data-path=${menu}]`)

        dropdownMenu.forEach(element => {

            if (!haveMenu.classList.contains('open')) {
                element.classList.remove('menu-active')
                element.classList.remove('open')

                haveMenu.classList.add('menu-active');
                intervalId = setTimeout(() => {
                    haveMenu.classList.add('open');
                }, 0);
            }
            if (haveMenu.classList.contains('open')) {
                clearTimeout(intervalId);
                haveMenu.classList.remove('menu-active');
                intervalId = setTimeout(() => {
                    haveMenu.classList.remove('open');
                }, 0);
            }
            window.onclick = elem => {
                if (elem.target == haveMenu || elem.target == haveList) {
                    return;
                } else {
                    haveMenu.classList.remove('menu-active');
                    haveMenu.classList.remove('open');
                }
            }
        })
    })
})