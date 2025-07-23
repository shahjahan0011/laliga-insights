import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import Home from './Components/Home';
import Teams from './Components/Teams';
import Positions from './Components/Positions';
import Search from './Components/Search';
import Country from './Components/Country';
import Api from './Components/Api';

function App() {
  return (
    <>
    <Routes>
    <Route path="/" element={<Layout />} > 
    <Route index element={<Home />}/>
    <Route path="/teams" element={<Teams />}/>
    <Route path='/data' element={<Api />}/>
    <Route path="/country" element={<Country />}/>
    <Route path="/position" element={<Positions />}/>
    <Route path="/search" element={<Search />}/>
    </Route>
    </Routes>
    </>
  );
}

export default App;
