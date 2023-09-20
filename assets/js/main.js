(function() {
    'use strict';


/* ====Sticky Navbar Start==== */
    $(function(){
        var myNav = $('.navbar');
        $(window).scroll(function(){
            if($(window).scrollTop() <= 50){ myNav.removeClass('sticky-nav'); }else{ myNav.addClass('sticky-nav'); } }) })
    /*====Sticky Navbar End====*/ /*====Mobile Navigation Start====*/ // Get all the navigation links with dropdown
    const dropdownLinks=document.querySelectorAll('.mobile-navigation-menu li.dropdown> a');

    // Add click event listeners to the links
    dropdownLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const parentListItem = this.parentElement;
            const dropdown = parentListItem.querySelector('ul.dropdown-menu');


    // Toggle the dropdown visibility
            dropdown.style.display = (dropdown.style.display === 'block') ? 'none' : 'block';


    // Toggle the plus/minus icon
            parentListItem.classList.toggle('open');
        });
    });
    /* ====Mobile Navigation End==== */

    /* ====Quantity Cart Start==== */
    const decreaseButtons = document.querySelectorAll('.decrease-btn');
    const increaseButtons = document.querySelectorAll('.increase-btn');
    const quantityInputs = document.querySelectorAll('.quantity-input');
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');

    function updateQuantityDisplay(inputElement, newQuantity) {
        inputElement.value = newQuantity;
    }

    function handleDecreaseClick(event) {
        const quantityInput = event.target.closest('.add-to-cart-area').querySelector('.quantity-input');
        let quantity = parseInt(quantityInput.value);
        if (quantity > 1) {
            quantity--;
            updateQuantityDisplay(quantityInput, quantity);
        }
    }

    function handleIncreaseClick(event) {
        const quantityInput = event.target.closest('.add-to-cart-area').querySelector('.quantity-input');
        let quantity = parseInt(quantityInput.value);
        quantity++;
        updateQuantityDisplay(quantityInput, quantity);
    }

    // Attach event listeners to all decrease buttons
    decreaseButtons.forEach(button => {
        button.addEventListener('click', handleDecreaseClick);
    });

    // Attach event listeners to all increase buttons
    increaseButtons.forEach(button => {
        button.addEventListener('click', handleIncreaseClick);
    });

    quantityInputs.forEach(input => {
        input.addEventListener('change', () => {
            const inputQuantity = parseInt(input.value);
            if (!isNaN(inputQuantity) && inputQuantity >= 1) {
    // Update the quantity for the specific input element
                updateQuantityDisplay(input, inputQuantity);
            } else {
    // If input is invalid, revert back to the previous value
                updateQuantityDisplay(input, 1);
            }
        });
    });

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const quantityInput = button.closest('.add-to-cart-area').querySelector('.quantity-input');
            const quantity = parseInt(quantityInput.value);
    // Replace this with your actual cart logic
            alert(`Added ${quantity} item(s) to the cart.`);
        });
    });

    // Initialize quantity display on page load
    quantityInputs.forEach(input => {
        updateQuantityDisplay(input, 1);
    });
    /* ====Quantity Cart End==== */

    /* ====Count-down Start==== */
    document.addEventListener("DOMContentLoaded", function () {
        const discountEnd = new Date("2023-08-31T23:59:59").getTime();

        function updateTimer() {
            const now = new Date().getTime();
            const timeRemaining = discountEnd - now;

            const days = Math.floor(timeRemaining / (100 * 60 * 60 * 24));
            const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

            document.getElementById("days").innerText = formatTime(days);
            document.getElementById("hours").innerText = formatTime(hours);
            document.getElementById("minutes").innerText = formatTime(minutes);
            document.getElementById("seconds").innerText = formatTime(seconds);

            if (timeRemaining < 0) { document.getElementById("days").innerText="00" ;
            document.getElementById("hours").innerText="00" ; document.getElementById("minutes").innerText="00" ;
            document.getElementById("seconds").innerText="00" ; } } function formatTime(time) { return time < 10 ?
            `0${time}` : time; } updateTimer(); setInterval(updateTimer, 1000); }); 
         /*====Count-down End====*/ 

        /* ====Product Quicview Mini==== */
    $('#product-quickView-mini, #product-quickView-mini2').slick({
        dots: true,
        arrows: true,
        infinite: true,
        speed: 1000,
        adaptiveHeight: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        autoplayHoverPause: true,
        responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: true,
                autoplay: false
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: true,
                autoplay: false
            }
        }
        ]
    });
        /* ====Product Quicview Mini==== */

        /* ====Student Review Section Start==== */
    $('#hot-deal-discountProduct').owlCarousel({
        loop:true,
        nav:true,
        autoplay:true,
        autoplayHoverPause: true,
        mouseDrag: true,
        margin: 30,
        items:3,
        dots: false,
        smartSpeed:1000,
        responsive:{
            0:{
                items:1
            },
            480:{
                items:1,
                nav:false
            },
            768:{
                items:1
            }
        }
    })

        /* ====Student Review Section End==== */

        /* ====Testimonail Start==== */
    $('#testimonial-slider').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 1000,
        adaptiveHeight: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        autoplayHoverPause: true,
        responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                autoplay: false
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                autoplay: false
            }
        }
        ]
    });
        /* ====Testimonail End==== */

        /*====Button (Scrolling Bottom to Top) Start====*/ 
    var mybtn=document.getElementById('scroll-bottom-top');
    window.onscroll=function() { scrollFunction(); }; function scrollFunction() { if ( document.body.scrollTop> 50
        ||
        document.documentElement.scrollTop > 50
        ) {
        mybtn.style.opacity = '1';
    }
    else {
        mybtn.style.opacity = '0';
    }
}
mybtn.addEventListener('click', topFunction);

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
        /* ====Button (Scrolling Bottom to Top) End==== */














})()