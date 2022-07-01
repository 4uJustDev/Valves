const burger = document.querySelector('.burger')
const menu = document.querySelector('.menu')

/*-------------=---------------*/
burger.addEventListener('click', (e)=>{
    burger.toggleAttribute('active');
    menu.toggleAttribute('active');
});