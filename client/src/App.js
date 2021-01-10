
import './App.css';
import FetchAPI from './components/FetchAPI'
import LandingPage from './components/LandingPage'
import Upload from './components/Upload'
import {BrowserRouter, Switch ,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
    
    
    
    
    <BrowserRouter>
    <Route  path='/' component={LandingPage}>
    </Route>
    <Route  exact path='/' component={FetchAPI}>
    </Route>

   <Route path='/post' component={Upload}
    ></Route>
      
    </BrowserRouter>
      
      
    </div>
  );
}

export default App;
