import { Route,Routes } from 'react-router-dom';
import Nav from './component/nav';
import Footer from './component/footer';
import Main from './component/main';
import Card from './component/card';
import './css/App.css'

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path='/' element={<Main/>} />
        <Route path='/b' element={<Card/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
