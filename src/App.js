import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Welcome from './components/Welcome'
import LatestRelease from './components/LatestRelease'

function App() {
  return (
    <div>
      <NavBar />
      <Welcome />
      <LatestRelease />
      <Footer />
    </div>
  );
}

export default App;
