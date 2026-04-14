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
        <div className={styles.aboutCard}>
          <div className={styles.imageWrapper}>
            <Image className={styles.slideShow} src="/rickster.jpg" fill quality={100} />
          </div>
          <div className={styles.aboutText}>ABOUT US</div>
        </div>
        <div className={styles.hoursCard}>HOURS & LOCATION</div>
        <div className={styles.ordersCard}>ORDER</div>
        <div className={styles.contactCard}>CONTACT</div>
      </div>
    </main>
  );
}