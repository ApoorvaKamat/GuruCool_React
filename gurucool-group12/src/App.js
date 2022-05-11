import './App.css';
import { BrowserRouter,  Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Login from './components/login';
import { Header } from './components/header';
import Footer from './components/footer';
import Navbar from './components/navbar';
import AvgTutorRating from './components/avgTutorRating';

function App() {
  return (
    <BrowserRouter>
     <div className='imageClass'></div>
     <Header />
      <Routes>
        <Route path='/' element={<Login/>}> </Route>
        <Route path='/home' element = {<Home />}></Route>;
      </Routes>
      <Footer/>
      <Navbar/>
      {/* <AvgTutorRating/> */}
    </BrowserRouter>
  );
}

export default App;
