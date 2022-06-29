import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home'; 
import Blog from './pages/Blog';
import Portfolio from './pages/Portfolio';
import Header from "./components/Header";
import Footer from './components/Footer';
import Contact from './pages/Contact';
import Skills from './pages/Skills';
function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' exact="true" element={<Home/>}/>
        <Route path='/skill' element={ <Skills/>} />
        <Route path='/portfolio' element={ <Portfolio/>} />
        <Route path='/contact' element={ <Contact/>} />
        <Route path='/blog' element={<Blog/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
