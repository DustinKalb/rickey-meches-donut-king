import styles from "./page.module.css";
import NavBar from "../components/NavBar/NavBar.jsx";
import HoursOfOperation from "../components/HoursOfOperation/HoursOfOperation.jsx";
import AboutUsSection from "../components/AboutUsSection/AboutUsSection.jsx";
import Image from "next/image";
import { Pacifico } from "next/font/google";
import BsMouse from "../components/BsMouse/BsMouse.jsx";
import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import SocialsSection from "../components/socialsSection/SocialsSection.jsx";

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  return (
    <main>
      <div className={styles.background}>
        <NavBar />
        <div className={styles.titleBox}>
          {/*<h1 className={styles.storeName}>Rickey Meche's Donut King</h1>*/}
          <Image
            className={styles.storeName}
            src="/logofull.png"
            height={243.77}
            width={550}
            quality={100}
          />
          <br />
          <Image
            className={styles.sweeter}
            src="/makingyourdaysweeter2.png"
            // width={384}
            // height={108}
            width={550}
            height={60}
          />

          {/* <div className={`${styles.catchPhrase} ${pacifico.className}`}>
            Making Your Day a Little Sweeter
          </div> */}
        </div>
        <div className={styles.scrollDown}>Scroll Down</div>
        <BsMouse />
      </div>
      <div className={styles.content}>
        {/* About Section */}
        <div className={styles.aboutBackground}>
          <AboutUsSection />
        </div>
        {/* Social Section */}
        <SocialsSection />
        {/* <div className={styles.socialsCard}>
          <div style={{ fontSize: "40px" }}>Check Us Out On Social Media!</div>
          <CiFacebook className={styles.socialIcon} />
          <CiInstagram className={styles.socialIcon} />
          <div className={styles.test}>Test</div>
        </div> */}
        {/* Hours & Location Section */}
        <div className={styles.hoursBackground}>
          <div className={styles.margin}>
            <div className={styles.hoursCard}>
              <div className={styles.hoursImageWrapper}>
                <Image
                  className={styles.donut}
                  src="/chocnglaze2.png"
                  width={700}
                  height={700}
                  quality={100}
                />
              </div>
              <HoursOfOperation />
            </div>
          </div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3448.3745748530764!2d-92.06898509999999!3d30.1978549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86249e82fef207ad%3A0x6c08ce042721b183!2sRickey%20Meche&#39;s%20Donut%20King!5e0!3m2!1sen!2sus!4v1777668597842!5m2!1sen!2sus"
          width="100%"
          height="400"
          style={{ border: 0 }}
          loading="lazy"
        />
        <div className={styles.ordersBackground}>
          <div className={styles.ordersCard}>ORDER</div>
        </div>
        <div className={styles.contactBackground}>
          <div className={styles.contactCard}>CONTACT</div>
        </div>
        <div className={styles.footer}>FOOTER</div>
      </div>
    </main>
  );
}
