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
          <div className={styles.socialsCard}>
            <div>Check out our social medias!</div>
            <div>O O</div>
          </div>
          <div className={styles.hoursCard}>
            <div>Business Hours</div>
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