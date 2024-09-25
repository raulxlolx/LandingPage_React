import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Card from './Card.js';
import reportWebVitals from './reportWebVitals';
import Cover from './Cover';
import Header from './header.js';
import nomdi from './images/nomdi.jpg';
import audionomdi from './audio/nomdi.mp3';
import gano from './images/gano.png';
import audiogano from './audio/gano.mp3';
import exito from './images/exito.jfif';
import audioexito from './audio/exito.mp3';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Cover />
    <div className="card-container">
  <Card 
  imgsrc={nomdi}
  title={"NOMBRE DIRECCION"}
  body={"KAZE & TONY ANZIS"}
  audiosrc={audionomdi}
  />
  <Card 
  imgsrc={gano}
  title={"GANO YO"}
  body={"KAZE"}
  audiosrc={audiogano}
  />
 
  <Card 
  imgsrc={exito}
  title={"COMETE MI EXITO"}
  body={"KAZE & SHODA MONKA"}
  audiosrc={audioexito}
  />
 
  </div>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
