import type { NextPage } from "next";
import React from "react";
import styles from "../../styles/Contact.module.css";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";


const Contact: NextPage = () => {
//   const [viewMore, setViewMore] = React.useState(4);

  return (
    <div className={styles.container}>
        <NavBar />
        <Header pageName="Contact"/>
        <div className={styles.parent}>
            <div className={styles.wide}>
                <div className={styles.contactCard}>
                    <h2 className={styles.titleCard}>
                        Adress
                    </h2>
                    <p className={styles.textCard}>
                        236 5th SE Avenue,
                    </p>
                    <p className={styles.textCard}>
                        New York NY10000,
                    </p>
                    <p className={styles.textCard}>
                        United States
                    </p>
                </div>
                <div className={styles.contactCard}>
                    <h2 className={styles.titleCard}>
                        Phone
                    </h2>
                    <p className={styles.textCard}>
                        Mobile: +(84) 546-6789
                    </p>
                    <p className={styles.textCard}>
                        Hotline: +(84) 456-6789
                    </p>
                </div>
                <div className={styles.contactCard}>
                    <h2 className={styles.titleCard}>
                        Working Time
                    </h2>
                    <p className={styles.textCard}>
                        Monday-Friday: 9:00 - 22:00
                    </p>
                    <p className={styles.textCard}>
                        Saturday-Sunday: 9:00 - 21:00
                    </p>
                </div>
            </div>
            <div className={styles.narrow}>
                <div className={styles.form}>
                    <p>Your Name</p>
                    <input className={styles.input_form} type="text" />
                </div>
                <div className={styles.form}>
                    <p>Email Adress</p>
                    <input className={styles.input_form} type="text" />
                </div>
                <div className={styles.form}>
                    <p>Subject</p>
                    <input className={styles.input_form} type="text" />
                </div>
                <div className={styles.form}>
                    <p>Message</p>
                    <input className={styles.input_form} type="text" />
                </div>
                <input className={styles.submit} type="submit" value="Submit" />
            </div>
        </div>
        <Footer />
    </div>
  );
};

export default Contact;
