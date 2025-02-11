//J'ai essayé de faire le menu burger et un carousel pour mes projets mais ça n'a pas marché malheureusement

// document.addEventListener('DOMContentLoaded', function () {
//     const carouselItems = document.querySelectorAll('.carousel-item');
//     const prevButton = document.querySelector('.carousel-control.prev');
//     const nextButton = document.querySelector('.carousel-control.next');
//     let currentIndex = 0;

//     function showCarouselItem(index) {
//         carouselItems.forEach((item, i) => {
//             item.classList.toggle('active', i === index);
//         });
//     }

//     prevButton.addEventListener('click', function () {
//         currentIndex = (currentIndex > 0) ? currentIndex - 1 : carouselItems.length - 1;
//         showCarouselItem(currentIndex); 
//     });

//     nextButton.addEventListener('click', function () {
//         currentIndex = (currentIndex < carouselItems.length - 1) ? currentIndex + 1 : 0;
//         showCarouselItem(currentIndex);
//     }); ~~

//     showCarouselItem(currentIndex);
// });