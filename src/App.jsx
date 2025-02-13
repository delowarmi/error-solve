import './App.css';
import { Routes, Route } from "react-router";

import RootLayout from './components/layout/RootLayout';
import Home from './components/pages/Home';
import Shop from './components/pages/Shop';
import About from './components/pages/About';

                         
function App() {

  return (
    <>
      <Routes>
          <Route element={<RootLayout />} >
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/about" element={<About />} />
          </Route>
      </Routes>
    </>
  )
}
export default App
