/* CAROSELE SLIDER */

const track = document.querySelectorAll('.slider');


for (let i = 0; i < track.length; i++) {

    const prevBtn = track[i].children[0];
    const slide = track[i].children[1];
    const nextBtn = track[i].children[2];
    const slide_item = Array.from(slide.children);

    const slideWidth = slide_item[0].getBoundingClientRect().width + 20;


    function check() {
        const currentSlide = slide.querySelector('.active');
        const slideIndex = slide_item.findIndex(slide_item => slide_item === currentSlide);

        if (document.documentElement.clientWidth <= 985) {
           //remove btns if carousele is shorter than 3
           if (slide_item.length <= 4) {
               prevBtn.classList.add('hidden');
               nextBtn.classList.add('hidden');
           }
           //remove prev btn if carousele shows first slide
           else if (slideIndex === 0) {
               prevBtn.classList.add('hidden');
               nextBtn.classList.remove('hidden');
           }
           //remove next btn if carousele lenght is reached
           else if (slideIndex === slide_item.length - 3) {
               nextBtn.classList.add('hidden');
               prevBtn.classList.remove('hidden');
           }
           //show all btns
           else {
               prevBtn.classList.remove('hidden');
               nextBtn.classList.remove('hidden');
           };
       } else {
           //remove btns if carousele is shorter than 3
           if (slide_item.length <= 4) {
               prevBtn.classList.add('hidden');
               nextBtn.classList.add('hidden');
           }
           //remove prev btn if carousele shows first slide
           else if (slideIndex === 0) {
               prevBtn.classList.add('hidden');
               nextBtn.classList.remove('hidden');
           }
           //remove next btn if carousele lenght is reached
           else if (slideIndex === slide_item.length - 4) {
               nextBtn.classList.add('hidden');
               prevBtn.classList.remove('hidden');
           }
           //show all btns
           else {
               prevBtn.classList.remove('hidden');
               nextBtn.classList.remove('hidden');
           };
       }
    }

    check();

    nextBtn.addEventListener('click', e => {
        const currentSlide = slide.querySelector('.active');
        const nextSlide = currentSlide.nextElementSibling;
        const amountToMove = slide_item.indexOf(currentSlide) * slideWidth + slideWidth + 'px';

        slide.style.transform = 'translateX(-' + amountToMove + ')';
        currentSlide.classList.remove('active');
        nextSlide.classList.add('active');
        check();
    });

    prevBtn.addEventListener('click', e => {
        const currentSlide = slide.querySelector('.active');
        const prevSlide = currentSlide.previousElementSibling;
        const amountToMoveBack = slide_item.indexOf(currentSlide) * slideWidth - slideWidth + 'px';

        slide.style.transform = `translateX(-${amountToMoveBack})`;
        currentSlide.classList.remove('active');
        prevSlide.classList.add('active');
        check();
    });

}


/* REACTIVE FOOTER */

const footer_info = document.querySelectorAll('.footer_info');
const footer_heading = document.querySelectorAll('.heading');
const reveal_footer = document.querySelectorAll('.reveal_footer');
const list = document.querySelectorAll('.list');

//iterate footer headings and toggle their lists

for (let i = 0; i < footer_info.length; i++) {

    footer_heading[i].addEventListener('click', e=> {
        list[i].classList.toggle('list_hidden');
        reveal_footer[i].classList.toggle('rotate');
    });
}


/* HAMBURGER MENU */

//menu appearing after clicking hamburger + overlay while menu is active

const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.navigation');
const overlay_here = document.querySelector('.overlay_here');
const lock_scroll = document.querySelector('body')


const handleClick = () => {
    hamburger.classList.toggle('hamburger--active');
    nav.classList.toggle('navigation--active');
    nav_second.classList.remove('second--active');
    overlay_here.classList.toggle('overlay--active');
    lock_scroll.classList.toggle('lock');
}

hamburger.addEventListener('click', handleClick);

//menu opening/closing sublist

const menu_toggle = document.querySelectorAll('.menu_toggle');
const nav_second = document.querySelector('.second');

const handleSecondClick = () => {
    nav_second.classList.toggle('second--active');
}

for (let i = 0; i < menu_toggle.length; i++) {
    menu_toggle[i].addEventListener('click', handleSecondClick);
}


/* STARS VALUE */

const selected_star_amount = document.querySelectorAll('.selected_star_amount');
const active_star_amount = document.querySelector('.selected_star_amount--active');
const stars_selected_25 = document.getElementById('25');
const stars_selected_50 = document.getElementById('50');
const stars_selected_150 = document.getElementById('150');
const stars_selected_200 = document.getElementById('200');
const stars_selected_400 = document.getElementById('400');

const content_window = document.querySelector('.content_window');
const stars_img = document.getElementById('stars_img');
const stars_h3 = document.getElementById('stars_h3');
const stars_p = document.getElementById('stars_p');

for (let i = 0; i < selected_star_amount.length; i++) {

    selected_star_amount[i].addEventListener('click', e => {
        selected_star_amount.forEach(el => el.classList.remove('selected_star_amount--active'));
        selected_star_amount[i].classList.toggle('selected_star_amount--active');

            if (selected_star_amount[i] === selected_star_amount[0]) {
                stars_img.src = 'img/Rewards/025.png';
                stars_h3.innerHTML = 'Customize your drink';
                stars_p.innerHTML = 'Make your drink just right with an extra espresso shot, dairy substitute or a dash of your favorite syrup.';
            } else if (selected_star_amount[i] === selected_star_amount[1]) {
                stars_img.src = 'img/Rewards/050.png';
                stars_h3.innerHTML = 'Brewed hot coffee, bakery item or hot tea';
                stars_p.innerHTML = 'Pair coffee cake or an almond croissant with your fresh cup of hot brew.';
            } else if (selected_star_amount[i] === selected_star_amount[2]) {
                stars_img.src = 'img/Rewards/150.png';
                stars_h3.innerHTML = 'Handcrafted drink, hot breakfast or parfait';
                stars_p.innerHTML = 'Have a really good morning with a breakfast sandwich, oatmeal or your favorite drink.';
            } else if (selected_star_amount[i] === selected_star_amount[3]) {
                stars_img.src = 'img/Rewards/200.png';
                stars_h3.innerHTML = 'Salad, sandwich or protein box';
                stars_p.innerHTML = 'Nourish your day with a hearty Chipotle Chicken Wrap or Eggs & Cheese Protein Box.';
            } else if (selected_star_amount[i] === selected_star_amount[4]) {
                stars_img.src = 'img/Rewards/400.png';
                stars_h3.innerHTML = 'Select merchandise or at-home coffee';
                stars_p.innerHTML = 'Take home a signature cup, a bag of coffee or your choice of select coffee accessories.';
            }
    });
}


