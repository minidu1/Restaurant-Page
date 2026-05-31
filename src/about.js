export default function loadAbout() {
    const contentDiv = document.querySelector("#content")

    const about = document.createElement("div")
    about.classList.add("about")

    about.innerHTML = `
        <div class="about-hero">
            <h1>Our Story</h1>
            <p>Born in a small kitchen with big dreams — we've been serving comfort food with a twist since 2018.</p>
        </div>

        <div class="about-cards">
            <div class="about-card">
                <span class="about-icon">🍳</span>
                <h3>Fresh Daily</h3>
                <p>Every dish is prepared fresh each morning. No shortcuts, no frozen shortcuts.</p>
            </div>
            <div class="about-card">
                <span class="about-icon">🌍</span>
                <h3>Global Flavors</h3>
                <p>From ramen to sushi to burgers — we bring world cuisines to your table.</p>
            </div>
            <div class="about-card">
                <span class="about-icon">❤️</span>
                <h3>Made with Love</h3>
                <p>Family owned and operated. Every plate is personal to us.</p>
            </div>
        </div>
    `

    contentDiv.appendChild(about)
}