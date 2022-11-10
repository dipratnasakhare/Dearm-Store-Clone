import './App.css';
import Navbar from "./Component/pages/Navbar/Navbar"
import Home from "./Component/pages/Home/Home"
import Footer from "./Component/pages/Footer/Footer"
function App() {
  return (
    <div className="App" style={{width:"100%"}}>
     <Navbar/>
     <Home/>
     <Footer/>
    </div>
  );
}

export default App;
