# News Website

A responsive news website built using **HTML, CSS, JavaScript, and News API** to fetch and display the latest news articles from different categories.

## Features

- **Latest News:** Fetch and display the latest news articles.
- **Category-wise News:** Browse news by categories such as Technology, Sports, Business, Health, and Entertainment.
- **API Integration:** Fetch real-time news data using a News API.
- **Search News:** Search for news articles using keywords.
- **Responsive Design:** Works on desktop, tablet, and mobile devices.
- **Dynamic Content:** Display article titles, images, descriptions, sources, and publication dates.
- **Read More:** Open the original news article using its source link.

## Technologies Used

- **HTML5** – Structure of the website.
- **CSS3** – Styling, layout, and responsive design.
- **JavaScript** – Dynamic functionality and API integration.
- **News API** – Fetching news articles from an external API.

## Project Structure

```text
News-Website/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## How to Run the Project

1. Clone the repository:

   ```bash
   git clone YOUR_GITHUB_REPOSITORY_URL
   ```

2. Open the project folder in VS Code.

3. Get an API key from your chosen news API provider.

4. Add your API key to the appropriate location in `script.js`.

5. Run `index.html` using the VS Code Live Server extension.

6. Browse news articles, select categories, or search for specific topics.

## API Integration

The website uses an external News API to retrieve news articles in JSON format. JavaScript fetches the data and dynamically displays the results on the webpage.

**Note:** API availability, supported countries, and free-plan restrictions depend on the provider. Some news APIs may not support direct browser requests or production use on a free plan. Never expose a private API key in a public repository.

## Learning Outcomes

- Understanding HTML page structure and CSS styling.
- Working with JavaScript and asynchronous `fetch()` requests.
- Integrating third-party APIs.
- Handling JSON responses and dynamically updating the DOM.
- Building responsive user interfaces.
- Managing project files using Git and GitHub.

## Future Improvements

- Add dark mode.
- Implement pagination or infinite scrolling.
- Add bookmarks for favorite articles.
- Improve loading indicators and error handling.
- Add a backend to protect API credentials.

## Author

**Vishal Gangwar**

BCA Graduate | MCA Student | Aspiring Software Developer

---

If you find this project useful, feel free to explore the repository and suggest improvements.
