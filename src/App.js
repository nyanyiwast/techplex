import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import TransparentNavbar from './components/Navigation/transparentNav';
import { Footer } from './exports/exports';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
    <div>
      {/* <NavigationBar /> */}
      <TransparentNavbar />
      <Routes>
        <Route path={"/"} element={<Home />} />
      </Routes>
      <Footer />
    </div>
    </BrowserRouter>
  )
}

export default App;
