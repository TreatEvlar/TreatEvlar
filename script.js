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

function navOpen(){
    const navBtn = document.querySelector('.navbar-container ul');
    navBtn.classList.add('active')
}

function navClose(){
    const navBtn = document.querySelector('.navbar-container ul');
    navBtn.classList.remove('active')
}

// Search-box Close

function searchBox(){
    const searchBtn = document.querySelector('.search-box');
    searchBtn.classList.toggle('active')
}

// Seller Cards

const cards = [
    {img:'./images/6620082ddab1d0258069c8e3-blender-portable-blender-with-usb.jpg', heading:'Blender A24', para:'Premiun type c with Charger'},
    {img:'./images/6620082ddab1d0258069c8e3-blender-portable-blender-with-usb.jpg', heading:'Blender B29', para:'Premiun type c with Charger'},
    {img:'./images/6620082ddab1d0258069c8e3-blender-portable-blender-with-usb.jpg', heading:'Blender C32', para:'Premiun type c with Charger'},
    {img:'./images/6620082ddab1d0258069c8e3-blender-portable-blender-with-usb.jpg', heading:'Blender D18', para:'Premiun type c with Charger'},
    {img:'./images/6620082ddab1d0258069c8e3-blender-portable-blender-with-usb.jpg', heading:'Blender E04', para:'Premiun type c with Charger'},
    {img:'./images/6620082ddab1d0258069c8e3-blender-portable-blender-with-usb.jpg', heading:'Blender A19', para:'Premiun type c with Charger'},
    {img:'./images/6620082ddab1d0258069c8e3-blender-portable-blender-with-usb.jpg', heading:'Blender B44', para:'Premiun type c with Charger'},
    {img:'./images/6620082ddab1d0258069c8e3-blender-portable-blender-with-usb.jpg', heading:'Blender C57', para:'Premiun type c with Charger'},
    {img:'./images/6620082ddab1d0258069c8e3-blender-portable-blender-with-usb.jpg', heading:'Blender D31', para:'Premiun type c with Charger'},
    {img:'./images/6620082ddab1d0258069c8e3-blender-portable-blender-with-usb.jpg', heading:'Blender E42', para:'Premiun type c with Charger'},
    {img:'./images/6620082ddab1d0258069c8e3-blender-portable-blender-with-usb.jpg', heading:'Blender A10', para:'Premiun type c with Charger'},
    {img:'./images/6620082ddab1d0258069c8e3-blender-portable-blender-with-usb.jpg', heading:'Blender E08', para:'Premiun type c with Charger'}
]

document.getElementById('seller-container').innerHTML = cards.map(ing => `
    <div class="child">
         <img src=${ing.img} alt="">
         <h2>${ing.heading}</h2>
         <p>${ing.para}</p>
         <button>Shop Now</button>
    </div>
    `).join('')