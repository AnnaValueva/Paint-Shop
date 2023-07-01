const signInBtn = document.querySelector('.sign-in__btn')
const signUpBtn = document.querySelector('.sign-up__btn')
const formBox = document.querySelector('.form-box')
const body = document.querySelector('body')

const mobileSignIn = document.querySelector('.mobile-box__btn-sign-in')
const mobileSignUp = document.querySelector('.mobile-box__btn-sign-up')
const mobileBox = document.querySelector('.mobile-form')


signUpBtn.onclick = function () {
    formBox.classList.add('active');
    body.classList.add('active');
}

signInBtn.onclick = function () {
    formBox.classList.remove('active');
    body.classList.remove('active');
}


mobileSignIn.onclick = function () {
    mobileBox.classList.add('active');
}

mobileSignUp.onclick = function () {
    mobileBox.classList.remove('active');
}