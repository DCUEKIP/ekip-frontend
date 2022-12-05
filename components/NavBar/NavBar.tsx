import styles from "./NavBar.module.css";
import Logo from "../../public/logo.png";
import Image from "next/image";
import Account from "../../public/account.png";
import Cart from "../../public/cart.png";
import Search from "../../public/search.png";
import Like from "../../public/like.png";

interface Props {
  style?: React.CSSProperties;
}

const NavBar = ({ style }: Props) => (
  <div className={styles.navbar}>
    <div className={styles.logo}>
      <Image src={Logo} alt="Logo" />
    </div>
    <div className={styles.nav_link}>
      <p>Home</p>
      <p>Shop</p>
      <p>About</p>
      <p>Contact</p>
    </div>
    <div className={styles.nav_logo} >
      <Image src={Account} alt="Account" />
      <Image src={Cart} alt="Cart" />
      <Image src={Search} alt="Search" />
      <Image src={Like} alt="Like" />
    </div>
  </div>
);

export default NavBar;
