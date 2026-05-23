import './App.scss';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './Components/Layout';
import Home from './Components/Home';
import Teams from './Components/Teams';
import Positions from './Components/Positions';
import Search from './Components/Search';
import Country from './Components/Country';
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <>
    <Routes>
    <Route path="/" element={<Layout />} > 
    <Route index element={<Home />}/>
    <Route path="/teams" element={<Teams />}/>
    <Route path="/country" element={<Country />}/>
    <Route path="/position" element={<Positions />}/>
    <Route path="/search" element={<Search />}/>
    {/* Catch-all route - redirects undefined paths to home */}
    <Route path="*" element={<Navigate to="/" replace />} />
    </Route>
    </Routes>
    <Analytics />
    </>
  );
}

export default App;
