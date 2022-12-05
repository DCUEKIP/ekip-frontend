import styles from "./Footer.module.css";

interface Props {
  style?: React.CSSProperties;
}

const Footer = ({ style }: Props) => (
  <div className={styles.footer}>
    <div className={styles.top}>
      <div className={styles.section_container}>
        <h2>Free Delivery</h2>
        <p className={styles.grey_item}>
          For all oders over $50, consectetur adipim scing elit.
        </p>
      </div>
      <div className={styles.top_section_container}>
        <h2>90 Days Return</h2>
        <p className={styles.grey_item}>
          If goods have problems, consectetur adipim scing elit.
        </p>
      </div>
      <div className={styles.section_container}>
        <h2>Secure Payment</h2>
        <p className={styles.grey_item}>
          100% secure payment, consectetur adipim scing elit.
        </p>
      </div>
    </div>
    <div className={styles.bottom}>
      <div className={styles.grey_item}>
        400 University Drive Suite 200 Coral Gables, FL 33134 USA
      </div>
      <div>
        <p className={styles.grey_item}>Links</p>
        <p style={{ cursor: "pointer" }}>Home</p>
        <p style={{ cursor: "pointer" }}>Shop</p>
        <p style={{ cursor: "pointer" }}>About</p>
        <p style={{ cursor: "pointer" }}>Contact</p>
      </div>
      <div>
        <div className={styles.grey_item}>Help</div>
        <p style={{ cursor: "pointer" }}>Payment Options</p>
        <p style={{ cursor: "pointer" }}>Returns</p>
        <p style={{ cursor: "pointer" }}>Privacy Policies</p>
      </div>
      <div>
        <div className={styles.grey_item}>Newsletter</div>
        <div
          style={{
            display: "flex",
            gap: "10px",
            alignItems: "center",
          }}
        >
          <input
            type="text"
            placeholder="Enter your email..."
            style={{
              width: "200px",
              height: "30px",
              borderRadius: "5px",
              border: "none",
              fontSize: "19px",
            }}
          ></input>
          <p
            onClick={() => {
              alert("Subscribed!");
            }}
            style={{
              cursor: "pointer",
            }}
          >
            SUBSCRIBE
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
