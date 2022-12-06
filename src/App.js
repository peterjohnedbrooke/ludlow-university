import logo from './logo.svg';
import './App.css';
import {Routes, Route, BrowserRouter, HashRouter } from "react-router-dom";
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Layout from './components/Layout/Layout'

function App() {
  return (
   <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Layout>
      <Routes>
          <Route path='/' element={<Home/>}>
          </Route>
        </Routes>
    </Layout>
   </BrowserRouter>
  );
}

export default App;
