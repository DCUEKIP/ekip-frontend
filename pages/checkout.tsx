import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Checkout.module.css";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import React from "react";
import Header from "../components/Header/Header";

type Props = {
  isSmall: boolean;
  content?: string;
  name?: string;
};

const InfoButton = ({ isSmall, content, name }: Props) => {
  return (
    <div>
      <p>{name}</p>
      <input
        type="text"
        className={styles.infoButton}
        style={{
          width: isSmall ? "215px" : "450px",
        }}
        placeholder={content}
      ></input>
    </div>
  );
};

const Products: NextPage = () => {
  const [isPayPalSelected, setIsPayPalSelected] = React.useState(false);

  const handleSubmit = () => {
    alert("Thank you for your purchase!");
  };

  return (
    <>
      <NavBar />
      <Header pageName="Checkout" />
      <div className={styles.container}>
        <div className={styles.left}>
          <h1>Billing details</h1>
          <div
            style={{
              display: "flex",
              gap: "20px",
            }}
          >
            <InfoButton
              isSmall={true}
              content={"First Name"}
              name={"First Name"}
            />
            <InfoButton
              isSmall={true}
              content={"Last Name"}
              name={"Last Name"}
            />
          </div>
          <InfoButton
            isSmall={false}
            content={"Country / Region"}
            name={"Country / Region"}
          />
          <InfoButton
            isSmall={false}
            content={"Street Adress"}
            name={"Street Adress"}
          />
          <InfoButton
            isSmall={false}
            content={"Town / City"}
            name={"Town / City"}
          />
          <InfoButton isSmall={false} content={"Province"} name={"Province"} />
          <InfoButton isSmall={false} content={"ZIP Code"} name={"ZIP Code"} />
          <InfoButton isSmall={false} content={"Phone"} name={"Phone"} />
          <InfoButton
            isSmall={false}
            content={"Email Adress"}
            name={"Email Adress"}
          />
          <InfoButton
            isSmall={false}
            content={"Additional Information"}
            name={"Additional Information"}
          />
        </div>
        <div className={styles.right}>
          <div
            style={{
              display: "flex",
              gap: "150px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <h2>Product</h2>
              <p>**product**</p>
              <p>Subtotal</p>
              <p>Shipping</p>
              <p>Total</p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
              }}
            >
              <h2>Subtotal</h2>
              <p>**price**</p>
              <p>**price**</p>
              <p>FREE</p>
              <p
                style={{
                  color: "#4B9CD3",
                }}
              >
                $PRICE
              </p>
            </div>
          </div>
          <div
            style={{
              border: "1px solid grey",
            }}
          />
          <div
            style={{
              display: "flex",
            }}
          >
            <input
              type="checkbox"
              onChange={() => setIsPayPalSelected(!isPayPalSelected)}
              checked={!isPayPalSelected}
            />
            <p>Credit / Debit Card</p>
          </div>
          <p
            style={{
              color: "grey",
              maxWidth: "400px",
            }}
          >
            Make your payment directly into our bank account. Please use your
            Order ID as the payment reference. Your order will not be shipped
            until the funds have cleared in our account.
          </p>
          <div
            style={{
              display: "flex",
            }}
          >
            <input
              type="checkbox"
              onChange={() => setIsPayPalSelected(true)}
              checked={isPayPalSelected}
            />
            <p>Paypal</p>
          </div>
          <p
            style={{
              color: "grey",
              maxWidth: "400px",
            }}
          >
            Your personal data will be used to support your experience
            throughout this website, to manage access to your account, and for
            other purposes described in our{" "}
            <span
              style={{
                color: "black",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              privacy policy.
            </span>
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <button className={styles.button} onClick={() => handleSubmit()}>
              Place Order
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Products;
