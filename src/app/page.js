import styles from "./page.module.css";
import NavBar from "../components/NavBar/NavBar.jsx";

export default function Home() {
  return (
    <main>
      <div className={styles.slideShow}>
        <NavBar />
        <div className={styles.titleBox}>
          <h1 className={styles.storeName}>Rickey Meche's Donut King</h1>
          <div className={styles.catchPhrase}>Making Your Day a Little Sweeter</div>
        </div>
      </div>
    </main>
  );
}
