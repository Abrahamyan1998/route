import { Route, Routes } from 'react-router-dom';
import Cart from './Components/Cart';
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import './App.scss';
import Main from './Components/Main';


function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Main/>}>
            <Route path='Home' element={<Home/>} />
            <Route path='Cart' element={<Cart/>} />
            <Route path='Login' element={<Login/>} />
            <Route path='Register' element={<Register/>} />
            <Route path='*' element={<h1>not Found</h1>} />

        </Route>
      </Routes>

    </div>
  );
}

export default App;
