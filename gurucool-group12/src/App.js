import './App.css';
import { Header } from './components/header';
import SearchBar from './components/search';
import Footer from './components/footer';


function App() {
  return (
    <div className="App">
      <div className='imageClass'>
      </div>
      <Header />
      <SearchBar/>
      <Footer/>

    </div>
  );
}

export default App;
