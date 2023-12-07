import "../../scss/main.scss";
import AppHeader from "../../components/header/header";
import Mainbody from "./body";
import Mainfooter from "./footer";
import Productgallery from "./Productgallery";
import ProductCard from "../../components/card/card";

const Main = () => {
return(
  <>
    <AppHeader/>
    <Mainbody/>
    <ProductCard/>
    <Productgallery/>
    <Mainfooter/>
  </>
  
   

);
};
export default Main;
