import "../../scss/main.scss";
import AppHeader from "../../components/header/header";
import Mainbody from "./body";
import Mainfooter from "./footer";
import Productgallery from "./Productgallery";
import ProductCard from "../../components/card/card";

const Main = () => {
  return (
    <>
      <div className="#">
        <header id="">
          <AppHeader />
        </header>
        <main>
          <Mainbody />
          <ProductCard />
          <Productgallery />
        </main>
      </div>
      <footer>
        <Mainfooter />
      </footer>
    </>
  );
};
export default Main;
