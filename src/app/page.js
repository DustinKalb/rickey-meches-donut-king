import styles from "./page.module.css";
import NavBar from "../components/NavBar/NavBar.jsx";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className={styles.background}>
        <NavBar />
        <div className={styles.titleBox}>
          {/*<h1 className={styles.storeName}>Rickey Meche's Donut King</h1>*/}
          <Image className={styles.storeName} src="/logofull.png" height={243.77} width={550} quality={100} />
          <div className={styles.catchPhrase}>Making Your Day a Little Sweeter</div>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.aboutBackground}>
          <div className={styles.aboutCard}>
            <div className={styles.imageWrapper}>
              <Image className={styles.slideShow} src="/rickster.jpg" fill quality={100} />
            </div>
            <div className={styles.aboutText}>
              <div>About Us</div>
              <div>My name is Dustin and I work at Meche's Donut King. I get there super early and make a ton of product then I flip donuts for like 12 whole hours. It's honest work but the managers suck lol.</div>
            </div>
          </div>
        </div>
        <div className={styles.hoursBackground}>
          <div className={styles.hoursCard}>HOURS & LOCATION</div>
        </div>
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