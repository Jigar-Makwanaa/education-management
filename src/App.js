import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './component/Header';
import Deshbord from './pages/Deshbord';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Header />} />
          <Route path='/deshbord' element={<Deshbord />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
