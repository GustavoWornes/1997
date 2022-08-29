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
                    Um Pouco Sobre Mim
                </h1>
                <p className={styles.description}>
                Me chamo Gustavo, tenho 25 anos, sou natural de Guarapuava - PR, mas moro em Joinville - SC a mais ou menos 12 anos.<br/> Atualmente estou buscando realizar uma transição de carreira para área de tecnología, correndo atrás da tão sonhada e idealizada primeira oportunidade!<br/> 
Desenvolvi esta página com o objetivo de exercitar meus conhecimentos em HTML, CSS e tudo que aprendi com os cursos realizados ou em andamento e experiências que me desafiaram! Assim como, acompanhar minha evolução nessa caminhada.
                </p>
                <h5 className={styles.title}>
                    Mas Vamos pra uma Biografia mais pessoal!
                </h5>
                <p>
                Mas sendo um pouco mais pessoal... Além de apaixonado pela combinação de react e um café,<br/> sou um apaixonado pelas corridas, especialmente de montanhas, <br/>no meu tempo livre gosto de realizar atividades físicas, passar um tempo com a família e ....

                </p>
            </main>
        </div>
    )
}