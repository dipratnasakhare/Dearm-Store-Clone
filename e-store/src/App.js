import './App.css';
import Navbar from "./Component/pages/Navbar/Navbar"
import Footer from "./Component/pages/Footer/Footer"
import RoutesData from './Component/Routes/RoutesData';
function App() {
  return (
    <div className="App" >
     <Navbar/>
     <RoutesData/>
     <Footer/>
    </div>
  );
}

export default App;
