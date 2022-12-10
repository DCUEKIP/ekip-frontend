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
import ComputerParts from "../ComputerParts.json";
import React from "react";
import shop_center from "../public/shop_center.png";
import vector_shop_center from "../public/vector_shop_center.svg";
import vector_instagram from "../public/vector_insta.svg";
import vector_facebook from "../public/vector_facebook.svg";
import vector_twitter from "../public/vector_twitter.svg";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const [viewMore, setViewMore] = React.useState(4);
  const router = useRouter();

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
        <div
          onClick={() => {
            router.push("/products");
          }}
          style={{ cursor: "pointer" }}
        >
          <Image src={shop_parts} alt="Shop Parts" />
          <h3>Shop Parts</h3>
        </div>
        <div
          onClick={() => {
            router.push("/products");
          }}
          style={{ cursor: "pointer" }}
        >
          <Image src={shop_accessories} alt="Shop Accessories" />
          <h3>Shop Accessories</h3>
        </div>
      </div>
      <div
        style={{
          // display: "flex",
          // flexDirection: "column",
          minHeight: "100vh",
          // backgroundColor: "#2CA9",
          justifyContent: "center",
          gap: "20%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: "20px",
          }}
        >
          <h1>Top picks for you</h1>
          <p>A mix of new arrivals, popular choices, and great deals</p>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gridAutoRows: "minmax(300px, auto)",
          }}
        >
          {ComputerParts.phone.slice(0, viewMore).map((part) => {
            return (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <Image
                  src={part.image_url}
                  layout="fixed"
                  width={100}
                  height={100}
                  alt={part.name}
                />
                <h3>
                  {part.name.length > 12
                    ? part.name.slice(0, 12) + "..."
                    : part.name}
                </h3>
                <p>
                  {part.price} {part.currency}
                </p>
              </div>
            );
          })}
        </div>
        <h3
          style={{
            display: "flex",
            justifyContent: "center",
            textDecoration: "underline",
            cursor: "pointer",
          }}
          onClick={() => {
            console.log("View More");
            setViewMore(viewMore + 4);
          }}
        >
          View More
        </h3>
      </div>
      <div
        style={{
          minHeight: "600px",
          backgroundColor: "#2CA9FF",
        }}
      >
        <div
          style={{
            // width: "100%",
            height: "100vh",
          }}
        >
          {/* <Image
            src={vector_shop_center}
            // layout="responsive"
            // width={300}
            height={340}
            alt="shop_center"
          /> */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              textAlign: "center",
              flexDirection: "column",
            }}
          >
            <h1
              style={{
                marginTop: "200px",
              }}
            >
              Trade-in <br /> Your Products
            </h1>
            <div
              style={{
                border: "1px solid white",
                padding: "10px",
                width: "200px",
                cursor: "pointer",
              }}
            >
              Get Quote
            </div>
            <div
              style={{
                border: "1px solid white",
                padding: "10px",
                marginTop: "15px",
                cursor: "pointer",
                width: "200px",
              }}
            >
              Share Locator
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          minHeight: "100vh",
        }}
      >
        <h1
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Our Social Media
        </h1>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            marginTop: "200px",
          }}
        >
          <Image
            style={{
              cursor: "pointer ",
            }}
            src={vector_instagram}
            layout="fixed"
            alt="instagram"
          />
          <Image
            style={{
              cursor: "pointer ",
            }}
            src={vector_facebook}
            layout="fixed"
            alt="facebook"
          />
          <Image
            style={{
              cursor: "pointer ",
            }}
            src={vector_twitter}
            layout="fixed"
            alt="twitter"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
