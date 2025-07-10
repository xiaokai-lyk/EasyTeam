### Project Structure

```
/my-web-project
│
├── index.html
├── style.css
├── script.js
└── data.json
```

### 1. `index.html`

This is the main HTML file that will load the CSS and JavaScript files and provide a basic structure for the webpage.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Web Project</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <h1>My Web Project</h1>
    </header>
    <main id="content">
        <!-- Dynamic content will be injected here -->
    </main>
    <footer>
        <p>&copy; 2025 My Web Project. All rights reserved.</p>
    </footer>
    <script src="script.js"></script>
</body>
</html>
```

### 2. `style.css`

This file contains the styles for the webpage. You can customize it as needed.

```css
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
}

header {
    background: #35424a;
    color: #ffffff;
    padding: 10px 0;
    text-align: center;
}

main {
    padding: 20px;
}

footer {
    text-align: center;
    padding: 10px 0;
    background: #35424a;
    color: #ffffff;
    position: relative;
    bottom: 0;
    width: 100%;
}
```

### 3. `script.js`

This JavaScript file will fetch the data from the `data.json` file and dynamically generate the content in the main section of the webpage.

```javascript
// Fetch data from the JSON file and build the page
document.addEventListener('DOMContentLoaded', () => {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const content = document.getElementById('content');
            data.items.forEach(item => {
                const itemDiv = document.createElement('div');
                itemDiv.classList.add('item');
                itemDiv.innerHTML = `
                    <h2>${item.title}</h2>
                    <p>${item.description}</p>
                `;
                content.appendChild(itemDiv);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});
```

### 4. `data.json`

This JSON file contains the data that will be used to populate the webpage. You can add more items as needed.

```json
{
    "items": [
        {
            "title": "Item 1",
            "description": "This is the description for item 1."
        },
        {
            "title": "Item 2",
            "description": "This is the description for item 2."
        },
        {
            "title": "Item 3",
            "description": "This is the description for item 3."
        }
    ]
}
```

### Explanation

1. **HTML Structure**: The `index.html` file provides a simple structure with a header, main content area, and footer. The main content area is where the dynamic content will be injected.

2. **CSS Styling**: The `style.css` file contains basic styles for the body, header, main content, and footer. You can expand this with more styles as needed.

3. **JavaScript Functionality**: The `script.js` file fetches data from `data.json` using the Fetch API. It then iterates over the items in the JSON file and creates HTML elements to display each item in the main content area.

4. **Data Separation**: The data is stored in a separate `data.json` file, making it easy to update the content without modifying the HTML or JavaScript files.

### How to Run

1. Create a folder named `my-web-project`.
2. Create the files as shown above and copy the respective code into each file.
3. Open `index.html` in a web browser to see the project in action.

This template provides a solid foundation for building a web project that is easy to maintain and extend. You can add more features, styles, and data as needed!