import { Routes, Route } from 'react-router-dom';

import Home from 'pages/Home';
import About from 'pages/About';

import style from './App.module.scss';

function App() {
  return (
    <div className={style.pageContainer}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
