import './App.css';
import { Ad } from './components/Ad';
import AdDesigner from './components/AdDesigner';
import Header from './components/Header';
import Vote from './components/Vote';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <div className="container">
          <div className="ads-container">
            <Ad colorTheme={false} fontSize={50} flavor="Strawberry" />
            <Ad colorTheme={true} fontSize={50} flavor="Chocolate" />
            <Ad colorTheme={false} fontSize={50} flavor="Vanilla" />
          </div>
          <div className="designer-content">
            <AdDesigner />
            <Vote />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
