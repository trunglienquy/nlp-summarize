import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import SummarizeText from './pages/SummarizeText';
import SummarizeVideo from './pages/SummarizeVideo';
import About from './pages/About';


function App() {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <Router>
        <Navbar />
        <hr className='bg-black h-1'/>
        <Routes>
          <Route path="/" element={<SummarizeText />} />
          <Route path="/summarize-video" element={<SummarizeVideo />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
