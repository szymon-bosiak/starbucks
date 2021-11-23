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

        console.log(slide_item.length);

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