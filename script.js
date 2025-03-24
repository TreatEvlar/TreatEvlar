// Countdown Timer

function startCountdown(duration) {
    const countdownElement = document.getElementById("countdown");
    let endTime = Date.now() + duration * 1000;

    function updateCountdown() {
        let now = Date.now();
        let timeLeft = endTime - now;

        if (timeLeft <= 0) {
            countdownElement.textContent = "Time's up!";
            clearInterval(interval);
            return;
        }

        let hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
        let minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
        let seconds = Math.floor((timeLeft / 1000) % 60);

        countdownElement.textContent = 
            `${hours.toString().padStart(2, '0')}:` +
            `${minutes.toString().padStart(2, '0')}:` +
            `${seconds.toString().padStart(2, '0')}`;
    }

    updateCountdown();
    let interval = setInterval(updateCountdown, 1000);
}

startCountdown(24 * 60 * 60);

// Phone Navbar

function navOpen() {
    const navBtn = document.querySelector('.navbar-container ul');
    navBtn.classList.add('active');
    document.body.classList.add('no-scroll'); // Prevent scrolling
}

function navClose() {
    const navBtn = document.querySelector('.navbar-container ul');
    navBtn.classList.remove('active');
    document.body.classList.remove('no-scroll'); // Allow scrolling again
}

// Close the navbar when clicking on any nav link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', navClose);
});

// Close the navbar when clicking outside of the nav
document.addEventListener('click', (event) => {
    const navBtn = document.querySelector('.navbar-container ul');
    const navContainer = document.querySelector('.navbar-container');

    // Check if the click is outside the navContainer
    if (!navContainer.contains(event.target)) {
        navClose();
    }
});



// Search-box Close

function searchBox(){
    const searchBtn = document.querySelector('.search-box');
    searchBtn.classList.toggle('active')
}

// Seller Cards

const cards = [
    {img:'./images/6620082ddab1d0258069c8e3-blender-portable-blender-with-usb.jpg', heading:'Blender A24', price:'$15.00', para:'Premiun type c with Charger'},
    {img:'./images/6620082ddab1d0258069c8e3-blender-portable-blender-with-usb.jpg', heading:'Blender B29', price:'$15.00', para:'Premiun type c with Charger'},
    {img:'./images/6620082ddab1d0258069c8e3-blender-portable-blender-with-usb.jpg', heading:'Blender C32', price:'$15.00', para:'Premiun type c with Charger'},
    {img:'./images/6620082ddab1d0258069c8e3-blender-portable-blender-with-usb.jpg', heading:'Blender D18', price:'$15.00', para:'Premiun type c with Charger'},
    {img:'./images/6620082ddab1d0258069c8e3-blender-portable-blender-with-usb.jpg', heading:'Blender E04', price:'$15.00', para:'Premiun type c with Charger'},
    {img:'./images/6620082ddab1d0258069c8e3-blender-portable-blender-with-usb.jpg', heading:'Blender A19', price:'$15.00', para:'Premiun type c with Charger'},
    {img:'./images/6620082ddab1d0258069c8e3-blender-portable-blender-with-usb.jpg', heading:'Blender B44', price:'$15.00', para:'Premiun type c with Charger'},
    {img:'./images/6620082ddab1d0258069c8e3-blender-portable-blender-with-usb.jpg', heading:'Blender C57', price:'$15.00', para:'Premiun type c with Charger'},
    {img:'./images/6620082ddab1d0258069c8e3-blender-portable-blender-with-usb.jpg', heading:'Blender D31', price:'$15.00', para:'Premiun type c with Charger'},
    {img:'./images/6620082ddab1d0258069c8e3-blender-portable-blender-with-usb.jpg', heading:'Blender E42', price:'$15.00', para:'Premiun type c with Charger'},
    {img:'./images/6620082ddab1d0258069c8e3-blender-portable-blender-with-usb.jpg', heading:'Blender A10', price:'$15.00', para:'Premiun type c with Charger'},
    {img:'./images/6620082ddab1d0258069c8e3-blender-portable-blender-with-usb.jpg', heading:'Blender E08', price:'$15.00', para:'Premiun type c with Charger'}
]

document.getElementById('seller-container').innerHTML = cards.map(ing => `
    <div class="child">
         <img src=${ing.img} alt="">
         <h2>${ing.heading}</h2>
         <h3>${ing.price}</h3>
         <p>${ing.para}</p>
         <button>Shop Now</button>
    </div>
    `).join('')



// Review section

const Review_cards = [
    {img:'./images/6620082ddab1d0258069c8e3-blender-portable-blender-with-usb.jpg', heading:'Blender A24', price:'$15.00', para:'Premiun type c with Charger'},
    {img:'./images/6620082ddab1d0258069c8e3-blender-portable-blender-with-usb.jpg', heading:'Blender B29', price:'$15.00', para:'Premiun type c with Charger'},
    {img:'./images/6620082ddab1d0258069c8e3-blender-portable-blender-with-usb.jpg', heading:'Blender C32', price:'$15.00', para:'Premiun type c with Charger'},
    {img:'./images/6620082ddab1d0258069c8e3-blender-portable-blender-with-usb.jpg', heading:'Blender D18', price:'$15.00', para:'Premiun type c with Charger'}
]

document.getElementById('review_box').innerHTML = Review_cards.map(ing => `

    <div class="review_card">

        <div class="review_profile">
            <img src=${ing.img}>
        </div>

        <div class="review_text">
            <h2 class="name">${ing.heading}</h2>

            <div class="review_icon">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star-half-stroke"></i>
            </div>

            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit aliquid ullam voluptatem nemo obcaecati dicta id labore natus qui tempore excepturi, eaque omnis odit, perferendis ad saepe deserunt! Voluptatibus, maiores. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>

            <p2>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit aliquid ullam voluptatem nemo obcaecati dicta id labore natus qui tempore excepturi
            </p2>

        </div>
    </div>
    `).join('')