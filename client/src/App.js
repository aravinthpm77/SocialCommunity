import { BrowserRouter as Router } from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import AllRoutes from './Routes'
function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <AllRoutes/>
      </Router>
      
    </div>
  );
}

export default App;
