import styles from './Button.module.css';

interface Props {
  isDisabled?: boolean;
  isSmall?: boolean;
  style?: React.CSSProperties;
  children: React.ReactNode;
  onClick?: () => void;
  secondary?: boolean;
  isTransparent?: boolean;
}

const Button = ({
  isDisabled = false,
  isSmall = false,
  style,
  children,
  onClick,
  secondary = false,
  isTransparent = false,
}: Props) => (
  <button
    className={styles.button}
    disabled={isDisabled}
    style={style}
    onClick={onClick}
  >
    <span>{children}</span>
  </button>
);

export default Button;
