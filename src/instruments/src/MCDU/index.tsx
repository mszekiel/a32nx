import './style.css';

import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter, Navigate, Route, Routes, useLocation,
} from 'react-router-dom';

import { renderTarget } from '../utils/util';
import { ScratchpadProvider } from '../utils/contexts/ScratchpadContext';
import { PowerContext, PowerProvider } from '../utils/contexts/PowerContext';

import { Off } from './pages/Off/Off';
import { AircraftStatus } from './pages/AircraftStatus/AircraftStatus';
import { Scratchpad } from './components/Scratchpad/Scratchpad';
import { useInteractionEvent } from '../utils/hooks/useInteractionEvent';
import { Container } from './components/Container/Container';

function MCDU() {
  const { power } = useContext(PowerContext);
  const location = useLocation();

  if (!power && location.pathname !== '/') {
    return <Navigate to="/" />;
  }

  return (
    <Container>
      <Routes>
        <Route path="/" element={<Off />} />
        {/* <Route path="initialization/*" element={<Init waitForData dataTime={30} testTime={10} redirect="/idle" />} /> */}
        <Route path="aircraftStatus" element={<AircraftStatus />} />
      </Routes>
      <Scratchpad />
    </Container>
  );
}

ReactDOM.render(
  <HashRouter>
    <ScratchpadProvider>
      <PowerProvider>
        <MCDU />
      </PowerProvider>
    </ScratchpadProvider>
  </HashRouter>,
  renderTarget,
);
