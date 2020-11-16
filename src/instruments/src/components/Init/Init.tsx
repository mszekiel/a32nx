import './Init.css';

import React, { useEffect } from 'react';
import {
  Route, Routes, useNavigate,
} from 'react-router-dom';

export interface InitProps {
  waitForData: boolean;
  testTime: number;
  dataTime: number;
  redirect: string;
}

export function Init({
  waitForData, testTime, dataTime, redirect,
}: InitProps) {
  const navigate = useNavigate();

  const delayedRedirect = (time: number, path: string) => {
    setTimeout(() => {
      navigate(path, { replace: true });
    }, (Math.random() * (time - time * 0.3) + time * 0.3) * 1000);
  };

  useEffect(() => {
    if (waitForData) {
      delayedRedirect(testTime, 'data');
    } else {
      delayedRedirect(testTime, redirect);
    }
  }, []);

  const Data = () => {
    useEffect(() => {
      delayedRedirect(testTime, redirect);
    }, []);

    return (
      <div className="init-container">
        <div>WAITING FOR DATA</div>
        <div>{`(MAX ${dataTime} SECONDS)`}</div>
      </div>
    );
  };

  const Test = () => (
    <div className="init-container">
      <div>SELF TEST IN PROGRESS</div>
      <div>{`(MAX ${testTime} SECONDS)`}</div>
    </div>
  );

  return (
    <Routes>
      <Route path="/" element={<Test />} />
      <Route path="data" element={<Data />} />
    </Routes>
  );
}
