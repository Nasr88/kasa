
import React from "react";
import Banner from "../../components/banner/Banner";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Gallery from "../../components/gallery/Gallery";
import image from "../../assets/images/banner/homeBanner.png";
const Home = () => {
  return (
    <div className="home">
      <Header />
      <main>
        <Banner texte="Chez vous, partout et ailleurs" image={image} />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
};
export default Home;