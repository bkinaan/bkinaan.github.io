import './App.css';
import video1 from "./assets/Untitled_Artwork.MOV";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <video src={video1} width="1000" height="500" autoplay="true" muted />
      </header>
    </div>
  );
}

export default App;
