import styles from "./NavBar.module.css";
import Logo from "../../public/logo.png";
import Image from "next/image";
import Account_vecor_icon from "../../public/account_vector_icon.svg";
import Cart_vecor_icon from "../../public/cart_vector_icon.svg";
import Like_vecor_icon from "../../public/like_vector_icon.svg";
import Search_vecor_icon from "../../public/search_vector_icon.svg";
import { useRouter } from "next/router";

interface Props {
  style?: React.CSSProperties;
}

const NavBar = ({ style }: Props) => {
  const router = useRouter();

  return (
    <div className={styles.navbar}>
      <div
        className={styles.logo}
        onClick={() => {
          router.push("/");
        }}
      >
        <Image src={Logo} alt="Logo" />
      </div>
      <div className={styles.nav_link}>
        <p
          onClick={() => {
            router.push("/");
          }}
          className={styles.nav_tabs}
        >
          Home
        </p>
        <p
          onClick={() => {
            router.push("/products");
          }}
          className={styles.nav_tabs}
        >
          Shop
        </p>
        <p
          onClick={() => {
            router.push("/about");
          }}
          className={styles.nav_tabs}
        >
          About
        </p>
        <p
          onClick={() => {
            router.push("/contact");

          }}
          className={styles.nav_tabs}
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
          style={{ cursor: "pointer" }}
          src={Cart_vecor_icon}
          onClick={() => {
            router.push("/cart");
          }}
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
    </div>
  );
};

export default NavBar;
