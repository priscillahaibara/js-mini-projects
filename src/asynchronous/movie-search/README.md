# 🎬 Movie Search — JavaScript Mini Project

A small **HTML**, **CSS**, and **vanilla JavaScript** project that consumes the [OMDb API](https://www.omdbapi.com/) to display movie information.  
Built as part of my practice with mini projects to improve **DOM manipulation**, **fetch API**, and **state management** in the browser.

## 🚀 Features

- 🔍 **Real-time search**: search for movies by title with debounce to avoid unnecessary requests.  
- ⭐ **Favorites**: add or remove movies from a favorites list, persisted in `localStorage`.  
- 📝 **Movie details**: show poster, genre, runtime, plot, and IMDb rating.  
- 🕹️ **Smooth navigation**: back button to return to the search results.  
- 🎯 **User feedback**: error messages, loading spinner, and request cancellation with `AbortController`.

## 🛠️ Concepts Practiced

- **DOM manipulation** with `querySelector`, `createElement`, `addEventListener`  
- **Fetch API** with error handling and `AbortController`  
- **Debounce** for optimized live search  
- **State persistence** using `localStorage`  
- Separation of concerns: **HTML (structure)**, **CSS (style)**, **JS (logic)**  
- ES6 module structure and code modularization

## 📂 Project Structure

```text
movie-search/
│
├── index.html       # Main HTML structure
├── style.css        # Main styling
├── main.js          # Entry point: initializes events and search logic
│
├── js/
│   ├── api.js       # Requests to the OMDb API
│   ├── dom.js       # UI creation and rendering
│   └── favorites.js # Favorites management using localStorage
│
└── config.js        # Stores the OMDb API key (do not commit to Git)
```

## ▶️ Getting Started

1. **Get a free API key** from [OMDb API](https://www.omdbapi.com/apikey.aspx).  
2. Create a file named `config.js` in the project root with:

   ```js
   export const MY_API_KEY = "YOUR_KEY_HERE";
3. Open index.html in your browser or serve it with a local server (Live Server, vite, etc.).
4. Type a movie title into the search bar and explore the results!

## 🖼️ Preview

<p align="center">
  <img src="https://github.com/user-attachments/assets/5a8a152c-eccd-47dc-b73b-66c297575893" alt="Movie-search App Screenshot" width="800" />
</p>
