import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router';
import Header from './Component/Header/Header';
import Home from './Pages/Home/Home';
import PageNotFound from './Pages/PageNotFound';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route exact path='/' element={ <Home/> } />
        {/* <Route exact path='/about' element={} />
        <Route exact path='/pricing' element={} />
        <Route exact path='/try' element={} /> */}
        <Route exact path='*' element={ <PageNotFound/>  } />



      </Routes>
    </div>
  );
}

export default App;
