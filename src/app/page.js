import styles from "./page.module.css";
import NavBar from "../components/NavBar/NavBar.jsx";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className={styles.slideShow}>
        <Image className={styles.logo} src="/logo.png" height={150} width={150} quality={100} />
        <NavBar />
        <div className={styles.titleBox}>
          {/*<h1 className={styles.storeName}>Rickey Meche's Donut King</h1>*/}
          <Image src="/logowords.png" height={243.77} width={500} quality={100} />
          <div className={styles.catchPhrase}>Making Your Day a Little Sweeter</div>
        </div>
      </div>
    </main>
  );
}