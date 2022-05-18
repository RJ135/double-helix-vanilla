// * Slider Review
const items = document.querySelectorAll('.review__card');
const nbSlide = items.length;
const suivant = document.querySelector('.review__button--right');
const precedent = document.querySelector('.review__button--left');
const number = document.querySelector('.number');
let count = 0;

function slideSuivante(){
    console.log('button next');
    items[count].classList.remove('currentCard');

    if(count < nbSlide - 1){
        count++;
    } else {
        count = 0;
    }

    items[count].classList.add('currentCard')
}
suivant.addEventListener('click', slideSuivante)


function slidePrecedente(){
    console.log('button previous');
    items[count].classList.remove('currentCard');

    if(count > 0){
        count--;
    } else {
        count = nbSlide - 1;
    }

    items[count].classList.add('currentCard')
}
precedent.addEventListener('click', slidePrecedente)

function keyPress(e){
    console.log(e);
    
    if(e.keyCode === 37){
        slidePrecedente();
    } else if(e.keyCode === 39){
        slideSuivante();
    }
}
document.addEventListener('keydown', keyPress)
