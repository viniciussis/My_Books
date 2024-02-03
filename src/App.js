import './App.css';
import Header from './components/Header';
import NewBooks from './components/NewBooks';
import Search from './components/Search';

function App() {
  return (
    <div className="app">
      <Header/>
      <Search/>
      <NewBooks/>
    </div>
  );
}

export default App;
