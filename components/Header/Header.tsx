import styles from "./Header.module.css";

interface Props {
    style?: React.CSSProperties;
}

const Header = ({ style, pageName }: Props) => (
     <div className={styles.parent}>
        <div className={styles.left_col}>
            {pageName}
        </div>
    </div>
);

export default Header;
