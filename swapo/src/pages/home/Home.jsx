

import Header from "../../components/header/Header";
import Feed from "../../components/feed/Feed";
import Footer from "../../components/footer/Footer"
import "./home.css"
export default function Home() {
  return (
    <>
      <container className="bodyContainer">
        <header>
          <Header />
        </header>
        <main className="homePageMainTag">
          <div>
            <Feed />
          </div>
        </main>
        <footer>
         <Footer/>
        </footer>
      </container>
    </>
  );
}








