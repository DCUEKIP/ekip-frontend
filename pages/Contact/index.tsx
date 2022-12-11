import type { NextPage } from "next";
import React from "react";
import styles from "../../styles/Contact.module.css";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import LocaLogo from "../../public/location-pin.png";
import PhoneCall from "../../public/phone-call.png";
import Clock from "../../public/clock.png";
import Image from "next/image";

const Contact: NextPage = () => {
  //   const [viewMore, setViewMore] = React.useState(4);

  return (
    <div className={styles.container}>
      <NavBar />
      <Header pageName="Contact" />
      <div className={styles.page_header}>
        <h1>Get In Touch With Us</h1>
        <p>
          For More Information About Our Product & Services. Please Feel Free To
          Drop Us
        </p>
        <p>
          An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
        </p>
      </div>
      <div className={styles.parent}>
        <div className={styles.wide}>
          <div className={styles.contactCard}>
            <div className={styles.header_text}>
              <Image
                className={styles.locationIcon}
                src={LocaLogo}
                height={36}
                width={36}
              />
              <h2 className={styles.titleCard}>Adress</h2>
            </div>
            <p className={styles.textCard}>236 5th SE Avenue,</p>
            <p className={styles.textCard}>New York NY10000,</p>
            <p className={styles.textCard}>United States</p>
          </div>
          <div className={styles.contactCard}>
            <div className={styles.header_text}>
              <Image
                className={styles.locationIcon}
                src={PhoneCall}
                height={36}
                width={36}
              />
              <h2 className={styles.titleCard}>Phone</h2>
            </div>
            <p className={styles.textCard}>Mobile: +(84) 546-6789</p>
            <p className={styles.textCard}>Hotline: +(84) 456-6789</p>
          </div>
          <div className={styles.contactCard}>
            <div className={styles.header_text}>
              <Image
                className={styles.locationIcon}
                src={Clock}
                height={36}
                width={36}
              />
              <h2 className={styles.titleCard}>Working Time</h2>
            </div>
            <p className={styles.textCard}>Monday-Friday: 9:00 - 22:00</p>
            <p className={styles.textCard}>Saturday-Sunday: 9:00 - 21:00</p>
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
          <Button>Submit</Button>
          {/*<input className={styles.submit} type="submit" value="Submit" />*/}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
