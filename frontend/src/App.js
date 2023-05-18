import { Route,Routes } from 'react-router-dom';
import Nav from './component/nav';
import Footer from './component/footer';
import Main from './component/main';
import Product_detail from './component/product_detail';
import './css/App.css'

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path='/' element={<Main/>} />
        <Route path='/product/:id' element={<Product_detail/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
