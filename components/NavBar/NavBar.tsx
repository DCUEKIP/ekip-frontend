import styles from "./NavBar.module.css";
import Logo from "../../public/logo.png";
import Image from "next/image";
import Account_vecor_icon from "../../public/account_vector_icon.svg";
import Cart_vecor_icon from "../../public/cart_vector_icon.svg";
import Like_vecor_icon from "../../public/like_vector_icon.svg";
import Search_vecor_icon from "../../public/search_vector_icon.svg";
import Cart_header_icon from "../../public/cart_header_icon.svg";
import { Key, useState } from "react";
import ComputerParts from "../../ComputerParts.json";
import { useRouter } from "next/router";
import DeleteIcon from "../../public/delete_icon.png";
import Button from "../Button/Button";

interface Props {
  style?: React.CSSProperties;
}

const getSubTotalPrice = () => {
  let total = 0;
  let products = null;

  if (typeof window !== "undefined")
    products = window.localStorage.getItem("cart");
  if (products === null || products.length === 0) return 0;

  JSON.parse(products).map(
    (product: { id: number; quantity: number; price: number }) => {
      const productData = getProductById(product.id) as any;
      if (productData) total += product.quantity * productData?.price;
    }
  );
  return total;
};

const getProductById = (id: any) => {
  let productFinal = undefined;
  try {
    ComputerParts.phone.map((product) => {
      if (product.id === parseInt(id)) productFinal = product;
    });
  } catch (e) {
    console.log("DEV ERROR: ProductID isn't satisfying. Got: [id:" + id + "]");
  }
  return productFinal;
};

const renderCartProducts = () => {
  let products = null;

  if (typeof window !== "undefined")
    products = window.localStorage.getItem("cart");
  if (products === null || products.length === 0) {
    return (
      <div>
        <p>No item in cart.</p>
      </div>
    );
  } else {
    return JSON.parse(products).map(
      (product: {
        id: Key;
        name: string;
        image_url: string;
        price: number;
        currency: string;
        quantity: number;
      }) => {
        const productData = getProductById(product.id) as any;
        return (
          <div key={product.id} className={styles.cartProduct}>
            <Image
              src={productData.image_url}
              height={50}
              width={50}
              className={styles.cartProductLogo}
            />
            <div>
              <p>{productData.name}</p>
              <p>
                {product.quantity} x ${productData.price}
              </p>
            </div>
          </div>
        );
      }
    );
  }
};

const NavBar = ({ style }: Props) => {
  const [cartVisibility, setCartVisibility] = useState(false);
  const router = useRouter();
  return (
    <div className={styles.navbar}>
      <div className={styles.logo} onClick={() => router.push("/")}>
        <Image src={Logo} alt="Logo" height={32} width={32} />
      </div>
      <div className={styles.nav_link}>
        <p
          className={styles.nav_tabs}
          onClick={() => {
            router.push("/");
          }}
        >
          Home
        </p>
        <p
          className={styles.nav_tabs}
          onClick={() => {
            router.push("/products");
          }}
        >
          Shop
        </p>
        <p
          className={styles.nav_tabs}
          onClick={() => {
            router.push("/about");
          }}
        >
          About
        </p>
        <p
          className={styles.nav_tabs}
          onClick={() => {
            router.push("/contact");
          }}
        >
          Contact
        </p>
      </div>
      <div className={styles.nav_icon}>
        <Image
          style={{ cursor: "pointer" }}
          src={Account_vecor_icon}
          alt="Account"
          height={30}
          width={30}
        />
        <Image
          onClick={() => setCartVisibility(!cartVisibility)}
          style={{ cursor: "pointer" }}
          src={Cart_vecor_icon}
          alt="Cart"
          height={30}
          width={30}
        />
        <Image
          style={{ cursor: "pointer" }}
          src={Search_vecor_icon}
          alt="Search"
          height={30}
          width={30}
        />
        <Image
          style={{ cursor: "pointer" }}
          src={Like_vecor_icon}
          alt="Like"
          height={30}
          width={30}
        />
      </div>
      {cartVisibility ? (
        <div className={styles.cartDetails}>
          <div className={styles.cartDetailsHeader}>
            <h3>Shopping Cart</h3>
            <Image
              src={Cart_header_icon}
              height={50}
              onClick={() => {
                window.localStorage.removeItem("cart");
                setCartVisibility(!cartVisibility);
              }}
              style={{ cursor: "pointer" }}
            />
            <Image
              src={DeleteIcon}
              height={20}
              width={20}
              onClick={() => setCartVisibility(!cartVisibility)}
              style={{ cursor: "pointer" }}
            />
          </div>
          <div className={styles.cartDetailsContent}>
            {renderCartProducts()}
          </div>
          {getSubTotalPrice() !== 0 ? (
            <div className={styles.cartDetailsFooter}>
              <p>
                Subtotal <span>${getSubTotalPrice()}</span>
              </p>
            </div>
          ) : (
            <></>
          )}
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              width: "100%",
              marginBottom: "20px",
            }}
          >
            <Button
              onClick={() => {
                router.push("/checkout");
              }}
            >
              Checkout
            </Button>
            <Button
              onClick={() => {
                router.push("/cart");
              }}
            >
              Cart
            </Button>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default NavBar;
