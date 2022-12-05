import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Button from "../components/Button/Button";
import NavBar from "../components/NavBar/NavBar";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <NavBar />
      <Button>Click me</Button>
    </div>
  );
};

export default Home;
