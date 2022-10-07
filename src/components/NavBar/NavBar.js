import Link from 'next/link'
import styles from './NavBar.module.css'
export default function NavBar (){
    return(
        <div className={styles.container}>
            <div className={styles.navbar}>
                <nav >
                    <ul>
                    <Link href="/"><a><li>HomePage</li></a></Link>
                    <Link href="/About"><a><li>About</li></a></Link>
                    <Link href="/Projects"><a><li>Projects</li></a></Link>
                    <Link href="/Contact"><a><li>Contact</li></a></Link>
                    </ul>
                </nav>
            </div>
        </div>
    )
}