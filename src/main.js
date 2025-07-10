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
        img.onerror = () => handleImageError(img);
        heroImages.appendChild(img);
    });
    

    // Populate about section
    document.getElementById("about-title").textContent = data.about.title;
    document.getElementById("about-text").innerHTML = data.about.text;
    const aboutImage = document.createElement("img");
    aboutImage.src = data.about.image;
    aboutImage.className = "hexagon-grid";
    aboutImage.onerror = () => handleImageError(aboutImage);
    document.getElementById("about-image").appendChild(aboutImage);


    // Populate sponsors section
    document.getElementById("sponsors-title").textContent = data.sponsors.title;
    const sponsorsGrid = document.getElementById("sponsors-grid");
    data.sponsors.items.forEach(sponsor => {
        const card = document.createElement("div");
        card.className = "sponsor-card";
        
        const img = document.createElement("img");
        img.src = sponsor.image;
        img.className = "sponsor-image";
        img.onerror = () => handleImageError(img);
        
        card.innerHTML = `
            <h3>${sponsor.name}</h3>
            <p>${sponsor.description}</p>
        `;
        card.prepend(img); // 将图片插入到卡片开头
        sponsorsGrid.appendChild(card);
    });

    document.querySelectorAll('.sponsor-card').forEach(card => {
        card.style.animation = 'fadeUp 0.8s forwards';
    });
    

    // Populate achievements section
    document.getElementById("achievements-title").textContent = data.achievements.title;
    const timeline = document.getElementById("timeline");
    data.achievements.timeline.forEach((item, index) => {
        const timelineItem = document.createElement("div");
        timelineItem.className = "timeline-item";
        timelineItem.style.setProperty("--index", index);
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
        img.onerror = () => handleImageError(img);
        galleryGrid.appendChild(img);
    });
    

    // Populate contact section
    document.getElementById("contact-title").textContent = data.contact.title;
    document.getElementById("contact-info").innerHTML = data.contact.info; // changed

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
    document.getElementById("footer-logo").innerHTML = data.footer.logo;
    document.getElementById("footer-text").innerHTML = data.footer.text 
                            + "\r\n using template EasyTeam; &copy Yunkai Li. All rights reserved."
                            + "\r\n Shared with Apache License Version 2.0.";
    // Hide loader after content is loaded
    const loader = document.querySelector('.loader');
    if (loader) {
        loader.classList.add('hidden');
    }

    const burger = document.querySelector('.burger');
    if (burger && navLinks) {
        burger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // 滚动动画
    const animateElements = () => {
      const elements = document.querySelectorAll(
          '.section-title, .about-text, .about-image, .sponsor-card, .timeline-item, .gallery-item, .contact-info'
      );

      const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  entry.target.classList.add('animate');
              } else {
                  entry.target.classList.remove('animate');
              }
          });
      }, { threshold: 0.1 });

      elements.forEach(element => observer.observe(element));
  };

  animateElements();

  const animateOnScroll = function() {
      const elements = document.querySelectorAll('.section-title, .about-text, .about-image, .member-card, .timeline-item, .gallery-item, .contact-info, .contact-form');
      
      elements.forEach(element => {
          const elementPosition = element.getBoundingClientRect().top;
          const screenPosition = window.innerHeight / 1.3;
          
          if (elementPosition < screenPosition) {
              element.classList.add('animate');
          }
      });
  };
  
  // 初始化滚动动画
  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll(); // 初始检查    
  });


// Public functions
function handleImageError(imgElement, fallbackPath = 'assets/error.jpg') {
    imgElement.onerror = null; // 防止无限循环
    imgElement.src = fallbackPath;
}
