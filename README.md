
# Movie World

Movie World is a React-based web application that allows users to search for movies and manage a wishlist. Users can add movies to different genres (e.g., Action, Comedy) and view the wishlist categorized by genre. The application fetches movie data from the OMDB API and provides an interactive user experience with Bootstrap components.

## Features

- **Search Movies**: Users can search for movies by title using the OMDB API.
- **Movie Wishlist**: Movies can be added to a wishlist and categorized by genre (Action, Comedy).
- **View Movies**: Wishlist movies are displayed in separate tabs based on genre.
- **Remove Movies**: Movies can be removed from the wishlist.
- **Responsive Design**: The interface is responsive and styled with Bootstrap.

## Tech Stack

- **Frontend**: React, React Bootstrap
- **Build Tool**: Vite
- **Styling**: Bootstrap 5
- **HTTP Client**: Axios
- **Linting**: ESLint

## Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/en/download/) and [Yarn](https://classic.yarnpkg.com/en/docs/install) installed.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Devendra-1997/movie-world.git
   ```
2. Navigate to the project directory:
   ```bash
   cd movie-word
   ```
3. Install dependencies:
   ```bash
   yarn install
   ```

### Running the Application

- To start the development server, run:
  ```bash
  yarn dev
  ```
  This will start the Vite development server, and you can view the application at `http://localhost:3000`.

- To build the project for production:
  ```bash
  yarn build
  ```

- To preview the production build:
  ```bash
  yarn preview
  ```

### Linting

Run the following command to lint the code:
```bash
yarn lint
```

## Project Structure

The project structure is as follows:
```
src/
├── components/
│   ├── AddToWishlist.jsx
│   ├── MovieCard.jsx
│   ├── MovieWishlist.jsx
│   ├── MovieWishlistContainer.jsx
│   └── SearchBar.jsx
├── App.jsx
├── main.jsx
├── App.css
└── index.html
```

- **components/**: Contains all the React components used in the project.
- **App.jsx**: The main component that brings all components together.
- **main.jsx**: The entry point of the React application.
- **App.css**: Styles for the application.

## Components

- **AddToWishlist**: Allows users to add a movie to the wishlist categorized by genre.
- **MovieCard**: Displays movie information such as title and poster.
- **MovieWishlist**: Displays movies in the wishlist categorized into tabs for different genres.
- **MovieWishlistContainer**: The main container that integrates all components, handles state management, and contains the logic for searching, adding, and removing movies.
- **SearchBar**: Provides a search bar for finding movies.

## API Usage

The application fetches data from the [OMDB API](https://www.omdbapi.com/) using an API key.

- Base URL: `https://www.omdbapi.com/?apikey=<your_api_key>&type=movie&t=`
- Replace `<your_api_key>` with a valid OMDB API key.

## Configuration

Update the `API_URL` in `MovieWishlistContainer.jsx` with your OMDB API key:
```javascript
const API_URL = "https://www.omdbapi.com/?apikey=YOUR_API_KEY&type=movie&t=";
```

## Dependencies

The project uses the following dependencies:
- `react`: ^18.3.1
- `react-dom`: ^18.3.1
- `axios`: ^1.7.4
- `bootstrap`: ^5.3.3
- `react-bootstrap`: ^2.10.4

## Dev Dependencies

- `@vitejs/plugin-react`: ^4.3.1
- `eslint`: ^9.9.0
- `eslint-plugin-react`: ^7.35.0
- `vite`: ^5.4.1

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [OMDB API](https://www.omdbapi.com/) for movie data.
- [Bootstrap](https://getbootstrap.com/) for styling.

## Author

Developed by Devendra Dhakal.
