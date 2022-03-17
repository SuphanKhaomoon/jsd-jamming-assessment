import Playlist from '../Playlist/Playlist';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import './App.css';

function App() {
  return (
    <div>
      <h1>Ja<span class="highlight">mmm</span>ing</h1>
      <div class="App">
        {/* <!-- Add a SearchBar component --> */}
        <SearchBar />
        <div class="App-playlist">
          {/* <!-- Add a SearchResults component --> */}
          <SearchResults />
          {/* <!-- Add a Playlist component --> */}
          <Playlist />
        </div>
      </div>
    </div>
  );
}

export default App;
