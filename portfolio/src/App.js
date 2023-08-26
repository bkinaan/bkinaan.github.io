import './App.css';
import FadeIn from 'react-fade-in';
import video from './Untitled_Artwork 2.MOV'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FadeIn><h1>Hello there! I'm</h1></FadeIn>
        
        <video autoPlay muted src={video} width="1000" height="500" />
      </header>
    </div>
  );
}

export default App;
