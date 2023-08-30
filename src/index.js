import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css';
import Home from './pages/Home';
import Error from './pages/Error';
import reportWebVitals from './reportWebVitals';
import Layout from './components/Layout';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <Layout>
      <Router>
        <Routes>
          <Route path='/user/:id' element={<Home />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </Router>
    </Layout>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
