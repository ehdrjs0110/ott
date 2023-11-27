import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
//import Main from './Main';
import Login from './Login';
import Signup from './Signup';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/Signup' element={<Signup/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;