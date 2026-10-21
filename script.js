












const API_KEY ="583674c75d924701aa9bb9d79461fa48";
const API_URL = "https://newsapi.org/v2/everything?q=";

let curSelectedNav = null;

// Load Indian news when the page opens
window.addEventListener("DOMContentLoaded", () => {
    fetchNews("india");
});

// Reload the website
function reload() {
    window.location.reload();
}

// Fetch news from the API
async function fetchNews(query) {
    const cardsContainer = document.getElementById("cardscontainer");

    if (!cardsContainer) {
        console.error("News container not found in index.html");
        return;
    }

    cardsContainer.textContent = "Loading news...";

    try {
        const apiUrl =
            `${API_URL}${encodeURIComponent(query)}&apiKey=${API_KEY}`;

        const response = await fetch(apiUrl);
        const data = await response.json();

        if (!response.ok || data.status !== "ok") {
            console.error(
                "NewsAPI error:",
                data.message || response.status
            );

            cardsContainer.textContent =
                data.message || "Unable to load news.";

            return;
        }

        bindData(data.articles || []);

    } catch (error) {
        console.error("Failed to fetch news:", error);

        cardsContainer.textContent =
            "Unable to load news. Please check your connection.";
    }
}

// Display news cards
function bindData(articles) {
    const cardsContainer =
        document.getElementById("cardscontainer");

    const cardTemplate =
        document.getElementById("template-news-card");

    if (!cardsContainer || !cardTemplate) {
        console.error("News container or card template not found.");
        return;
    }

    cardsContainer.innerHTML = "";

    if (!Array.isArray(articles) || articles.length === 0) {
        cardsContainer.textContent = "No news available right now.";
        return;
    }

    articles.forEach(article => {
        const cardClone = cardTemplate.content.cloneNode(true);

        const image = cardClone.querySelector("#news-img");
        const title = cardClone.querySelector("#news-title");
        const source = cardClone.querySelector("#news-source");
        const description = cardClone.querySelector("#news-desc");

        // Set news image
        if (image) {
            if (article.urlToImage) {
                image.src = article.urlToImage;
            } else {
                image.src = "https://placehold.co/400x200";
            }

            image.alt = article.title || "News image";
        }

        // Set news title
        if (title) {
            title.textContent = article.title || "No title available";
        }

        // Set news source and publication date
        if (source) {
            const date = article.publishedAt
                ? new Date(article.publishedAt).toLocaleDateString("en-IN")
                : "";

            source.textContent =
                `${article.source?.name || "Unknown source"} ${date}`;
        }

        // Set news description
        if (description) {
            description.textContent =
                article.description || "No description available.";
        }

        // Make the card open the full article
        const card = cardClone.querySelector(".card");

        if (card && article.url) {
            card.style.cursor = "pointer";

            card.addEventListener("click", () => {
                window.open(
                    article.url,
                    "_blank",
                    "noopener,noreferrer"
                );
            });
        }

        cardsContainer.appendChild(cardClone);
    });
}

// Handle category navigation
function onNavItemClick(id) {
    const selectedItem = document.getElementById(id);

    if (!selectedItem) {
        console.error("Navigation item not found:", id);
        return;
    }

    if (curSelectedNav) {
        curSelectedNav.classList.remove("active");
    }

    curSelectedNav = selectedItem;
    curSelectedNav.classList.add("active");

    fetchNews(id);
}

// Search news
const searchButton = document.getElementById("search-button");
const searchText = document.getElementById("news-input");

if (searchButton && searchText) {
    searchButton.addEventListener("click", () => {
        const query = searchText.value.trim();

        if (!query) {
            searchText.focus();
            return;
        }

        if (curSelectedNav) {
            curSelectedNav.classList.remove("active");
            curSelectedNav = null;
        }

        fetchNews(query);
    });

    // Search when Enter is pressed
    searchText.addEventListener("keydown", event => {
        if (event.key === "Enter") {
            searchButton.click();
        }
    });
}
