import Head from "next/head";

import Image from "next/image";
import styles from "../../styles/Home.module.css"
import container from "../About/about.module.css"
import teste from "../../public/eu.jpeg"
export default function About (){
    return(
        <div className={styles.container}>
            <Head>
                <title>About</title>
            </Head>
            <main className={styles.main}>
               
            <Image 
                            src={teste}
                            alt="Gustavo"
                            width={400}
                            height={500}
                    />
                <div className={container.card}>
                
                    <p className={styles.description}>
                    Me chamo Gustavo, tenho 25 anos, sou natural de Guarapuava - PR, mas moro em Joinville - SC a mais ou menos 14 anos.<br/> 
Apaixonado por Corrida de montanha, de preferência as que são de 20km a 30km que foi a prova mais longa que já acabei correndo, no resto do meu tempo livre gosto de fazer outra atividade física, viajar pra campo alegre e passar tempo com a família.

Atualmente estou buscando realizar uma transição de carreira para área de tecnología, correndo atrás da tão sonhada e idealizada primeira oportunidade!<br/> 
Desenvolvi esta página com o objetivo de exercitar meus conhecimentos em HTML, CSS e tudo que aprendi com os cursos realizados ou em andamento e experiências que me desafiaram! 



                    </p>
                </div>
       
            </main>
        </div>
    )
}