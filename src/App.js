import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import "./App.css"
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
import { action,comedy_movies,originals,romance_movies,top_rated, tv_toprated } from "./urls";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={originals}title='Netflix Originals'   />
      <RowPost url={action} title='Action Movies' isSmall />
      <RowPost url={romance_movies} title='Romance Movies' isSmall />
      <RowPost url={tv_toprated} title='Top Rated Tv Shows' isSmall />
      <RowPost url={comedy_movies} title='Comedy Movies' isSmall />
      <RowPost url={top_rated} title='Top Rated Movies' isSmall />
    </div>
  );
}

export default App;
