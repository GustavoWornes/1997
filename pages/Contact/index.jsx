import Head from "next/dist/shared/lib/head"
import styles from "../../styles/Home.module.css"
import main from "./Contact.module.css"
export default function Contact () {
    return(
        <div>
            <Head>
                <title>
                    Contact
                </title>
            </Head>
        <main className={main.main}>
        <div className={styles.grid}>
          <a href="https://www.instagram.com/gustavowornes/" className={styles.card}>
            <h2>Instagram</h2>
            
          </a>

          <a href="https://github.com/GustavoWornes" className={styles.card}>
            <h2>GitHub</h2>
          </a>

          <a
            href="https://www.linkedin.com/in/gustavowornes/"
            className={styles.card}
          >
            <h2>Linkedin</h2>
           
          </a>

            <h2 className={styles.card}>Gu.wornes@gmail.com</h2>
     
        </div>
        </main>
        </div>
    )
}