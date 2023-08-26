import './App.css';
import video from './Untitled_Artwork 2.MOV'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <video autoPlay muted src={video} width="1000" height="500" />
      </header>
    </div>
  );
}

export default App;
