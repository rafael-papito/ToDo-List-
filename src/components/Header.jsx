import styles from './Header.module.css';
import toDoLogo from '../assets/Logo.svg';
export function Header(){
    return(
        <div className={styles.header}>
            <img src={toDoLogo} alt="imagem da lgo" />
        </div>
    )
}