import Head from "next/head";
import styles from "../../styles/Home.module.css"

export default function About (){
    return(
        <div className={styles.container}>
            <Head>
                <title>About</title>
            </Head>
            <main className={styles.main}>
                <h1 className={styles.title}>
                    Pouco Sobre Mim
                </h1>
                <p className={styles.description}>
                    Sou Gustavo Tenho 25 anos, Natural de guarapuava no Párana, morando em joinville a uns 12 anos,<br></br>
                    Atualmente fazendo a transição de carreira para a area da tecnologia, Na Busca do tão sonhada primeira oportunidade <br></br> 
                    Fiz esse blog/site para exercitar o html,css e ainda por cima aprender mais sobre esse novo framework que é o Next.js
                </p>
                <h3 className={styles.title}>
                    Mas Vamos pra uma Biografia mais pessoal!
                </h3>
                <p>
                    Além da paixão por react e café com gosto duvidoso (ps:Um pouco forte segundo os outros),<br></br>
                    Ex-corredor de corridas de montanhas,tempo livre faço academia e tiro tempo pra Mimar meu sobrinho "Jp".

                </p>
            </main>
        </div>
    )
}