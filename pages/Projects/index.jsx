import styles from "../../styles/Home.module.css"
export default function Projects () {

    return (
        <div className={styles.main}>
            <h1 className={styles.title}><a href="https://projeto-tera.vercel.app/">E-Commerce</a></h1>
            <p className={styles.description}>Esse Projeto foi desenvolvido no BootCamp da <a href="https://somostera.com/">Tera</a>,Foi desenvolvido em react no front-end e o back-end em Node.js. <br/>As telas foram divididas em Homepage,Pagina do produto, login,perfil do usuário e por fim carrinho de compras.</p>
        </div>
    )
}