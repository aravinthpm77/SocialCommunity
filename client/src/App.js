import { BrowserRouter as Router } from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import AllRoutes from './Routes'
import { useEffect } from 'react';
import { fetchAllpost } from './actions/postdetails';
import { useDispatch } from 'react-redux';
function App() {


  
  const dispatch =useDispatch()
  
  useEffect(() => {
    dispatch(fetchAllpost());
  }, [dispatch]);


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
