import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { Footer, NavigationBar } from './exports/exports';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
    <div>
      <NavigationBar />
      <Routes>
        <Route path={"/"} element={<Home />} />
      </Routes>
      <Footer />
    </div>
    </BrowserRouter>
  )
}

export default App;
