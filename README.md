<!-- # Netflix GPT

- create React App
- configured TailwindCSS
- Header
- Routing Of App
- Login Form
- Sign Up Form
- Form Validation 
- useRef Hook
- Firebase Setup
- Deploying our app to production
- Create Sign Up User Account
- Implement Sign In User Api
- Created Redux Store with userSlice
- Implemented Sign out
- Update Profile
- BugFix: Sign up user displayName and profile picture update
- BugFix: if the user is not logged in Redirect /browse to Login Page and vice-versa
- Unsubscribed to the onAuthStateChanged Callback
- Add hardcoded values to constants file
- Register TMDB API & create an app & get access token
- Get data from TMDB now playing movies list API
- Custom Hook for Playing Movies
- Create movieSlice
- Update Store with Movie Data
- Planning For MainContainer & SecondaryContainer
- Fetch Data for Trailer Video
- Update Store With Trailer Video Data
- Embedded the Youtube Video and Make it autoplay and mute
- Build SecondaryContainer
- Build Movies List
- Build Movies Card
- TMDB Image CDN URL
- usePopularMovies Custom Hooks

# Features

- Login/Sign Up
  - Sign In / Sign Up form
  - redirect to browse page
- Browse(after authentication)
  - Header
  - Main Movie
    - Trailer
    - Title & Description
    - MovieSuggestions
      - MovieLists \* N
- NetflixGPT
  - Search bar
  - Movie Suggestions -->

## 💥 GPTFLIX

GPTFLIX is a web app for watching the latest movies with a movie recommendation system using OpenAI's GPT API's. It is built using React, Redux for frontend & firebase for
Authentication.

## Tech Stack

- React
- Redux
- Firebase

## 🛠️ Local Development

We will first start with setting up the Local Project Environment:

```sh
git clone https://github.com/imnitesh18/GPTFLIX.git
cd GPTFLIX
```

Now we will add the environment variables in the project:

- Create a .env file in the project and add REACT_APP_OPENAI_KEY & REACT_APP_TMDB_KEY.

Now run the following commands:

```sh
npm install or npm i
npm start

```

## 📸 Working Model Screenshots!

<img width="1440" alt="Screenshot 2022-08-20 at 12 13 20 AM" src="https://github.com/imbmali/Netflix-GPT/assets/35923279/b5a5fafb-9075-449a-82ce-459ddd8a0108">
<img width="1440" alt="Screenshot 2022-08-20 at 12 13 20 AM" src="https://github.com/imbmali/Netflix-GPT/assets/35923279/ccc73ee1-6986-426b-82be-df5f5a8d1c86">
<img width="1440" alt="Screenshot 2022-08-20 at 12 13 20 AM" src="https://github.com/imbmali/Netflix-GPT/assets/35923279/3ab80830-e6c8-4b76-b20b-0fead2cc5cc6">

## 🥁 Features

- GPT Movie Search: Harness the power of AI with our GPT-powered movie search feature. Simply input any query, no matter how complex, and let our AI suggest a set of 5 movies tailored
  to your search.

- Comprehensive Info: From plot summaries, and movie videos, to cast details, GPTFLIX provides everything you need to know about your favourite movies.

- Device-Friendly: Enjoy Madflix seamlessly across all devices, whether you're on a desktop, tablet, or smartphone.

- Secure Access: Safeguard your account with user authentication, offering hassle-free login, signup, and password recovery options.

- Explore Cast: Click on any cast member to discover all movies featuring that actor or actress, expanding your cinematic horizons effortlessly.

- Diverse Movie Categories: On the homepage, immerse yourself in a curated selection of movies categorized as Now Playing, Discover, Top Rated, All-Time Favorites, and Popular,
  powered by the The Movie Database (TMDB) API.
