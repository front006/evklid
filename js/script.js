const swiper = new Swiper('.swiper-container', {
    autoplay: {
        delay: 4000,
        loop: true
    },
 
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    
   // area-label
    a11y: {
      paginationBulletMessage: 'Тут название слайда {{index}}',
    }
  });

/* tabs */

document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.work__btn').forEach(function (e) {
        e.addEventListener('click', function (e) {
            const tab = e.currentTarget.dataset.path;
            document.querySelectorAll('.tab-content').forEach(function (e) {
                e.classList.remove('tab-content--active')
                document.querySelector(`[data-target='${tab}']`).classList.add('tab-content--active');
            });
        });

        e.addEventListener('click', function (e) {
            const tabDefault = e.currentTarget.dataset.default;
            document.querySelectorAll('.work__btn').forEach(function (e) {
                e.classList.remove('work__btn--default')
                document.querySelector(`[data-path='${tabDefault}']`).classList.add('work__btn--default');
            })
        })
    });
});

/* accordion */

$( function() {
    $( "#accordion" ).accordion({
        collapsible: true,
        active: false,
    });
  } );

/* burger */

const burgerBtn = document.querySelector('.burger');
const menuClose = document.querySelector('.menu-close');
const menuBurger = document.querySelector('.nav');

burgerBtn.addEventListener('click', () => {
    menuBurger.classList.add('burger-active');
});

menuClose.addEventListener('click', () => {
    menuBurger.classList.remove('burger-active');
});

document.addEventListener('DOMContentLoaded', (e) => {
    document.getElementById('open-search-form').addEventListener('click',
    (e) => {
        document.getElementById('search-form').classList.add('search-form_show')
    })

    document.getElementById('search-form-close').addEventListener('click',
    (e) => {
        document.getElementById('search-form').classList.remove('search-form_show')
    })

    document.getElementById('search-form').addEventListener('submit' ,(e) => {
        e.preventDefault()
    })
})

