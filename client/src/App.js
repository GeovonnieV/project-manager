import './App.css';
import {Router} from "@reach/router";
import MovieAll from "./components/MovieAll";
import MovieOne from "./components/MovieOne";
import MovieEdit from "./components/MovieEdit";
import MovieNew from "./components/MovieNew";

function App() {
  return (
    <div className="App">
      <Router>
        <MovieAll path="/" />
        <MovieEdit path="/movies/:id/edit" />
        <MovieNew path="/movies/new" />
        <MovieOne path="/movies/:id" />               
      </Router>
    </div>
  );
}

export default App;
