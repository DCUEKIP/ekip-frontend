import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Products.module.css";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import React from "react";
import ComputerParts from "../ComputerParts.json";
import shop_banner from "../public/shop_banner.svg";
import Header from "../components/Header/Header";

const Products: NextPage = () => {

  return (
    <div className={styles.container}>
        <NavBar />
        <Header pageName="Shop" />

        <div className={styles.shopGridWrapper}>
            <div className={styles.shopGrid}>
                {ComputerParts.phone.map((item) => {
                    return (
                        <a
                            key={item.id}
                            href={"/product?id=" + item.id}
                        >
                            <div className={styles.productHeader}>
                                <Image src={item.image_url} height={220} width={150} />
                            </div>
                            <span>{item.name}</span>
                            <span className={styles.itemPrice}>
                            {item.currency !== "USD" ? (item.currency + " ") : "$"}
                                {item.price}
                        </span>
                        </a>
                    )
                })}

            </div>

            <div className={styles.productsNavigation}>
                <div className={styles.productsNavigationPage} style={{background: '#FBEBB5'}}>
                    1
                </div>
                <div className={styles.productsNavigationPage}>
                    2
                </div>
                <div className={styles.productsNavigationPage}>
                    3
                </div>
                <div className={styles.productsNavigationPageNext}>
                    Next
                </div>
            </div>
        </div>

        <Footer />
    </div>
  );
};

export default Products;
