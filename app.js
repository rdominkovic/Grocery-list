const form = document.querySelector('#groceryForm');
const input = document.querySelector('#grocery');
const list = document.querySelector('#list');
const qty = document.querySelector('#qty');
const paragraph = document.querySelector('#para')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const addOn = input.value;
    const num = qty.value;
    const newLi = document.createElement('li');
    newLi.innerText = `${addOn} ${num}`;
    if (newLi.innerText !== '') {
        paragraph.innerText = 'To remove grocery from the list, just click on it!'
    }
    list.append(newLi)
    input.value = '';
    qty.value = '';
})

list.addEventListener('click', function (e) {
    e.target.nodeName === 'LI' && e.target.remove();
})