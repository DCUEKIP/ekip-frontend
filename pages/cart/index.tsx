import type { NextPage } from "next";
import React from "react";
import styles from "../../styles/Cart.module.css";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { useRouter } from "next/router";


const Cart: NextPage = () => {
//   const [viewMore, setViewMore] = React.useState(4);
    const router = useRouter();

    function test() {
        return 0;
    }

    function cart_tab() {
        return (
            <div className={styles.product_line}>
                <div className={styles.picture_tab}>
                    Picture
                </div>
                <div className={styles.product_tab}>
                    Iphone
                </div>
                <div className={styles.price_tab}>
                    500$
                </div>
                <div className={styles.quantity_tab}>
                    <input className={styles.quantity_style} type="number" min="1" max="5" />
                </div>
                <div className={styles.subtotal_tab}>
                    Subtotal
                </div>
            </div>
            );
    }

  return (
    <div className={styles.container}>
        <NavBar />
        <Header pageName="Cart"/>
        <div className={styles.parent}>
            <div className={styles.wide}>
                <div className={styles.header_cart}>
                    <div className={styles.product}>
                        Product
                    </div>
                    <div className={styles.price}>
                        Price
                    </div>
                    <div className={styles.quantity}>
                        Quantity
                    </div>
                    <div className={styles.subtotal}>
                        Subtotal
                    </div>
                </div>
                <div className={styles.tab_cart}>
                    {cart_tab()}
                    {cart_tab()}
                </div>
            </div>
            <div className={styles.narrow}>
                <div className={styles.contactCard}>
                    <h2 className={styles.titleCard}>
                        Cart Total :
                    </h2>
                    <p className={styles.textCard}>
                        ${test()}
                    </p>
                    <button
                        className={styles.button}
                        onClick={() => {
                            router.push("/checkout");
                        }}
                    >
                        Checkout
                    </button>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  );
};

export default Cart;
