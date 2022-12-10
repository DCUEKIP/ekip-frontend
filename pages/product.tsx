import type { NextPage } from "next";
import Image from "next/image";
import styles from "../styles/Products.module.css";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import React from "react";
import ComputerParts from "../ComputerParts.json";
import {useRouter} from "next/router";

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

const addToCart = (product: any) => {
    if (typeof window !== 'undefined') {
        if (window.localStorage.getItem('cart') &&
            window.localStorage.getItem('cart') !== null &&
            window.localStorage.getItem('cart') !== undefined) {
            //Cart update
            let products = window.localStorage.getItem('cart');

            const tmpProducts = JSON.parse(products);
            let isIncreased = false;
            //Increase quantity
            tmpProducts.map((tmp: any) => {
                if (tmp.id === product.id) {
                    tmp.quantity += 1;
                    isIncreased = true;
                }
            })
            if (!isIncreased)
                tmpProducts.push({id: product.id, quantity: 1})
            window.localStorage.setItem(
                'cart',
                JSON.stringify(tmpProducts))
        } else {
            //New cart
            window.localStorage.setItem('cart', JSON.stringify(
                [{id: product.id, quantity: 1}]
            ));
        }
        alert(window.localStorage.getItem('cart'))
        alert('Add ' + product.name + "["+ product.id + "] to cart.")
    }
}

const Product: NextPage = () => {
    const router = useRouter();
    const { id } = router.query;
    // @ts-ignore
    const product = getProductById(id);

    return (
        <div className={styles.container}>
            <NavBar />

            <div>
                <button onClick={() => addToCart(product)}>
                    Add to cart
                </button>
            </div>
            <Footer />
        </div>
    );
};

export default Product;
