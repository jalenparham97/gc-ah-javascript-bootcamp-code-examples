import Header from './components/Header';
import MenuList from './components/MenuList';
import Sidebar from './components/Sidebar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <MenuList />
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
