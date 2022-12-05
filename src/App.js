import logo from './logo.svg';
import './App.css';
import {Routes, Route, BrowserRouter } from "react-router-dom";
import Landing from './components/Landing/Landing';
import Header from './components/Header/Header';
import Layout from './components/Layout/Layout'

function App() {
  return (
   <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Layout>
      <Routes>
          <Route path='/' element={<Header/>}>
            <Route index element={<Landing />} />
          </Route>
        </Routes>
    </Layout>
   </BrowserRouter>
  );
}

export default App;
