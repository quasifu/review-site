import { Routes, Route } from 'react-router-dom';

import Home from 'pages/Home';
import About from 'pages/About';
import Share from 'pages/Share';
import Buy from 'pages/Buy';

import style from './App.module.scss';
import ActionBar from 'components/ActionBar';

function App() {
  return (
    <div className={style.pageContainer}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/share' element={<Share />} />
        <Route path='/buy' element={<Buy />} />
      </Routes>
      <ActionBar />
    </div>
  );
}

export default App;
