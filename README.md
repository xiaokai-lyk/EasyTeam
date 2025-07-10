# EasyTeam, a easy-to-use template for team introduction.

## Features

- All content is managed via `src/data.js` for easy updates.
- The site is fully responsive and includes animated transitions.
- If an image is missing, `assets/error.jpg` will be shown as a fallback.
- Licensed under the Apache License 2.0 (see `LICENSE`).

---

## To-do List

- [ ] i18n
- [X] Scrolling animations

---

## Project Structure

```
EasyTeam/
│
├── public/
│   ├── index.html
│   ├── style.css
│   └── assets/
│       └── error.jpg
├── src/
│   ├── data.js
│   └── main.js
├── LICENSE
└── README.md
```

### 1. `public/index.html`

This is the main HTML file that loads the CSS and JavaScript files and provides the structure for the webpage. Most content is dynamically injected via JavaScript. You may not need to modify it unless you want to add advanced features and you know the function of your code exactly.

Key points:

- Loads styles from `style.css`.
- Loads data and logic from `../src/data.js` and `../src/main.js`.
- Contains placeholder elements with IDs for dynamic content.

### 2. `public/style.css`

This file contains all the styles for the webpage, including layout, colors, animations, and responsive design. It styles navigation, hero, about, sponsors, achievements, gallery, contact, repositories, and footer sections.

### 3. `src/data.js`

This JavaScript file contains a `data` object with all the content for the site, including navigation links, hero section, about info, sponsors, achievements, gallery images, contact info, repositories, and footer text.

Example:

```js
const data = {
    pageTitle: "Page Title",
    logo: "Logo",
    navLinks: [
        { text: "Home", href: "#home" },
        // ...
    ],
    hero: {
        title: "Hero Title",
        subtitle: "Hero Subtitle",
        buttons: [
            { text: "Button 1", href: "#" }
        ],
        images: [
            "image1.jpg",
            "image2.jpg"
        ]
    },
    // ... more sections ...
};
```

### 4. `src/main.js`

This JavaScript file dynamically populates the HTML page using the `data` object. It:

- Sets the page title and logo.
- Populates navigation, hero, about, sponsors, achievements, gallery, contact, repositories, and footer sections.
- Handles image loading errors (shows `assets/error.jpg` if an image fails to load).
- Adds scroll and intersection animations.
- Handles mobile navigation toggling.

### 5. `public/assets/error.jpg`

A fallback image used when any image fails to load.

---

## How to Run

1. Place your images (e.g., `image1.jpg`, `about-image.jpg`, etc.) in the `public/assets/` folder or update the paths in `data.js` to match your assets.
2. Open `public/index.html` in a web browser to see the project in action.

---

## Contribution Guide

We welcome contributions! To contribute:

1. Fork this repository if you find any bugs or have ideas (you may check issues of this repo or the [To-do List](#to-do-list) section).
2. Create a new branch for your feature or bugfix.
3. Make your changes in the appropriate files (`src/data.js`, `src/main.js`, `public/style.css`, etc.).
4. Ensure your code is clean and well-documented.
5. Submit a pull request with a clear description of your changes.

**Tips:**

- Keep all content and configuration in `src/data.js` for easy updates.
- Test your changes by opening `public/index.html` in your browser.
- If you add new images, place them in `public/assets/` and update the paths in `data.js`.

---

## License

This project is licensed under the [Apache License 2.0](LICENSE).
