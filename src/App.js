import './App.css';
import { Footer } from './Components/Footer';
import Header from './Components/Header';
import AboutPage from './Pages/AboutPage';
import ContactPage from './Pages/ContactPage';
import CvPage from './Pages/CvPage';
import HomePage from './Pages/HomePage'
import ProjectPage from './Pages/ProjectPage';
import WorkPage from './Pages/WorkPage';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="mt-20"/>
        <Routes>
          <Route path="/" element={<HomePage />}>
            <Route index element={<HomePage />} />
          </Route>
          <Route path="/work" element={<WorkPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/project" element={<ProjectPage />} />
          <Route path="/cv" element={<CvPage />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Routes>
      <div className="mt-10" />  
      <Footer />
      <div className="mt-20"/>
    </div>
  );
}

export default App;
