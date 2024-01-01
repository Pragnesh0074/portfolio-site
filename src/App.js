import './App.css';
import { Footer } from './Components/Footer';
import Header from './Components/Header';
import AboutPage from './Pages/AboutPage';
import HomePage from './Pages/HomePage'
import WorkPage from './Pages/WorkPage';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="mt-20"/>
      {/* <HomePage /> */}
      {/* <WorkPage /> */}
      <AboutPage />
      <div className="mt-20"/>
      <Footer />
    </div>
  );
}

export default App;
