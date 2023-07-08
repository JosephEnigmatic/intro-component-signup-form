const submitBtn = document.querySelector('.submit-btn');
let emailRegex = /^[\w-\.]+@([\w-\.])+[\w-]{2,4}$/g;

submitBtn.addEventListener('click', submitForm)

function submitForm() {
    checkError()
}


// inputs
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const password = document.getElementById('password');

function checkError() {
    let smallFirst = firstName.nextElementSibling;
    let smallLast = lastName.nextElementSibling;
    let smallEmail = email.nextElementSibling;
    let smallPass = password.nextElementSibling;

    if (firstName.value.trim() === '') {
        firstName.classList.add('error')
        smallFirst.innerHTML = 'First Name cannot be empty'
    } else {
        firstName.classList.remove('error');
        smallFirst.innerHTML = ''
    }

    if (lastName.value.trim() === '') {
        lastName.classList.add('error')
        smallLast.innerHTML = 'Last Name cannot be empty'
    } else {
        lastName.classList.remove('error');
        smallLast.innerHTML = ''
    }

    if (email.value.trim() === '') {
        email.classList.add('error')
        smallEmail.innerHTML = 'Email cannot be empty'
    } else if (!email.value.match(emailRegex)) {
        email.classList.add('error')
        smallEmail.innerHTML = 'Looks like this is not an email'
    } else {
        email.classList.remove('error');
        smallEmail.innerHTML = ''
    }

    if (password.value.trim() === '') {
        password.classList.add('error')
        smallPass.innerHTML = 'Password cannot be empty'
    } else {
        password.classList.remove('error');
        smallPass.innerHTML = ''
    }
}