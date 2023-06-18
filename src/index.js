import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Potato from './Potato';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App /> {/*HTML이 아니라, component=HTML을 반환하는 함수=react(component->HTML)의 JSX(javascript+HTML)*/}
    <Potato /> {/*강의에서는 하나의 component만 render가 가능했으나, 최신 버전은 여러 개도 가능*/}
  </React.StrictMode>
);
