//const ul = document.querySelector('.items');

//ul.remove();
//ul.firstElementChild.textContent = 'hello'
//ul.children[1].innerText = 'Igor'
//ul.lastElementChild.innerHTML = '<h1>YO</h1>'

//const btn = document.querySelector('.btn');



//btn.addEventListener('click', (e) => {
//    e.preventDefault();
//    btn.style.background = 'green'
//    console.log(e, target.id);
//});


const myForm = document.querySelector('#my-form');
const nameI = document.querySelector('#name');
const email = document.querySelector('#email');
const msg = document.querySelector('.msg');
const btn = document.querySelector('btn');
const li = document.querySelector('.items');
const userList = document.querySelector('#users')

li.remove()



myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();
    if (nameI.value === '' || email.value === '') {
        msg.classList.add('error')
        msg.innerHTML = 'Please Fill The Values';
        setTimeout(() => msg.remove(), 3000);
    } else {
        console.log(nameI.value);
        const ul = document.createElement('li');
        ul.appendChild(document.createTextNode(`${nameI.value}: ${email.value}`));
        userList.appendChild(ul);
    }
}