import cheeseburger from './classic-cheeseburger.jpg';
import frenchfries from './french-fries.jpg';
import bbqburger from './bbq-burger.jpg';
import oreomilkshake from './oreo-milkshake.jpg';

export default function LoadMenuPage() {
    const main = document.querySelector('main');

    main.innerHTML = `
        <section id="burgers">
        <h1>Burgers</h1>
        <div class="food-item">
            <h2>Classic Cheeseburger</h2>
            <div class="food-image-container"><img src="${cheeseburger}"></div>
            <p class="food-item-description">This classic cheeseburger will delight you with its delicious cheesy flavour!</p>
        </div>
        <div class="food-item">
            <h2>BBQ Burger</h2>
            <div class="food-image-container"><img src="${bbqburger}"></div>
            <p class="food-item-description">This bbq burger is delicious! Our homemade smoky barbeque sauce will knock your socks off!</p>
        </div>
        </section>
        <section id="sides">
        <h1>Sides</h1>
        <div class="food-item">
            <h2>French Fries</h2>
            <div class="food-image-container"><img src="${frenchfries}"></div>
            <p class="food-item-description">Our French Fries are the best in the world. Crispy, crunchy, and aboslutely delicious!</p>
        </div>
        </section>
        <section id="drinks">
        <h1>Drinks</h1>
        <div class="food-item">
            <h2>Oreo Milkshake</h2>
            <div class="food-image-container"><img src="${oreomilkshake}"></div>
            <p class="food-item-description">Nothing beats a nice cold Oreo<sup>TM</sup> Milkshake on a hot day! This is chocolately and will always hit the spot!</p>
        </div>
        </section>
    `;

    main.classList.add('menu');
    if (main.classList.contains('about')) {
        main.classList.remove('about');
    }
}