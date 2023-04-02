import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './App.css';
import DownloadApp from './downloadNavbar/DownloadApp';
import SearchNav from './searchNavbar/SearchNav';
import Slider from './sliders/Slider';
import ProductSlider from './ProductSlider/ProductSlider';
import SameSlider from "./Same2slider/SameSlider";
import CategoryProduct from "./categoryProduct/CategoryProduct";
import OnlyOnMyShop from "./onlyOnMyShop/OnlyOnMyShop";
import LookingFor from "./LookingForTitleimages/LookingFor";
import TopProducts from "./TopRatedProduct/TopProducts";
import AllBrand from "./AllBrand/AllBrand";
import { Divider } from "@chakra-ui/react";
import HelpAssistant from "./HelpAssistant/HelpAssistant";
import Spotlight from "./Spotlight/Spotlight";
import Footer from "./Footer/Footer";

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
      <OnlyOnMyShop /> 
      <LookingFor/>
      <TopProducts/>
      <AllBrand />
      <HelpAssistant/>
      <Spotlight />
      <Footer/>
    </>
  );
}

export default App;
