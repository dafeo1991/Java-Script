
const elem31 = document.querySelector('.form-control1');
const elem32 = document.querySelector('.form-control2');
const elem33 = document.querySelector('.form-control3');
const button3 = document.querySelector('.form__auth-btn');
const form = document.querySelector('form');

form.addEventListener('click', function (e) {
    if (!elem31.value || !elem32.value || !elem33.value ) {
        elem31.style.backgroundColor = 'yellow';
        elem32.style.backgroundColor = 'yellow';
        elem33.style.backgroundColor = 'yellow';
        e.preventDefault();
    }
     else  {
        elem31.style.backgroundColor = '';
        elem32.style.backgroundColor = '';
        elem33.style.backgroundColor = '';
    }
   
    if (document.getElementById('password1').value == document.getElementById('password2').value && elem32.value&& elem31.value) {
        elem31.style.backgroundColor = 'green';
        elem32.style.backgroundColor = 'green';
    }
    else if (!document.getElementById('password1').value == !document.getElementById('password2').value && elem32.value && elem31.value) {
        elem31.style.backgroundColor = 'red';
        elem32.style.backgroundColor = 'red';
        e.preventDefault();
    }
});


