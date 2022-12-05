import styles from "./NavBar.module.css";
import Logo from "../../public/logo.png";
import Image from "next/image";
import Account_vecor_icon from "../../public/account_vector_icon.svg";
import Cart_vecor_icon from "../../public/cart_vector_icon.svg";
import Like_vecor_icon from "../../public/like_vector_icon.svg";
import Search_vecor_icon from "../../public/search_vector_icon.svg";

interface Props {
  style?: React.CSSProperties;
}

const NavBar = ({ style }: Props) => (
  <div className={styles.navbar}>
    <div className={styles.logo}>
      <Image src={Logo} alt="Logo" />
    </div>
    <div className={styles.nav_link}>
      <p style={{ cursor: "pointer" }}>Home</p>
      <p style={{ cursor: "pointer" }}>Shop</p>
      <p style={{ cursor: "pointer" }}>About</p>
      <p style={{ cursor: "pointer" }}>Contact</p>
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

export default NavBar;
