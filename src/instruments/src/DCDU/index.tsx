import './style.css';
import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter, Navigate, Route, Routes, useLocation,
} from 'react-router-dom';

import { renderTarget } from '../utils/util';

import { Idle } from './pages/Idle/Idle';
import { Off } from './pages/Off/Off';
import { Init } from '../components/Init/Init';
import { PowerContext, PowerProvider } from '../utils/contexts/PowerContext';

function DCDU() {
  const { power } = useContext(PowerContext);
  const location = useLocation();

  if (!power && location.pathname !== '/') {
    return <Navigate to="/" />;
  }

  return (
    <Routes>
      <Route path="/" element={<Off />} />
      <Route path="initialization/*" element={<Init waitForData dataTime={30} testTime={10} redirect="/idle" />} />
      <Route path="idle/*" element={<Idle />} />
    </Routes>
  );
}

ReactDOM.render(
  <HashRouter>
    <PowerProvider>
      <DCDU />
    </PowerProvider>
  </HashRouter>,
  renderTarget,
);
