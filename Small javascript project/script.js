//Responsive menu
const mobileMenu = () =>{
    let menu = document.querySelector('.header ul');
    let btn = document.querySelector('.header button');

    if(btn.innerText === 'MENU'){
        menu.style.display = 'block';
        btn.innerText = 'CLOSE';
    }else{
        menu.style.display = 'none';
        btn.innerText = 'MENU';
    }
}

//Image slider
let rightBtn = document.querySelector('#right-btn');
let leftBtn = document.querySelector('#left-btn');
let pictures = document.querySelectorAll('.slider-images img');
let imgNum = 0;

rightBtn.addEventListener('click', () => {
    if(imgNum === pictures.length-1){
        pictures[imgNum].style.display = 'none';
        imgNum = 0;
        pictures[imgNum].style.display = 'block';
    }else{
        pictures[imgNum].style.display = 'none';
        imgNum ++;
        pictures[imgNum].style.display = 'block';
    }
});

leftBtn.addEventListener('click', () => {
    if(imgNum === 0){
        pictures[imgNum].style.display = 'none';
        imgNum = pictures.length-1;
        pictures[imgNum].style.display = 'block';
    }else{
        pictures[imgNum].style.display = 'none';
        imgNum --;
        pictures[imgNum].style.display = 'block';
    }
});

//Portfolio sorting
const portfolioSort = (button) =>{
    let category = button.getAttribute('data-category');
    let portfolioItems = document.querySelectorAll('.portfolio-single-item')

    portfolioItems.forEach((item) =>{
        item.style.display = 'none';
    });

    if(category === 'sve'){
        portfolioItems.forEach((item) =>{
            item.style.display = 'block';
        });
    }

    portfolioItems.forEach((item) =>{
        if(item.getAttribute('data-category').includes(category)){
            item.style.display = 'block';
        }
    });
}

//Modal button
const openModal = () => {
    let modalWindow = document.querySelector('.popup-modal');
    let modalOverlay = document.querySelector('.overlay');

    modalWindow.style.display = 'block';
    modalOverlay.style.display = 'block';

}
const closeModal = () => {
    let modalWindow = document.querySelector('.popup-modal');
    let modalOverlay = document.querySelector('.overlay');

    modalWindow.style.display = 'none';
    modalOverlay.style.display = 'none';

}