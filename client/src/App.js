import { BrowserRouter } from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import AllRoutes from './Routes'

import { Provider } from "react-redux"
import store from './store'
import { Toaster, toast } from 'sonner'


function App() {

  return (
    <div>
      <Provider store={store} >
        
        <BrowserRouter>
          <Toaster position="top-right" richColors  />
          <Navbar/>
          <AllRoutes/>
        </BrowserRouter>
      </Provider>
      
      
    </div>
  );
}

export default App;
