import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header'
import Search from './components/Search';
import Watched from './components/Watched';
import Watchlist from './components/Watchlist';
import './App.css';
import { GlobalProvider } from './context/globalContext';

function App() {
  return (
      <GlobalProvider>
        <Header />

        <Routes> 
          <Route path='/'  element={<Watchlist />}/>
          <Route path='/watched' element={<Watched />}/>
          <Route path='/add' element={<Search />}/>
        </Routes>
      </GlobalProvider>
  );
}

export default App;
