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
        <h1 className={styles.titleOne}>ABOUT US</h1>
      </div>
    </main>
  );
}