import './App.css';
import Login from './pages/Login';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Asia from './components/Asia/Asia';
import Europe from './components/Europe/Europe';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/asia' element={<Asia />} />
        <Route path='/europe' element={<Europe />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
