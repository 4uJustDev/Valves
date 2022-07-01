const create = document.getElementById('btnCreate');
const container = document.querySelectorAll('.container');
const body = document.querySelector("body");
const modalWindow = document.querySelector('.modalWindow');
const modal = document.querySelector('.modal');

modalWindow.addEventListener('click',(e)=>{
    modalWindow.style.display = 'none';
    e.stopPropagation();
})
modal.addEventListener('click', (e)=>{
    e.stopPropagation();
})
create.addEventListener('click',(e)=>{
    modalWindow.style.display = 'flex'
});
