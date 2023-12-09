import AppHeader from "../../components/header/header";
import Mainbody from "./body";
import Mainfooter from "./footer";
import Recentproduct from "./Recentproduct";
import AboutUs from "./Aboutus";

const Main = () => {
return(
  <>
  <AppHeader/>
  <Mainbody/>
  <Recentproduct/>
  <AboutUs/>
  <Mainfooter/> 
  </>
);
};
export default Main;
