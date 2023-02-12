import Header from './Components/Header/Header'
import Main from './Components/Main/Main'
import Footer from './Components/Footer/Footer';
import Productlist from './Components/Productlist/Productlist';
import ProductCard from './Components/productCard/productCard';
import Representation from './Components/Representation/Representation'
import { Route, Routes } from 'react-router-dom';
import products from './data/products'
import data from './data/data'


function App() {
  return (
    <>
      <Header data={data.Header}/>
      <Routes>
        <Route path='/' element={<Main data={data.Main} />} />
        <Route path='/vinyl_players/*' element={<Productlist data={products.vinilPlayers} />} />
        <Route path='/headphones/*' element={<Productlist data={products.headPhones} />} />
        <Route path='/vinyl_plates/*' element={<Productlist data={products.vinyls} />} />
        <Route path='/acoustic/*' element={<Productlist data={products.acoustics} />} />
        <Route path='/stuff/*' element={<Productlist data={products.stuff} />} />
        <Route path='/DJ_studio/*' element={<Productlist data={products.dj_studio} />} />
      </Routes>
      
      <Representation data={data.Representation}/>
      <Footer data={data.Footer}/>
    </>
  );
}

export default App;
