import { BrowserRouter } from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import AllRoutes from './Routes'

import { Provider } from "react-redux"
import store from './store'
function App() {

  return (
    <div>
      <Provider store={store} >
        <BrowserRouter>
          <Navbar/>
          <AllRoutes/>
        </BrowserRouter>
      </Provider>
      
      
    </div>
  );
}

export default App;
