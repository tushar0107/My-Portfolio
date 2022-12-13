import { BrowserRouter, Router, Routes } from 'react-router-dom';
import './App.css';
import Content from './components/content';
import Techs from './components/techs';

function App() {
  return (
    <>
      <Content/>
      <Techs/>
      {/* <BrowserRouter>
        <Routes>
          <Router path="">

          </Router>
        </Routes>
      </BrowserRouter> */}
    </>
  );
}

export default App;
