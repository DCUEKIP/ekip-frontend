import styles from "./NavBar.module.css";
import Image from "next/image";

interface Props {
  style?: React.CSSProperties;
  title: string;
}

const HeaderTitle = ({ style, title }: Props) => (
  <div className={styles.navbar}>
   
  </div>
);

export default HeaderTitle;
