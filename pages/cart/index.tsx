import type { NextPage } from "next";
import React from "react";
import styles from "../../styles/Cart.module.css";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import ComputerParts from "../../ComputerParts.json";
import Image from 'next/image';
import { useRouter } from "next/router";
// import { getProductById } from "../../components/NavBar/NavBar";

const getProductById = (id: any) => {
    let productFinal = undefined;
    try {
        ComputerParts.phone.map((product) => {
            if (product.id === parseInt(id))
                productFinal = product;
        })
    } catch (e) {
        console.log("DEV ERROR: ProductID isn't satisfying. Got: [id:" + id + "]")
    }
    return productFinal;
}

const Cart: NextPage = () => {
  // const [viewMore, setViewMore] =  React.useState(4);
    const router = useRouter();

    function cart_tab() {
        let products = null;

        if (typeof window !== 'undefined')
            products = window.localStorage.getItem('cart')
        if (products === null || products.length === 0) {
            return (
                <div>
                    <p>No item in cart.</p>
                </div>
            )
        } else {
            return (
                JSON.parse(products).map(
                    (product: { id: Key; name: string, image_url: string, price: number, currency: string, quantity: number}) => {
                        const productData = getProductById(product.id)
                        return (
                            <div className={styles.product_line}>
                                <div className={styles.picture_tab}>
                                    <Image src={productData.image_url} height={50} width={50} />
                                </div>
                                <div className={styles.product_tab}>
                                    {productData.name}
                                </div>
                                <div className={styles.price_tab}>
                                    ${productData.price}
                                </div>
                                <div className={styles.quantity_tab}>
                                    <input className={styles.quantity_style} type="number" min="1" max="5" value={product.quantity} />
                                </div>
                                <div className={styles.subtotal_tab}>
                                    ${product.quantity * productData.price}
                                </div>
                            </div>
                        );
                })
            )
        }
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
                </div>
            </div>
            <div className={styles.narrow}>
                <div className={styles.contactCard}>
                    <h2 className={styles.titleCard}>
                        Cart Total :
                    </h2>
                    <p className={styles.textCard}>
                        $0
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
