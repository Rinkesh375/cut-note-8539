import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './App.css';
import DownloadApp from './downloadNavbar/DownloadApp';
import SearchNav from './searchNavbar/SearchNav';
import Slider from './sliders/Slider';
import ProductSlider from './ProductSlider/ProductSlider';
import SameSlider from "./Same2slider/SameSlider";
import CategoryProduct from "./categoryProduct/CategoryProduct";

function App() {
  return (
    <>
      <DownloadApp />
      <SearchNav/>
      <Slider/>
      <ProductSlider/>
      <SameSlider />
      <SameSlider />
      <CategoryProduct/>
    </>
  );
}

export default App;
