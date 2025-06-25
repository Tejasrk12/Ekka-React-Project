import {Route, Routes} from 'react-router-dom';
import Header from './layout/header';
import Footer from './layout/footer';
import Home from './pages/home';
import Shop from './pages/shop';
import ProdcutPage from './pages/product-page';
import PageNotFound from './pages/page-not-found';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route  path='/shop' element={<Shop/>}/>
        <Route  path='/product-page' element={<ProdcutPage/>}/>
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
