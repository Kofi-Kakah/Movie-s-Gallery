import { Routes, Route } from 'react-router-dom'
import './css/App.css'
import Home from './Pages/Home'
import Favorite from './Pages/Favorite';
import Navbar from './Components/Navbar';
import { MovieProvider } from './Context/MovieContext';

function App() {

  return (
      <MovieProvider>
      <Navbar/>
    <main className="main-content">
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Favorites" element={<Favorite/>}/>
     </Routes>
    </main>
    </MovieProvider>
  );
}

export default App
