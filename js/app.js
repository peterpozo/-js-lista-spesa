spesa = [
    'pane',
    'acqua',
    'pesce',
    'verdure',
    'carne',
];

const listSpesa = document.querySelector('.lista-spesa')
const btnList = document.querySelector('#button')

let i = 0

btnList.addEventListener('click', function(){
    
    while (i <= 4) {
        listSpesa.innerHTML += `<li>${spesa[i]}</li>`;
        i++;
    }
})