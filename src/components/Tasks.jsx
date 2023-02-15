import styles from './Tasks.module.css'
import { Trash } from 'phosphor-react'
export function Tasks(){
    return(
        <article className={styles.tasks}>
            <header>
                <div className={styles.created}>
                    <p>Tarefas criadas <span>5</span></p>
                </div>
                <div className={styles.completed}>
                <p>concluidos<span>2 de 5</span></p>
                </div>
            </header>





            <div className={styles.list}>
               <form>
                    <input type="checkbox" name="" id="" />
                    <p>Lavar o tapete da sala de TV</p>
                    <Trash size={20}/>
               </form>
            </div>
        </article>
    )
}