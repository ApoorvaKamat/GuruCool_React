import './App.css';
import { Header } from './components/header';
import SearchBar from './components/search';
import Footer from './components/footer';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">
      <div className='imageClass'>
      </div>
      <Header />
      <SearchBar/>
      <Footer/>
      <Navbar/>
    </div>
  );
}

export default App;
