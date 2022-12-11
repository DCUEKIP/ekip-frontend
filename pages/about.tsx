import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import React from "react";
import { useRouter } from "next/router";

const About: NextPage = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <NavBar />
      <div>
        <h1
          style={{
            fontSize: "50px",
            fontWeight: "bold",
            marginLeft: "20px",
            height: "calc(100vh - 60px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Coming Soon
          <span
            style={{
              fontSize: "15px",
              fontWeight: "normal",
              marginLeft: "20px",
              textDecoration: "underline",
              cursor: "pointer",
            }}
            onClick={() => {
              router.push("/");
            }}
          >
            go back to home page
          </span>
        </h1>
      </div>
      <Footer />
    </div>
  );
};

export default About;
