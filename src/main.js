document.addEventListener("DOMContentLoaded", () => {
    // Set page title
    document.getElementById("page-title").textContent = data.pageTitle;

    // Set logo
    document.getElementById("logo").textContent = data.logo;

    // Populate navigation links
    const navLinks = document.getElementById("nav-links");
    data.navLinks.forEach(link => {
        const li = document.createElement("li");
        li.innerHTML = `<a href="${link.href}">${link.text}</a>`;
        navLinks.appendChild(li);
    });

    // Populate hero section
    document.getElementById("hero-title").textContent = data.hero.title;
    document.getElementById("hero-subtitle").textContent = data.hero.subtitle;
    const heroButtons = document.getElementById("hero-buttons");
    data.hero.buttons.forEach(button => {
        const a = document.createElement("a");
        a.href = button.href;
        a.textContent = button.text;
        a.className = "cta-button";
        heroButtons.appendChild(a);
    });
    const heroImages = document.getElementById("hero-images");
    data.hero.images.forEach(src => {
        const img = document.createElement("img");
        img.src = src;
        img.className = "robot";
        heroImages.appendChild(img);
    });

    // Populate about section
    document.getElementById("about-title").textContent = data.about.title;
    document.getElementById("about-text").textContent = data.about.text;
    const aboutImage = document.createElement("img");
    aboutImage.src = data.about.image;
    aboutImage.className = "hexagon-grid";
    document.getElementById("about-image").appendChild(aboutImage);

    // Populate sponsors section
    document.getElementById("sponsors-title").textContent = data.sponsors.title;
    const sponsorsGrid = document.getElementById("sponsors-grid");
    data.sponsors.items.forEach(sponsor => {
        const card = document.createElement("div");
        card.className = "sponsor-card";
        card.innerHTML = `
            <img src="${sponsor.image}" class="sponsor-image">
            <h3>${sponsor.name}</h3>
            <p>${sponsor.description}</p>
        `;
        sponsorsGrid.appendChild(card);
    });

    // Populate achievements section
    document.getElementById("achievements-title").textContent = data.achievements.title;
    const timeline = document.getElementById("timeline");
    data.achievements.timeline.forEach(item => {
        const timelineItem = document.createElement("div");
        timelineItem.className = "timeline-item";
        timelineItem.innerHTML = `
            <div class="timeline-date">${item.date}</div>
            <div class="timeline-content">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
            </div>
        `;
        timeline.appendChild(timelineItem);
    });

    // Populate gallery section
    document.getElementById("gallery-title").textContent = data.gallery.title;
    const galleryGrid = document.getElementById("gallery-grid");
    data.gallery.images.forEach(src => {
        const img = document.createElement("img");
        img.src = src;
        img.className = "gallery-item";
        galleryGrid.appendChild(img);
    });

    // Populate contact section
    document.getElementById("contact-title").textContent = data.contact.title;
    document.getElementById("contact-info").textContent = data.contact.info;

    // Populate repositories section
    document.getElementById("repos-title").textContent = data.repos.title;
    const reposGrid = document.getElementById("repos-grid");
    data.repos.items.forEach(repo => {
        const repoBlock = document.createElement("div");
        repoBlock.className = "repo-block";
        repoBlock.innerHTML = `
            <h3>${repo.name}</h3>
            <a href="${repo.link}">View on GitHub</a>
            <p>${repo.description}</p>
        `;
        reposGrid.appendChild(repoBlock);
    });

    // Populate footer
    document.getElementById("footer-logo").textContent = data.footer.logo;
    document.getElementById("footer-text").textContent = data.footer.text;
});
// Hide loader after all resources are loaded
window.onload = function() {
    const loader = document.querySelector('.loader');
    if (loader) {
        loader.classList.add('hidden');
    }
};

document.addEventListener("DOMContentLoaded", () => {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
    if (burger && navLinks) {
        burger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
});