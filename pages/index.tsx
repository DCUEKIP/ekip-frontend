import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Button from "../components/Button/Button";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import RTX_4090 from "../public/vector_RTX_4090.svg";
import shop_parts from "../public/vector_shop_parts.svg";
import shop_accessories from "../public/vector_shop_accessories.svg";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <NavBar />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "calc(100vh - 100px)",
        }}
      >
        <div>
          <h1
            style={{ fontSize: "50px", fontWeight: "bold", marginLeft: "20px" }}
          >
            <span style={{ color: "#2CA9FF" }}>NEW</span> Nvidia <br /> RTX 4090
          </h1>
        </div>
        <Image src={RTX_4090} alt="RTX 4090" />
      </div>
      <div
        style={{
          display: "flex",
          height: "100vh",
          backgroundColor: "#2CA9FF",
          justifyContent: "center",
          alignItems: "center",
          gap: "20%",
        }}
      >
        <div>
          <Image src={shop_parts} alt="Shop Parts" />
          <h3>Shop Parts</h3>
        </div>
        <div>
          <Image src={shop_accessories} alt="Shop Accessories" />
          <h3>Shop Accessories</h3>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
