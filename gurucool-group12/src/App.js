import './App.css';
import { Header } from './components/header';
import Footer from './components/footer';
import Navbar from './components/navbar';
import AvgTutorRating from './components/avgTutorRating';
function App() {
  return (
    <div className="App">
      <div className='imageClass'>
      </div>
      <Header />
      <Footer/>
      <Navbar/>
      <AvgTutorRating/>
    </div>
  );
}

export default App;
