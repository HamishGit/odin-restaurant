export default function LoadAboutPage() {
    const main = document.querySelector('main')
    main.innerHTML = `
        <section class="introduction">
            <h1>More Than Just a Burger</h1>
            <p>At The Daily Bun, we believe a great burger can turn an ordinary day into something special. We're all about fresh flavours, delicious food, and creating a place where everyone feels welcome.</p>
            <p>From the first bite to the last fry, we're here to make your day a little tastier.  </p>
        </section>
        <section class="our-story">
            <h1>A Little Bun, A Lot of Love</h1>
            <p>The Daily Bun was built around one simple idea: good food brings people together. We wanted to create a burger spot that combines familiar favourites with exciting flavours, all served in a relaxed and welcoming atmosphere.</p>
            <p>Whether you're stopping by for a quick lunch, catching up with friends, or treating yourself after a long day, there's always something delicious waiting for you.</p>
        </section>
        <section class="what-we-believe">
            <h1>Our Recipe for Happiness</h1>
            <div>
                <h2>Fresh Ingredients</h2>
                <p>Great burgers start with quality ingredients and flavours that work beautifully together.</p>
            </div>
            <div>
                <h2>Made with Care</h2>
                <p>From perfectly toasted buns to delicious toppings, every detail deserves a little love.</p>
            </div>
            <div>
                <h2>Good Vibes Only</h2>
                <p>We're here for satisfying meals, good company, and the kind of moments worth coming back for.</p>
            </div>
        </section>
        <section class="our-promise">
            <h1>You Bring the Appetite. We've Got the Buns.</h1>
            <p>We want every visit to feel easy, enjoyable, and delicious. No fuss, no complicated rules — just good burgers, tasty sides, and a friendly place to enjoy them.</p>
            <p>Because life's too short for boring burgers.</p>
        </section>
        <section class="call-to-action">
            <h1>Hungry Yet?</h1>
            <p>Your next favourite burger is waiting for you.</p>
            <p><strong>Good things come between two buns.</strong></p>
        </section>
    `;

    if (main.classList.contains('menu')) {
        main.classList.remove('menu');
    }
    main.classList.add('about');
}